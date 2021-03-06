window.CS2 = (function() {
    function getScript(url, callback) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.src = url;

        // Handle Script loading
        {
            var done = false;

            // Attach handlers for all browsers
            script.onload = script.onreadystatechange = function() {
                if ( !done && (!this.readyState ||
                    this.readyState == "loaded" || this.readyState == "complete") ) {
                    done = true;
                    if (callback) {
                        callback();
                    }
                    // Handle memory leak in IE
                    script.onload = script.onreadystatechange = null;
                }
            };
        }

        head.appendChild(script);
    }

    function rawurlencode (str) {
        str = (str + '').toString();
        // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
        // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
        return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
            replace(/\)/g, '%29').replace(/\*/g, '%2A');
    }

    var CS = {
        COMMENT_HOST          : 'comment.9gag.com',
        COMMENT_FRAME_PATH    : '/comment/list',

        logout: function() {
            var nextURL = rawurlencode('/comment/list?appId='+ this.options.appId +'&url=' + this.options.url);
            var logoutURL = "/user/logout?next=" + nextURL;
            location.href = logoutURL;
        },

        init : function(options) {
            options.target  = options.target;
            options.appId   = options.appId;
            options.auth    = options.auth   || '';
            options.count   = options.count  || 5;
            options.cross   = options.cross  || '';

            options.ownerId     = options.ownerId || '';
            options.signature   = options.signature || '';
            options.loginUrl    = options.loginUrl || '',
            CS.COMMENT_HOST = options.host || CS.COMMENT_HOST;

            this.options = options;

            this.comments = {};
            this.frame = {};


            var comment, targetId;
            var targetIds = options.target.split(',');
            for (var i = 0, c = targetIds.length; i < c; i++) {
                targetId = targetIds[i];
                comment = document.getElementById(targetId);
                if (!comment) {
                    continue;
                }

                var width = comment.getAttribute('data-width') || "100%";
                if (width != "100%") {
                    width = parseInt(width, 10) + 'px';
                }
                comment.style.width = width;

                var href = comment.getAttribute('data-href');
                var domId = 'gcomment-widget-' + targetId;
                var url, html;
                if (href) {
                    url = CS._formatFrameUrl(href);
                    html = '<iframe src="' + url + '" name="' + domId + '" scrolling="no" id="' + domId + '" src="about:blank" style="min-height:100px;" width="' + width + '" frameborder="0" height="700"></iframe>';
                } else {
                    html = '<iframe name="' + domId + '" id="' + domId + '" scrolling="no" src="about:blank" style="min-height:100px;" width="' + width + '" frameborder="0" height="700"></iframe>';
                }

                comment.innerHTML = html;
                comment.setAttribute('data-rendered', '1');

                this.comments[targetId] = comment;
                this.frame[targetId] = window.document.getElementById(domId);
            }

            var self = this;
            getScript("//" + CS.COMMENT_HOST + "/js/porthole.min.js", function() {
                var windowProxy = new Porthole.WindowProxy(options.cross, domId);
                windowProxy.addEventListener(function onMessage(messageEvent) {

                    
                    switch (messageEvent.data.action) {
                        case 'custom-login':
                            if (messageEvent.data.loginUrl) {
                                window.location = messageEvent.data.loginUrl;
                            }
                        break;

                        case 'resize':
                            if (messageEvent.data.height) {
                                self.frame[targetIds[0]].style.height = messageEvent.data.height + 'px';
                                self.comments[targetIds[0]].style.height = messageEvent.data.height + 'px';
                            }
                        break;

                        case 'scroll-to-comment':
                            if (window.jQuery) {
                                var id = '#jsid-comment-sys';
                                jQuery('html, body').animate({scrollTop: jQuery(id).offset().top - 30}, 1000);
                            }
                        break;

                        case 'comment-box-focused':
                            if (window.jQuery) {
                                var id = '#jsid-comment-sys';
                                var offsetY = messageEvent.data.offset;
                                var height = messageEvent.data.replyBoxHeight;

                                // windowBottom = distance from the top of the entire document to the bottom of currently visible area
                                var windowBottom = jQuery(window).scrollTop() + jQuery(window).height();
                                // newOffset = commentSystem's top offset from the document (main frame)
                                //            + the reply comment box's offset from the comment system document (in iframe)
                                var newOffset = (jQuery(id).offset().top + offsetY);

                                if (newOffset > windowBottom - 40 - height) {
                                    jQuery(window).scrollTop(newOffset - jQuery(window).height()/2);
                                }
                            }
                        break;

                    }
                });
            });
        },

        setLoginUrl : function(loginUrl) {
            this.options.loginUrl = loginUrl;
        },

        load: function() {
            var targetId, targetUrl, comment, domId;
            if (arguments.length <= 1) {
                targetUrl = arguments[0];

                for (var targetId in this.comments) {
                    comment = this.comments[targetId];
                    if (targetUrl) {
                        comment.setAttribute('data-href', targetUrl);
                    } else {
                        targetUrl = comment.getAttribute('data-href');
                    }

                    domId = 'gcomment-widget-' + targetId;
                    document.getElementById(domId).contentWindow.location.replace(CS._formatFrameUrl(targetUrl));
                }
            } else if (arguments.length === 2) {
                targetId = arguments[0];
                targetUrl = arguments[1];

                comment = this.comments[targetId];
                if (targetUrl) {
                    comment.setAttribute('data-href', targetUrl);
                } else {
                    targetUrl = comment.getAttribute('data-href');
                }

                domId = 'gcomment-widget-' + targetId;
                document.getElementById(domId).contentWindow.location.replace(CS._formatFrameUrl(targetUrl));
            }

        },

        _formatFrameUrl : function(href) {
            var url = 'http://' + this.COMMENT_HOST + this.COMMENT_FRAME_PATH;

            var params = {
                'url' : href,
                'count' : this.options.count,
                'appId' : this.options.appId,
                'auth' : this.options.auth,
                'readOnly' : (this.options.readOnly ? '1' : '0'),
                'ownerId' : this.options.ownerId,
                'signature' : this.options.signature
            };
            if (this.options.loginUrl) {
                params['loginUrl'] = this.options.loginUrl;
            }

            var hash = '' + window.location.hash;
            if (hash && hash.indexOf('#cs_comment_id=') ===0) {
                params['commentId'] = hash.substr(15);
            }


            url += "?";
            for (var key in params) {
                url += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
            }
            return url;
        }
    };


    return CS;
})();

if (window.csAsyncInit) {
    window.csAsyncInit();
}

