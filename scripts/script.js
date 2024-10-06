const square = document.querySelectorAll(".square");
const restartBtn = document.getElementById("restartButton");
const winDialog = document.getElementById("winDialog");
let gameOver = false;
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const players = ["X","O"];
let player = 0;

function showWin(txt){
    winDialog.textContent="Congratulations to User "+txt;
    winDialog.style.right = 0;
}
let checkWin = ()=>{
    let i=0;
    for(i=0;i<winningCombinations.length;i++){
        comb = winningCombinations[i];
        let val1 = document.getElementById(comb[0]).textContent;
        let val2 = document.getElementById(comb[1]).textContent;
        let val3 = document.getElementById(comb[2]).textContent;
        if(val1 == val2 && val2 == val3 && val1!=""){
            showWin(val1);
            break;
        }
    }
    if(i!=winningCombinations.length)
        return true;
    return false;
}
let checkOverlap = function(d){
    if(d.textContent=="")
        return false;
    return true;
}
function updateGame(e){
    if(!gameOver){
        if(checkOverlap(e.target)){
            alert("Already played there");
        }else{
            e.target.textContent = players[player];
            gameOver = checkWin();
            player = (player+1)%2;
        }
    }
}
square.forEach((square)=>{
    square.addEventListener('click',updateGame);
})

restartBtn.addEventListener('click',()=>{
    square.forEach((sq)=>{
        sq.textContent="";
        gameOver=false;
        winDialog.style.right="-100%";
    })
})