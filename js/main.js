/**
 * Created by dakotaleonard on 2/14/16.
 */

var headerSize = "3.5% 0";

var onHeaderClick = function()
{
    var thisHeader = $(this);
    var thisTitle = thisHeader.children();

    if(thisHeader.hasClass("z-depth-2"))
    {
        thisHeader.removeClass("z-depth-2");

        thisTitle.animate({
            "padding": headerSize
        },700);
    }
    else
    {
        thisHeader.addClass("z-depth-2");

        //Change size
        thisTitle.animate({
            "padding-top":"1%",
            "padding-bottom":"1%"
        },700);

        //Set scroll
        scrollToElement(thisHeader);

    }
};

var scrollToElement = function(element)
{
    var offset = element.offset();
    $('html, body').animate({
        scrollTop:(offset.top-64)
    }, 700);
}

var onNavClick = function()
{
    var thisHeader = $($(this).attr("link"));

    if(thisHeader.hasClass("z-depth-2")) //Already enabled so just scroll to it
    {
        scrollToElement(thisHeader);
    }
    else
    {
        thisHeader.trigger("click");
    }

};

var resizePDFViewer = function()
{
    var pdf = $("#resume-pdf")[0];
    pdf.height = $(document).width() * .42;
}

$(document).ready(function()
{
    //Adjust header heights
    var footerOffset = $(".page-footer").offset();
    var footerBottom = footerOffset.top + $(".page-footer").height();
    if(footerBottom < $(window).height())
    {
        headerSize = "5% 0";
        $(".header").animate({
            "padding": headerSize
        },0);
    }

    //$("#wip-modal").openModal();
    $('#view-classes-btn').leanModal();


    $(".button-collapse").sideNav();

    $(".header").click(onHeaderClick);
    $(".nav-link").click(onNavClick);
    resizePDFViewer();
    Materialize.toast("Click on a category to get started", 5000, "rounded z-depth-3");
});

$(window).resize()
{
    resizePDFViewer();
}



