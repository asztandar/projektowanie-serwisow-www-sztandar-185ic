//wczytanie naszego płótna
var cvs = document.getElementById("canvas");
//tworzymy kontekst
var ctx = cvs.getContext('2d');
//rozciągamy nasz konteksty (płótno) na cały ekran
cvs.width = window.innerWidth - 1;
cvs.height = window.innerHeight - 10;

// inicjalizujemy obrazy 
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

//zmienne dodatkowe
var punkty = 0; //punkty

var odleglosc = 475; //odleglosc miedzy "rurami"
var constant = pipeNorth.height+odleglosc; //odleglosc od gornej rury + "odleglosc"
var birdX = 100; //wspolrzedne X naszego "ptaka"
var birdY = 150; //wspolrzedne Y naszego "ptaka"
var grawitacja = 2; //grawitacja nasza
var pipe = [];
pipe[0] = {
    x : cvs.width,
    y : 0
};



//wczytujemy konkretne grafiki
function inicjalizujObiekty(punkty) {
    switch (punkty) {
        case 0:
            bird.src = "images/bird.png";
            bg.src = "images/bg3.png";
            fg.src = "images/fg.png";
            pipeNorth.src = "images/pipeNorth.png";
            pipeSouth.src = "images/pipeSouth.png";
            break;
        case 5:
            bird.src = "images/bird2.png";
            bg.src = "images/bg6.png";
            fg.src = "images/fg.png";
            pipeNorth.src = "images/pipeNorth22.png";
            pipeSouth.src = "images/pipeSouth22.png";
            break;
        case 10:
            bird.src = "images/bird3.png";
            bg.src = "images/bg7.png";
            fg.src = "images/fg.png";
            pipeNorth.src = "images/pipeNorth33.png";
            pipeSouth.src = "images/pipeSouth33.png";
            break;
    }

}

//wychwycenie zdarzenia nacisniecia przycisku
document.addEventListener('keydown',podskocz); 
function podskocz(){
    birdY -= 33;
}





// draw images

function draw() {
    //w zaleznosci od zdobirdYtych pkt wczytaj odpowiednia grafike
    if (punkty == 0)
        inicjalizujObiekty(0); 
    if (punkty == 5)
        inicjalizujObiekty(5);
    if (punkty == 10)
        inicjalizujObiekty(10);
    //rysuj tlo
    ctx.drawImage(bg, 0, 0, bg.width, bg.height, 0, 0, cvs.width, cvs.height);
    //rysuj "rury"
    for(var i=0;i<pipe.length;i++){
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
        pipe[i].x -= 6;
        //generowanie nowych "rur"
        if(pipe[i].x == 625){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            });
        }
        //kolizja
        if( birdX + bird.width >= pipe[i].x && birdX <= pipe[i].x + pipeNorth.width && (birdY <= pipe[i].y + pipeNorth.height || birdY+bird.height >= pipe[i].y+constant) || birdY + bird.height >=  cvs.height - fg.height){
            
           location.reload(); // załadowanie strony na nowo
        }
        if(pipe[i].x == 5){
            punkty++;
            
        }
    }
     
    //rysuj dol tla 
    ctx.drawImage(fg, 0, cvs.height - fg.height, cvs.width, cvs.width);
    //rysuj "ptaka"
    ctx.drawImage(bird,birdX,birdY);
    //przyciaganie grawitacji
    birdY += grawitacja;
    //wynik
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Aktualne punkty : "+punkty,10,cvs.height-20);
 




    requestAnimationFrame(draw);
}


draw();
























