function playerdices(){
    randomNumber1 =  Math.floor(Math.random()*6);
    playerdice_1 = array[randomNumber1];
    return playerdice_1;
}


var array = ["./dice1.png","./dice2.png","./dice3png","./dice4.png","./dice5.png","./dice6.png"]

pd1 = playerdices();
pd2 = playerdices();
document.querySelector(".img1").setAttribute("src",pd1);
document.querySelector(".img2").setAttribute("src",pd2);

if(pd1<pd2){
    document.querySelector("h1").textContent = "Player2 wins";
}
else if (pd1>pd2) {
    document.querySelector("h1").textContent = "Player1 wins";
}
else{
    document.querySelector("h1").textContent = "Draw Match";
}





