
************
function updateHeading(newHeading)
{
    let h1=document.querySelector("h1");
    h1.innerHTML=newHeading;
}
function changer()
{
    let place=prompt("Which city do you live in?");
    let temprature=prompt(`What is the current temprature in °c  ${place}`);
    if (temprature<=0)
{
    updateHeading("");
        
    updateHeading(`🥶<br>Currently ${temprature}° in ${place}`);

    
}
else if(temprature>30)
{
    updateHeading("");
    updateHeading(`🥵<br>Currently ${temprature}° in ${place}`);
}
else if(temprature>0 && temprature<=30)
{
    // updateHeading("");
    updateHeading(`😎<br>Currently ${temprature}° in ${place}`);
}
else{
    alert("Please enter only numercal data:");
    changer();
}

}
let buttonClick=document.querySelector("button");
butttonClick:addEventListener("click",changer);
