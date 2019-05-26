$(document).ready(function(){
    var sideMenu = $('#side-menu');
    var toggleSideMenu = $("#toggle-side-menu");
    var closeSideMenu = $("#close-side-menu");
    var contact = $("#contact");
    
    toggleSideMenu.click(function(){
        sideMenuShow();
    });
    
    closeSideMenu.click(function(){
        sideMenuHide();
    });
    
    function sideMenuShow() {
        sideMenu.addClass("d-inline-block animated fadeInLeft");
        contact.addClass("d-none");
        closeSideMenu.addClass("d-inline-block");
        toggleSideMenu.addClass("d-none");
    }
    
    function sideMenuHide() {
        sideMenu.removeClass("d-inline-block animated fadeInLeft");
        contact.removeClass("d-none");
        contact.addClass("animated fadeInLeft");
        closeSideMenu.removeClass("d-inline-block");
        toggleSideMenu.removeClass("d-none");
    }
});