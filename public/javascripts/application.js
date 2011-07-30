// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function () {
    // Set selected menu item
    var path = location.pathname.substring(1);
    setNav(path);

    // Menu image rollovers
    preload();
    rollovers(path);
});

// Top image effects
var mygallery = new fadeSlideShow({
    wrapperid: "topImage",
    dimensions: [960, 250],
    imagearray: [
    ["../images/topImage2.png"],
	["../images/topImage3.png"],
	["../images/topImage4.png"],
	["../images/topImage5.png"]
],
    displaymode: { type: 'auto', pause: 5000, cycles: 0, wraparound: false },
    persist: false,
    fadeduration: 2500,
    descreveal: "ondemand",
    togglerid: ""
})