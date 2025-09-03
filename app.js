let gameSeq=[];
let userSeq=[];
let btns=["red","blue","yellow","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started==false){ 
        console.log("game started");
        started=true;
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;


    //phle random button kochoose karega aur phir button ko flash kareyaga;
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx];
    gameSeq.push(randomColor);
    console.log(gameSeq);
    let randBtn=document.querySelector(`.${randomColor}`);
    btnFlash(randBtn);

}
function checkAns(idx){
    // console.log("current level: ",level);
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        console.log("Same Value");
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`GAME OVER!! Your score was <b>${level}</b> <br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    console.log(this);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq); 
    checkAns(userSeq.length-1);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
