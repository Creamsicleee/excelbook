// http://jsbeautifier.org/
var hostname = new RegExp(location.host);






// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
function setLinkIcons() {
    $('a').each(function() {

        var url = $(this).attr("href");
        var target = $(this).attr("target");
        if (url) {
            // Test if current host (domain) is in it
            if (hostname.test(url)) {
                // If it's local...
                // $(this).addClass('internal-url');
            } else if (url.slice(0, 1) == "/") {
                // $(this).addClass('internal-url');
            } else if (url.slice(0, 1) == "#") {
                // It's an anchor link
                $(this).addClass('internal-page-anchor');
                $(this).removeAttr("href");
                $(this).attr("data-href", url);
            } else {
                // a link that does not contain the current host
                // $(this).attr("target", "_blank");
                // $(this).addClass('external-url');
            }
        }
        if (target == "_blank") {
            if ($(this).children().length == 0) {
                $(this).addClass('target-blank-url');
            }
        }
    });
}
// --------------------------------------------------------------------------
function setLinkClick() {
    $("a").click(function() {

        var href = $(this).attr("data-href");

        if (href) {
            location.href = href;
        }
    });
}
// --------------------------------------------------------------------------
function applySlider() {
    $(".owl-carousel").owlCarousel({

        slideSpeed: 300,
        paginationSpeed: 400,
        pagination: true,
        singleItem: true

        // Show next and prev buttons
        // navigation : true,
        // singleItem:true
        // autoPlay:3000,
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
}

// --------------------------------------------------------------------------
var hideByUser = false;

function setFixedMenuVisible(visible, isUserAction) {
    var panel = $('#style-switcher');
    var width = $("#style-switcher-panel").width();

    if (visible && !panel.hasClass('active')) {
        panel.addClass('active');
        panel.animate({
            right: 0
        }, width);
        $('#style-switcher-toggle').removeClass("off");
        $('#style-switcher-toggle').addClass("on");
        if (isUserAction) {
            hideByUser = false;
        }
    } else if (!visible && panel.hasClass('active')) {
        panel.animate({
            right: -width
        }, width);
        panel.removeClass('active');
        $('#style-switcher-toggle').removeClass("on");
        $('#style-switcher-toggle').addClass("off");
        if (isUserAction) {
            hideByUser = true;
        }
    }
}
// --------------------------------------------------------------------------


function setOnClickFixedMenu() {
    $("#style-switcher a[name='top']").remove();
    //
    $('#style-switcher-toggle').on('click', function(e) {
        var panel = $('#style-switcher');
        var visible = !panel.hasClass('active');
        setFixedMenuVisible(visible, true);
    });
}
// --------------------------------------------------------------------------


function configShowHideFixedMenuWhenScroll() {

    $(window).scroll(function() {
        var windowScrollTop = $(window).scrollTop();
        if (windowScrollTop < 300) {
            setFixedMenuVisible(false, false);
        } else {
            if (!hideByUser) {
                setFixedMenuVisible(true, false);
            }
        }
    });
}

// --------------------------------------------------------------------------

function hideEmptyCategory() {
    $("div.cat-entry > ul").each(function() {

        if ($(this).children().length == 0) {
            $(this).parent().hide();
        }
    });
}
// --------------------------------------------------------------------------
var AUTO_CLICK_COUNT = 0;

// --------------------------------------------------------------------------
$(document).ready(function() {

    setLinkIcons();
    setLinkClick();
    hideEmptyCategory();
    applySlider();

    setOnClickFixedMenu();
    setFixedMenuVisible(false, false);

    configAdsFloatBar();
    configShowHideFixedMenuWhenScroll();
    // configIssue();
    // __s__();

    // openAds();
});
// --------------------------------------------------------------------------