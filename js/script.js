$(document).ready(function () {
    $(document).click(function () {
        $('.top').slideUp(2500);
    });  
      //smooth scrolling
    $("#to-top").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
      //smooth scrolling
    $("#toContact").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
    //smooth scrolling
    $("#toPortfolio").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
      //smooth scrolling
    $("#toAbout").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
      //smooth scrolling
    $("#topOne").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
    //smooth scrolling
    $("#topTwo").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
    //smooth scrolling
    $("#learn").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
    //smooth scrolling
    $("#toContact").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
    //navbar
    $('#sidebar-wrapper').hide();
    $("#menu-toggle").click(function () {
        $("#sidebar-wrapper").slideToggle(700);
    });
    $("#menu-close").click(function () {
        $('#sidebar-wrapper').slideToggle(700);
    });
    //scroll-to-top button
    $("#to-top").hide();
    $(window).scroll(function () {
        var hT = $('#info').offset().top,
            hH = $('#info').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $("#to-top").show();
        } else if (wS < (hT + hH - wH)) {
            $("#to-top").hide();
        }
    });
});