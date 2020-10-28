var data = new Date();

var aktualnaGodzina = data.getHours();

function czyJestNoc(){
    if(aktualnaGodzina >18){
        document.body.style.backgroundColor = "#455A64";
    }
    else{
        document.body.style.backgroundColor = "#fff";
    }
}
czyJestNoc();