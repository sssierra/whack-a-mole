window.onload = function()
{
    var dirt = document.getElementsByClassName('dirt');
    var sound = document.getElementById("sound"); 
    var grid = document.getElementById("dirt-box"); 
    
    var score = 0;    
    
    for (let i = 0; i < dirt.length; i++)
    {
        dirt[i].addEventListener("click", function click() 
        {
            if (dirt[i].innerHTML)
            {
                sound.play();
                dirt[i].innerHTML = "";
                score++;
                document.getElementById("score").innerHTML = "Score: " + score;

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
    mole.setAttribute("class", "mole");
    var random = Math.floor(Math.random() * Math.floor(dirt.length));
    
    if (dirt[random].innerHTML === "")
    {
        dirt[random].appendChild(mole);
    }
    else
    {
        console.log("There are too many moles!");
    }
}, 1000);
};
