let gameSeq = [];
let userSeq = [];

let btns = ["green","yellow","red","purple"];

let gameStart = false;
let level = 0;

let h4 = document.querySelector("h4");

document.addEventListener("keypress", function(){
    if(gameStart == false){
        console.log("Game is Started");
        gameStart = true;

        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500);
}

function levelUp(){
    userSeq = [];
    level++;
    h4.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    btnflash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h4.innerHTML = `Game Over! Your <b> Score is ${level} </b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "gray";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".box");
for(btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameStart = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}