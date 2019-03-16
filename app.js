window.onload = function()
{
    var hole = document.getElementsByClassName('dirt');
    var sound = document.getElementById("sound"); 
    var dirt = document.getElementById("dirtBox");    
    var score = 0;
    document.getElementById("score").innerHTML = "Score: " + score;
    
    
    for (let i = 0; i < dirt.length; i++)
    {
        dirt[i].addEventListener("click", function () 
        {
            if (dirt[i].innerHTML)
            {
                sound.play();
                dirt.innerHTML = "";
                score++
            }
            else
            {
                console.log("Nothing is there.");
            }
        })
    }



setInterval (function setMole()
{
    var mole = document.createElement("div");
    mole.setAttribute("id", "mole");
    var index = Math.floor(Math.random() * Math.floor(dirt.length));
    
    if (dirt[index].innerHTML == "")
    {
        dirt[index].appendChild(mole);
    }
    else
    {
        console.log("There are too many moles!");
    }
}
, 3000);
}