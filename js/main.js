/**
 * Created by dakotaleonard on 2/14/16.
 */
var onHeaderClick = function(eventObject)
{
    var thisElement = $(this);
    if(thisElement.hasClass("z-depth-5"))
    {
        thisElement.removeClass("z-depth-5");
    }
    else
    {
        thisElement.addClass("z-depth-5");
    }
};

$(document).ready(function()
{
    $(".button-collapse").sideNav();
   // $('.header').scrollSpy();

    $(".header").click(onHeaderClick);
});