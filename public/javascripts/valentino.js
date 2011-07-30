/* Validate email address is in correct format using a regular expression */
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

/* JQuery Add Action Modal Form */
function modalForm(p_title, div, height, width) {
    p_title = p_title || "";
    $("#" + div).dialog({ autoOpen: false,
        height: height,
        width: width,
        title: p_title,
        resizable: false,
        modal: true,
        open: function (event, ui) { $(".ui-dialog-titlebar-close").show(); },
        overlay: { backgroundColor: "#000", opacity: 0.5 }
    });
}

/* Confirm Logout */
function confirmLogout(p_title, p_message, _loc) {
    p_title = p_title || "";
    $("<div>" + p_message + "</div>").dialog({
        title: p_title,
        resizable: false,
        modal: true,
        overlay: { backgroundColor: "#000", opacity: 0.5 },
        buttons: { "Yes": function () { window.location.href = _loc + 'Home/Logout', $(this).dialog("close"); }, "No": function () { $(this).dialog("close"); } },
        close: function (ev, ui) { $(this).remove(); }
    });
}

/* Alert OK */
function alertOK(p_title, p_message) {
    p_title = p_title || "";
    $("<div>" + p_message + "</div>").dialog({
        title: p_title,
        resizable: false,
        modal: true,
        overlay: { backgroundColor: "#000", opacity: 0.5 },
        buttons: { "OK": function () { $(this).dialog("close"); } },
        closable: false,
        close: function (ev, ui) { $(this).remove(); }
    });
}

/* AJAX Loading */
function ajaxLoading() {
    $("<div class='center'><br /><br /><img src='/images/ajax-loader.gif' alt='Loading...' title='Loading...' /></div>").dialog({
        title: "Loading...",
        resizable: false,
        modal: true,
        overlay: { backgroundColor: "#000", opacity: 0.5 }
    });
}

/* Alert Blank */
function alertBlank(p_title, p_message) {
    p_title = p_title || "";
    $("<div>" + p_message + "</div>").dialog({
        title: p_title,
        resizable: false,
        modal: true,
        overlay: { backgroundColor: "#000", opacity: 0.5 },
        buttons: {},
        close: function (ev, ui) { $(this).remove(); }
    });
}

// Menu image rollovers 
function rollovers(loc) {
    {
        $("img.hover").hover(
             function () {
                 this.src = this.src.replace("Orig", "Over");
             },
             function () {
                 if ((loc == "" && this.id == "btnHome") || (loc == "Contact" && this.id == "btnContact") || (loc == "Our-Menus" && this.id == "btnMenus")) {
                     return;
                 }                 
                 else {
                     this.src = this.src.replace("Over", "Orig");
                 }
             }
            );
    }
}

// Pre-load images
function preload() {
    homeOver = new Image();
    homeOver.src = "/images/btnHomeOver.png";
    menusOver = new Image();
    menusOver.src = "/images/btnMenusOver.png";
    contactOver = new Image();
    contactOver.src = "/images/btnContactOver.png";
}

// Set nav
function setNav(loc) {
    if (loc.match("contact")) {
        var _src = $("#btnContact").attr('src').replace("Orig", "Over");
        $("#btnContact").attr('src', _src);
    }
    else if (loc.valueOf("menus")) {
        var _src = $("#btnMenus").attr('src').replace("Orig", "Over");
        $("#btnMenus").attr('src', _src);
    }
    else if (loc.match("Admin") || loc.match("LogOn")) {
        return;
    }
    else {
        var _src = $("#btnHome").attr('src').replace("Orig", "Over");
        $("#btnHome").attr('src', _src);
    }
}

// Get Google Map
function getMap() {
    		var pic = "";
        var map = new GMap2($("#map"));
        map.addControl(new GSmallMapControl());
        map.setCenter(new GLatLng(53.849568, -1.839256), 15);
        var spot = new GPoint(-1.839256, 53.849568);
        var pointer = new GMarker(spot, pic);
        map.addOverlay(pointer);
}