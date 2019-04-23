function clickButton()
{
    var button = document.getElementsByClassName("btn btn-primary");
    console.log("Find Button");
    if(button.length > 0)
    {
        button[0].click();
        console.log("Button clicked")
 
    }
    setTimeout(function(){ clickButton();}, 100);
}