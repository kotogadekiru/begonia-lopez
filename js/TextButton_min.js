function TextButton(text, color, path) {
    function onBtnClick() {
        if ("" != _path)
            if (-1 != _path.indexOf("http")) window.open(_path);
            else {
                var linkpath = "/" + _path + "/";
                window.location.hash == "#" + linkpath && Assets.MAIN_MENU.collapseMenu(), window.location.hash = linkpath
            }
    }
    var _instance = Touchable.apply(text);
    CSS.makeUnselectable(_instance), _instance.style.cursor = "pointer", _instance.style.color = color ? color : "#fff";
    var _effect = "",
        _path = path ? path : "";
    return _instance.init = function () {
        text.style.top = -Text.getOffsetY(text) + "px", _instance.onClick(onBtnClick), _instance.addClass("animate")
    }, _instance.addClass = function (effect) {
        _effect.length > 0 ? _effect += " " + effect : _effect = effect, text.setAttribute("class", _effect)
    }, _instance.setText = function (text) {
        _instance.innerHTML = text
    }, _instance.setPath = function (path) {
        _path = path
    }, _instance
}