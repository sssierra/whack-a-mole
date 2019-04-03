window.onload = function()
{
    var dirt = document.getElementsByClassName('dirt');
    var sound = document.getElementById("sound"); 
    var grid = document.getElementById("dirt-box"); 
    
    var score = 0;
    document.getElementById("score").innerHTML = "Score: " + score;
    
    
    for (let i = 0; i < grid.length; i++)
    {
        grid[i].addEventListener("click", function () 
        {
            if (grid[i].innerHTML)
            {
                sound.play();
                grid[i].innerHTML = "";
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
    var random = Math.floor(Math.random() * Math.floor(dirt.length));
    
    if (dirt[random].innerHTML === "")
    {
        dirt[random].appendChild(mole);
    }
    else
    {
        console.log("There are too many moles!");
    }
}
, 3000);
}
