/// <reference path="_references.js" />

$(document).ready(function() {
	var pageTitle = "Example dot com";	
	populateNav();
	populateTitle(pageTitle);
	populateFooter();
});

var populateNav = function() {
	var navSpacer = "\xa0 \xa0 \xa0 \xa0 \xa0";
	var elem = $("#header");
	
	var navItem = "<a href='/default.html' class='header-link'>DG</a>";
	elem.append(navItem);
	elem.append(navSpacer);
	
	navItem = "<a href='/about.html' class='header-link'>ABOUT</a>";
	elem.append(navItem);
	elem.append(navSpacer);
	
	navItem = "<a href='/links.html' class='header-link'>LINKS</a>";
	elem.append(navItem);
	elem.append(navSpacer);
	
	navItem = "<a href='/contact.html' class='header-link'>CONTACT</a>";
	elem.append(navItem);
}

var populateTitle = function(title) {
	$("#title").append(title);
}

var populateFooter = function() {
	var footerSpacer = "\xa0 | \xa0";
	var elem = $("#footerText");
	
	var footerItem = "<a href='/contact.html' target='_blank' class='footer-link'>dg dot com</a>";
	elem.append(footerItem);
	elem.append(footerSpacer);
	
	footerItem = "<a href='http://creativecommons.org/licenses/by/4.0/' target='_blank' class='footer-link'>Released under CC BY 4.0</a>"  ;
	elem.append(footerItem);
	elem.append(footerSpacer);
	
	footerItem = "<a href='http://github.com/invisibledane/DG-dot-com' target='_blank' class='footer-link'>Github</a>";
	elem.append(footerItem);
}