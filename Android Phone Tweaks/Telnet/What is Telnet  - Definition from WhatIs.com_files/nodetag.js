(function(){
var pfs={ "http://searchcloudstorage.techtarget.com/resources/Public-Cloud-Storage":{"nid":32659,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchfinancialsecurity.techtarget.com/resources":{"nid":32620,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchunifiedcommunications.techtarget.com/":{"nid":32621,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchfinancialapplications.techtarget.com/":{"nid":32663,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchservervirtualization.techtarget.com":{"nid":22273,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchbusinessanalytics.techtarget.com/":{"nid":29571,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchsolidstatestorage.techtarget.com/":{"nid":32670,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchnetworkingchannel.techtarget.com/":{"nid":32666,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchmidmarketsecurity.techtarget.com/":{"nid":32665,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcontentmanagement.techtarget.com/":{"nid":32557,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchenterprisedesktop.techtarget.com":{"nid":22272,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcloudapplications.techtarget.com":{"nid":32657,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchmanufacturingerp.techtarget.com/":{"nid":32664,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchsoftwarequality.techtarget.com/":{"nid":32669,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchsecuritychannel.techtarget.com/":{"nid":32667,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchenterpriselinux.techtarget.com/":{"nid":32617,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchmobilecomputing.techtarget.com/":{"nid":30147,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchdatamanagement.techtarget.com/":{"nid":29567,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchsystemschannel.techtarget.com/":{"nid":32672,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcloudcomputing.techtarget.com/":{"nid":29373,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchenterpriselinux.techtarget.com":{"nid":22269,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchvirtualdesktop.techtarget.com/":{"nid":22288,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchstoragechannel.techtarget.com/":{"nid":32671,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchvirtualstorage.techtarget.com/":{"nid":32674,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchwindevelopment.techtarget.com/":{"nid":32675,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcloudsecurity.techtarget.com/":{"nid":32618,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcloudprovider.techtarget.com/":{"nid":32658,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcio-midmarket.techtarget.com/":{"nid":32619,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchenterprisewan.techtarget.com/":{"nid":32661,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchwindowsserver.techtarget.com":{"nid":22271,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcio-midmarket.techtarget.com":{"nid":22293,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchsecurity.techtarget.co.uk/":{"nid":29573,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchnetworking.techtarget.com/":{"nid":22787,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchsqlserver.techtarget.com/":{"nid":29574,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcompliance.techtarget.com":{"nid":22294,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchsmbstorage.techtarget.com":{"nid":22291,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchdatabackup.techtarget.com":{"nid":22290,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchdatacenter.techtarget.com":{"nid":22268,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/|searchdatacenter.techtarget.com/es/"},
"http://searchsecurity.techtarget.com/":{"nid":29569,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchexchange.techtarget.com/":{"nid":32662,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://Searchvirtualdatacentre.co.uk":{"nid":31129,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchtelecom.techtarget.com/":{"nid":32673,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchoracle.techtarget.com/":{"nid":29572,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.digitalcamerareview.com/":{"nid":36947,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchdomino.techtarget.com/":{"nid":32660,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchstorage.techtarget.com":{"nid":22289,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchvmware.techtarget.com":{"nid":22287,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://SearchBusinessAnalytics.com":{"nid":31133,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchwinit.techtarget.com":{"nid":22270,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://SearchDataManagement.co.uk":{"nid":31131,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchsoa.techtarget.com/":{"nid":32668,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.printercomparison.com":{"nid":36953,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcrm.techtarget.com/":{"nid":29575,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchsap.techtarget.com/":{"nid":29568,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://SearchConsumerization.com":{"nid":31132,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://search400.techtarget.com":{"nid":22267,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.technologyguide.com/":{"nid":36948,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://searchcio.techtarget.com":{"nid":22292,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.b-eye-network.com/":{"nid":29570,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://whatis.techtarget.com/":{"nid":32558,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.tabletpcreview.com":{"nid":36950,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.notebookreview.com":{"nid":36952,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.knowledgestorm.com":{"nid":36954,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.theserverside.com/":{"nid":36956,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.desktopreview.com":{"nid":36951,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.2020software.com":{"nid":36957,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://SearchSecurity.co.uk":{"nid":31134,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://SearchStorage.co.uk":{"nid":31130,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.brianmadden.com":{"nid":36955,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://Computerweekly.com":{"nid":31127,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://www.brighthand.com":{"nid":36949,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://MicroScope.co.uk":{"nid":31128,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"},
"http://ajaxian.com":{"nid":36958,"tr":1,"ex":"http://searchdatacenter.techtarget.com/es/"} },d=document,w=window,u=(w.gm_fake_href)?w.gm_fake_href:w.location.href;

function z(n){
var s,u;

if (Math.random()>=n['tr']) {
	return;
}



var ar_nodes = ":32659:32620:32621:32663:22273:29571:32670:32666:32665:32557:22272:32657:32664:32669:32667:32617:30147:29567:32672:29373:22269:22288:32671:32674:32675:32618:32658:32619:32661:22271:22293:29573:22787:29574:22294:22291:22290:22268:29569:32662:31129:32673:29572:36947:32660:22289:22287:31133:22270:31131:32668:36953:29575:29568:31132:22267:36948:22292:29570:32558:36950:36952:36954:36956:36951:36957:31134:31130:36955:31127:36949:31128:36958:";
if (ar_nodes.indexOf(":"+n['nid']+":") >= 0) {	// adradar only
	(new Image).src="//amch.questionmarket.com/adscgen/adrad.php?survey_num=0&aicode=0&site="+n['nid'];
	return;
}



s=d.createElement('SCRIPT');
u='//content.dl-rms.com/dt/s/'+n['nid']+'/s.js';
s.src=u;
s.type='text/javascript';
d.getElementsByTagName('head')[0].appendChild(s);
}


function r() {
	var n="",p,x,u_alt,prot;
    prot = (location.protocol.indexOf('http') === 0) ? location.protocol: 'http:';
	while (1) {
        u_alt = (prot=='https:') ? u.replace("https:", "http:") : u.replace("http:", "https:");
		try {
			for (p in pfs) {
			  if ( (u.substring(0, p.length)==p || u_alt.substring(0, p.length)==p) && p.length > n.length) {
				if (pfs[p].ex) {
					x=new RegExp(pfs[p].ex,"i");
					if (x.test(u)) {
						continue;
					}
				}
				n=p;
			  }
			}
			if (n.length > 0) {
				z(pfs[n]);
				return;
			}
		} catch (e) {}
	
		if (w==top) {
			break;
		}
	
		if (w==window&&u!=d.referrer) {
			u=d.referrer;
		} else {
			w=w.parent;
		}
	}
}

if (d.readyState=="complete"){
	r();
} else if (w.addEventListener){ 
	w.addEventListener("load", r, false);
} else if (w.attachEvent){ 
	w.attachEvent("onload", r);
}
})();
