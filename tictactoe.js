let flag = true;
let counterX = 0
let counterO = 0;
let filled = 0;
let tictactoe = document.body.id
let bigBox = document.getElementById("big-box");
let box = document.querySelectorAll(".box");
let check = document.getElementById("check");
// Array of Winning Possibilities
let toWin = [[0,1,2],
           [3,4,5],
           [6,7,8],
           [0,3,6],
           [1,4,7],
           [2,5,8],
           [0,4,8],
           [2,4,6]];
// Winning Page Relocation
function relocateX()
{
    window.location.replace("winnerPageX.html");
}
function relocateO()
{
    window.location.replace("winnerPageO.html");
}
function relocateD()
{
    window.location.replace("drawPage.html");
}
// Algorithm to check for winning the game
function Winner()
{
    toWin.forEach(function f1(i)
    {
        i.forEach(function f2(j)
        {
            if(box[j].innerText == 'X')
            {
                counterX += 1;
                if(counterX == 3)
                {
                    // X is the Winner!!
                    setInterval(relocateX,900);
                    box.forEach(function x(i)
                    {
                        i.disabled = true;
                    })
                }
            }
            else if(box[j].innerText == 'O')
            {
                counterO += 1;
                if(counterO == 3)
                {
                    // O is the Winner!!
                    setInterval(relocateO,900);
                    box.forEach(function x(i)
                    {
                        i.disabled = true;
                    })
                }
            }
        })
        counterX = 0;
        counterO = 0;
    })
}
// Algorithm to check for a Draw Game
function drawCheck()
{
    if(filled == 8)
        {
            setInterval(relocateD,1000);
        }
}
// A click of the button arguments
box.forEach(element => {
    element.addEventListener('click',function onclick()
    {
        if(flag)
        {
            flag = false;
            element.innerText = "X";
            element.style.backgroundColor = "rgb(13,194,194)"
            element.disabled = true;
            Winner();
            drawCheck();
            filled += 1;
        }
        else
        {
            flag = true;
            element.innerText = "O";
            element.style.backgroundColor = "rgb(179, 20, 20)"
            element.disabled = true
            Winner();
            drawCheck();
            filled += 1;
        }
    });
});

