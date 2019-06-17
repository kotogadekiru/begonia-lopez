function Main() {
	function setupStandards() {
		Assets.setupLayers(), AnimationUtils.apply(Assets.LAYER_TEMPLATE),
			setupResizeManager(),
			Assets.SCROLL_CONTROLLER = new ScrollController,
			Assets.SCROLL_CONTROLLER.init(document),
			Assets.RETINA_HANDLE = new RetinaHandle,
			setupContentManager(), addMainMenu(),
			ContentManager.init(Assets.CONTENT_PAGES, "home")
	}
	function setupResizeManager() {
		var settings = new ResizeManagerSettings;
		settings.setRoundWidthTo(1),
			settings.setRemoveScrollbar(BrowserDetect.TABLET !== !0 && BrowserDetect.MOBILE !== !0 ? !0 : !1),
			settings.setBreakPoints([{ width: 500, id: "mobile" }
				, { width: 1024, id: "tablet" }
				, { width: 999999, id: "desktop" }
			]), BrowserDetect.TABLET === !0 && settings.forceBreakPoint("tablet"), BrowserDetect.MOBILE === !0 && settings.forceBreakPoint("mobile"), Assets.RESIZE_MANAGER = new ResizeManager(settings)
	}
	function setupContentManager() {
		Assets.CONTENT = document.getElementById("content"),
			Assets.CONTENT_PAGES = ContentManager.getChildByAttr(Assets.CONTENT, "name", "pages"),
			Assets.CONTENT_GENERAL = ContentManager.getChildByAttr(Assets.CONTENT, "name", "general-data"),
			Assets.CONTENT.parentNode.removeChild(Assets.CONTENT),
			ContentManager.AUTOMATICALLY_TRACK_GOOGLE_ANALYTICS = !Debug.isLocalhost(),
			ContentManager.addTemplate("home", TemplateHome),
			ContentManager.addTemplate("projects-0", TemplateCasesOverview),
			ContentManager.addTemplate("principles", TemplatePrincip),
			ContentManager.addTemplate("profile", TemplateProfil),
			ContentManager.addTemplate("case-0", TemplateCase)
	}
	function addMainMenu() {
		Assets.MAIN_MENU = new MainMenu, Assets.LAYER_TOP.appendChild(Assets.MAIN_MENU),
			Assets.MAIN_MENU.init()
	}
	var _instance = document.createElement("div");
	_instance.style.position = "fixed",
		_instance.style.backgroundColor = UIColors.FONT_DARK;
	window.innerWidth, window.innerHeight;
	return _instance.init = function () { setupStandards() }
		, _instance
}