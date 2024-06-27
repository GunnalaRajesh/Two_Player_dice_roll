function playerdices(){
    randomNumber1 =  Math.floor(Math.random()*6);
    return randomNumber1;
}

var array = ["./dice1.png","./dice2.png","./dice3.png","./dice4.png","./dice5.png","./dice6.png"]
random1 = playerdices();
random2 = playerdices();
pd1 = array[random1];
pd2 = array[random2];
document.querySelector(".img1").setAttribute("src",pd1);
document.querySelector(".img2").setAttribute("src",pd2);
document.querySelector(".img1").setAttribute("alt",random1);
document.querySelector(".img2").setAttribute("alt",random2);

if(pd1<pd2){
    document.querySelector("h1").textContent = "Player2 wins";
}
else if (pd1>pd2) {
    document.querySelector("h1").textContent = "Player1 wins";
}
else{
    document.querySelector("h1").textContent = "Draw Match";
}





