/*! Bizo third-party module | This code is called as a dynamic page feature. */
TT(["util/logging","util/debug","context","util/base64"],function(e,t,o,i){var a=t.check("debug_bizo"),n=e.getLogger(a),r=t.check("bizo_nosend");n.log("Starting Bizo"),n.log("Getting full user"),o.getFullUser(function(e){n.log("User",e);var t,o={_bizo_data_partner_id:["2134","2134"]};e&&((t=e.specificTitle)&&(o._bizo_data_partner_title=[t,i.encode(t)]),(t=e.company)&&(o._bizo_data_partner_company=[t,i.encode(t)]),(t=(e.state&&e.state+", "||"")+(e.country||""))&&(o._bizo_data_partner_location=[t,i.encode(t)]),(t=e.employeeRangeDisplay)&&(o._bizo_data_partner_employee_range=[t,i.encode(t)])),n.dir&&n.dir(o);for(var t in o)window[t]=o[t][1],n.dir||n.log("var %s=%s",t,o[t]);if(r)n.log("Sending disabled; data will not be sent to Bizo");else{var a=document.createElement("script");a.type="text/javascript",a.defer=!0,a.async=!0,a.src=""+(window.location.protocol==="https:"?"https://sjs.":"http://js.")+"bizographics.com/insight.min.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)}})})