function format(key) {
    if (getUserLang() == "eng") {
        return "Example String"
    }
}

function getUserLang() {
    var lang = getCookie("selectedLang")
    if (lang == undefined) {
        lang = "eng"
    } else {
        return lang;
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


export { format }