function Footer( guides ) {
	var _instance = document.createElement("div");

	var OFFSET_PHONE = 160;
	if( BrowserDetect.MOBILE ) {
		OFFSET_PHONE = 160 * 0.7;
	}

	var _mail;
	//var _phone;

	_instance.init = function() {
		var data = ContentManager.getChildByAttr(Assets.CONTENT_GENERAL, "name", "pagefooter");

		_mail = Text.getNewReg(13);
		_mail.innerHTML = ContentManager.getChildByAttr(data, "name", "email").innerHTML;
		_mail.style.whiteSpace = "nowrap";

		// _phone = Text.getNewReg(13);
		// _phone.innerHTML = ContentManager.getChildByAttr(data, "name", "phone").innerHTML;
		// _phone.style.whiteSpace = "nowrap";

		_instance.appendChild(_mail);
		//_instance.appendChild(_phone);

		//_phone.style.color = _mail.style.color = UIColors.FONT_DARK;

		Assets.RESIZE_MANAGER.addEventListener(ResizeEvents.RESIZE, _instance.updateLayout);
		_instance.updateLayout();
	};

	_instance.updateLayout = function() {
		var textOffset = -11;
		TweenMax.set( _mail, { y:Assets.RESIZE_MANAGER.getScreenHeight() - SiteGuides.OFFSET_BOTOM + textOffset, x:guides.getGuide("start")} );
	//	TweenMax.set( _phone, { y:Assets.RESIZE_MANAGER.getScreenHeight() - SiteGuides.OFFSET_BOTOM + textOffset, x:guides.getGuide("start") + OFFSET_PHONE} );
	}

	return _instance;
}