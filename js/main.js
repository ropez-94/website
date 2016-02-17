/**
 * Created by dakotaleonard on 2/14/16.
 */
var onHeaderClick = function()
{
    var thisHeader = $(this);
    var thisTitle = thisHeader.children();

    if(thisHeader.hasClass("z-depth-2"))
    {
        thisHeader.removeClass("z-depth-2");

        thisTitle.animate({
            "padding":"3.5% 0"
        },200);
    }
    else
    {
        thisHeader.addClass("z-depth-2");

        //Change size
        thisTitle.animate({
            "padding-top":"1%",
            "padding-bottom":"1%"
        },200);

        //Set scroll
        var offset = thisHeader.offset();
        $('html, body').animate({
            scrollTop:(offset.top-64)
        }, 200);

        //Shrink
    }
};

var onNavClick = function()
{
    $($(this).attr("link")).trigger("click");
};

var resizePDFViewer = function()
{
    var pdf = $("#resume-pdf")[0];
    pdf.height = $(document).width() * .42;
}

$(document).ready(function()
{
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
