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
                dirt[i].innerHTML = "";
                score++
            }
            else
            {
                console.log("Nothing is there.");
            }
        });
    };



setInterval (function setMole()
{
    var mole = document.createElement("div");
    mole.setAttribute("id", "mole");
    var random = Math.floor(Math.random() * Math.floor(hole.length));
    
    if (hole[random].innerHTML === "")
    {
        hole[random].appendChild(mole);
    }
    else
    {
        console.log("There are too many moles!");
    }
}
, 3000);
}
