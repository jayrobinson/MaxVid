function doFunction(event) {
    if (event.name == "maximize") {
        i = event.message;

        if (i == 0) {
            document.getElementsByTagName('html')[0].setAttribute('class','maxvid');
        } else {
            document.getElementsByTagName('html')[0].setAttribute('class','');
            safari.self.tab.dispatchMessage("maximize-reset");
        }
    }
}

safari.self.addEventListener("message", doFunction, false);
