//#region Dane
// tworzymy json:
var json_zadanie1_samochod;
json_zadanie1_samochod =
    [
        {
            "marka": "pontiac",
            "model": "astre",
            "dane":
                {
                    "opisowe":
                    {
                        "poczatek_produkcji": 1972,
                        "koniec_produkcji": 1977,
                        "opis": "samochód osobowy klasy kompaktowej produkowany pod amerykańską marką"
                    },
                    "techniczne":
                    {
                        "liczba_miejsc": 4,
                        "masa_własna": 1250,
                        "prędkość_max": 165,
                        "napęd": "tylnie koła"
                    }
                },
                "zdjecie": "https://hatchheaven.com/wp-content/uploads/2011/11/pontiac_astre_74-880x711.jpg",
                
        },
        {
            "marka": "De Tomaso",
            "model": "Guarà",
            "dane":
                {
                    "opisowe":
                    {
                        "poczatek_produkcji": 1993,
                        "koniec_produkcji": 2004,
                        "opis": "samochód sportowy będący ostatnim projektem założyciela i właściciela firmy De Tomaso"
                    },
                    "techniczne":
                    {
                        "liczba_miejsc": 2,
                        "masa_własna": 1400,
                        "prędkość_max": 270,
                        "napęd": "tylnie koła"
                    }
                },
                "zdjecie": "https://upload.wikimedia.org/wikipedia/commons/8/82/Guara_2.jpg",
        }
    ]

var json_zadanie1_konsole;
json_zadanie1_konsole =
[
    {
        "nazwa": "PlayStation 5",
        "producent": "Sony Computer Entertainment",
        "CPU": "AMD Zen 2",
        "cena_szacowana": 2765,
        "cena_w_krajach": 
            {
                "polska": 2299,
                "niemcy": 1795
            }
    },
    {
        "nazwa": "Xbox Series X",
        "producent": "Microsoft",
        "CPU": "AMD Zen 2",
        "cena_szacowana": 2222,
        "cena_w_krajach": 
            {
                "polska": 1851,
                "niemcy": 1850
            }
    }
]
//#endregion
//#region Zadanie 1
//-zadanie1 start:
//-------------------------konsole-------------------------
function getJsonZad1Konsole_nazwa(n) {
    return JSON.stringify(json_zadanie1_konsole[n].nazwa);
}
function getJsonZad1Konsole_cena_szacowana(n) {
    return JSON.stringify(json_zadanie1_konsole[n].cena_szacowana);
}
function getJsonZad1Konsole_cena_w_polsce(n) {
    return JSON.stringify(json_zadanie1_konsole[n].cena_w_krajach.polska);
}

function roznica_cen(cenaSzacowana,cenaWKrajach){
    if(cenaSzacowana > cenaWKrajach)
        return "O " + (cenaSzacowana-cenaWKrajach) + " taniej niż przypuszczano."; 
    if(cenaSzacowana > cenaWKrajach)
        return "O " + (cenaSzacowana-cenaWKrajach) + " drożej niż przypuszczano."; 
    else{
        return "Ta sama cena, brak różnicy.";
    }
}

//----------------------------samochody------------------------
function getJsonZad1Auta_marka(n){
    return JSON.stringify(json_zadanie1_samochod[n].marka);
}
function getJsonZad1Auta_model(n){
    return JSON.stringify(json_zadanie1_samochod[n].model);
}
function getJsonZad1Auta_daneOpisowe_poczatek_produkcji(n){
    return JSON.stringify(json_zadanie1_samochod[n].dane.opisowe.poczatek_produkcji);
}
function getJsonZad1Auta_daneOpisowe_koniec_produkcji(n){
    return JSON.stringify(json_zadanie1_samochod[n].dane.opisowe.koniec_produkcji);
}
function getJsonZad1Auta_daneOpisowe_opis(n){
    return JSON.stringify(json_zadanie1_samochod[n].dane.opisowe.opis);
}
function getJsonZad1Auta_daneTechniczne_liczba_miejsc(n){
    return JSON.stringify(json_zadanie1_samochod[n].dane.techniczne.liczba_miejsc);
}
function getJsonZad1Auta_daneTechniczne_maxV(n){
    return JSON.stringify(json_zadanie1_samochod[n].dane.techniczne.prędkość_max);
}
function getJsonZad1Auta_zdjecie(n){
    return JSON.stringify(json_zadanie1_samochod[n].zdjecie);
}


function nazwaAutaIOpis(f1,f2,f3){
    var text = f1+" "+f2+", "+f3+".";
    var text2 = ""
    for(let i=0;i<text.length;i++)
    {
        if(text[i]!='"')
            text2+=text[i];
    }

    return text2.charAt(0).toUpperCase() + text2.slice(1);
}



var id=0;
var divZadanie1 = document.getElementById("zadanie1-rozwiazanie");
var paragrafyZadanie1 = document.getElementsByClassName("zadanie1-rozwiazanie-p");
paragrafyZadanie1[0].innerHTML = getJsonZad1Konsole_nazwa(id) + 
    "cena szacowana = "+getJsonZad1Konsole_cena_szacowana(id)+
    ", cena w polsce = "+getJsonZad1Konsole_cena_w_polsce(id)+". "+ 
    roznica_cen(getJsonZad1Konsole_cena_szacowana(id),getJsonZad1Konsole_cena_w_polsce(id)); 


var id_2=0;

paragrafyZadanie1[1].innerHTML = "Samochody. " + nazwaAutaIOpis(getJsonZad1Auta_marka(id_2),getJsonZad1Auta_model(id_2),getJsonZad1Auta_daneOpisowe_opis(id_2));
divZadanie1.innerHTML += '<img src='+getJsonZad1Auta_zdjecie(id_2)+' />';

//+zadanie1 end.
//#endregion
//#region Zadanie2
//-zadanie2 start: 
var pZadani2 = document.getElementsByClassName('zadanie2-rozwiazanie');
var adres = "https://jsonplaceholder.typicode.com/users/";
const prom = new Promise ((resolve, reject) =>{ 
    try
    {
        resolve(fetch(adres).then(response=>
            (response.json())
    
            ).then(data=>[data[0].id,data[1].id])) 
    }
    catch(e){
        reject(e.message);
    }
    
}
);


function dzialajNaProm(){
    prom.then(data=>pomnozId(data)).catch(m=>console.log(m)).finally(console.log("działa")); 
}
function pomnozId(arg){
    pZadani2[0].innerHTML = "Pierwsze ID: " + arg[0];
    pZadani2[1].innerHTML = "Drugie ID: " + arg[1];
    pZadani2[2].innerHTML = "Działanie na liczbach: " + arg[0] + " * " + arg[1] + " = " + arg[0]*arg[1];
}
dzialajNaProm();

var adres2 = "https://jsonplaceholder.typicode.com/photos";
const prom2 = new Promise ((resolve, reject)=>{
    try
    {
        resolve(fetch(adres2).then(response=>
            (response.json())
    
            ).then(data=>[data[0].title,data[1].title])) 
    }
    catch(e){
        reject(e.message);
    }
})
function dzialajNaProm2(){
    prom2.then(data=>polaczTekst(data)).catch(m=>console.log(m)).finally(console.log("działa")); 
}
function polaczTekst(arg){
    pZadani2[3].innerHTML = "Pierwszy tytuł: " + arg[0]; 
    pZadani2[4].innerHTML = "Drugi tytuł: " + arg[1]; 
    pZadani2[5].innerHTML = "Złączone: " + arg[0] + " AND " + arg[1];
}
dzialajNaProm2();

//+zadanie2 end.
//#endregion
//#region Zadanie 3
//-zadanie3 start: 
var adres3 = "https://jsonplaceholder.typicode.com/photos";
var pZadanie3 = document.getElementsByClassName('zadanie3-rozwiazanie');
async function zad3a(){
    var zad3var = await fetch(adres3).then(response=>(response.json()));
    var wAlbumie1 = 0;
    var wAlbumie2 = 0;
    let i;
    for(i in zad3var){
        if(zad3var[i].albumId == 1)
            wAlbumie1++;
        if(zad3var[i].albumId == 2)
            wAlbumie2++;
    }
    pZadanie3[0].innerHTML = "Ilość zdjęć w albumie nr.1: " + wAlbumie1;
    pZadanie3[1].innerHTML = "Ilość zdjęć w albumie nr.2: " + wAlbumie2;
    if(wAlbumie1>wAlbumie2)
        pZadanie3[2].innerHTML = "Działanie matematyczne: " + wAlbumie1 + " - " + wAlbumie2  + " = " + (wAlbumie1-wAlbumie2);
    else
        pZadanie3[2].innerHTML = "Działanie matematyczne: " + wAlbumie2 + " - " + wAlbumie1 + " = " + (wAlbumie2-wAlbumie1); 
    //console.log(zad3var[0].id);
}
zad3a(); 
async function zad3b(){
    var zad3bvar = await fetch(adres3).then(response=>(response.json()));
    var tekst = "";
    pZadanie3[3].innerHTML = "Tytuł zdjęcia nr.1: " + zad3bvar[0].title;
    pZadanie3[4].innerHTML = "Tytuł zdjęcia nr.2: " + zad3bvar[1].title;
    if(zad3bvar[0].title.length>zad3bvar[1].title.length)
    {
        tekst = zad3bvar[0].title + " AND " + zad3bvar[1].title;
        pZadanie3[5].innerHTML = "Tekst pierwszy jest dłuższy dlatego będzie pierwszy: " + tekst;
    }
        
    else{
        tekst = zad3bvar[1].title + " AND " + zad3bvar[0].title;
        pZadanie3[5].innerHTML = "Tekst drugi jest dłuższy dlatego będzie pierwszy: " + tekst;
    }
    //console.log(zad3var[0].id);
}
zad3b(); 
//+zadanie3 end.
//#endregion
//#region Zadanie 4
//-zadanie4 start: 
var pZadanie4 = document.getElementsByClassName('zadanie4-rozwiazanie');
var req = new XMLHttpRequest(); 
req.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
req.onload = () => {
    //var temp = req.responseText;
    var temp2 = JSON.parse(req.responseText);
    zad4aFunction(temp2);
    zad4bFunction(temp2);
}
req.onerror = () =>{
    pZadanie4[3].innerHTML = "Błąd połączenia z domeną";
}
req.send();

function zad4aFunction(arg){
    pZadanie4[0].innerHTML = "Ilość wszystkich postów: " + arg.length;
    let iloscPostowUser1 = 0;
    let i;
    for(i in arg){
        if(arg[i].userId == 1)
            iloscPostowUser1++;
    }
    pZadanie4[1].innerHTML = "Ilość postów użytkownika o id=1: " + iloscPostowUser1;
    pZadanie4[2].innerHTML = "Działanie matematyczne: " + arg.length + " / " + iloscPostowUser1 + " = " + (arg.length/iloscPostowUser1);
}

function zad4bFunction(arg){
    var komentarzeUser1 = "";
    for(i in arg){
        if(arg[i].userId == 1)
            komentarzeUser1 = komentarzeUser1 + arg[i].body + " <br/><br/> ";
    }
    pZadanie4[3].innerHTML = "Komentarze użytkownika o ID=1:";
    pZadanie4[4].innerHTML = komentarzeUser1;
}

//+zadanie4 end.
//#endregion
//#region Zadanie 5
//-zadanie5 start: 
function zad5(){
    var zad5var =fetch(adres3).then(response=>(response.json()));
    zad5var.then(data=>zadanie5task1(data));
    zad5var.then(data=>zadanie5task2(data[0]));
    //console.log(zad5var);
}
zad5();
var pZadanie5 = document.getElementsByClassName('zadanie5-rozwiazanie');
function zadanie5task1(arg){
    
    var sumaZad5 = 0;
    let i;
    for(i in arg){
        if(arg[i].albumId == 1){
            sumaZad5 += arg[i].id;
        }
    }
    pZadanie5[0].innerHTML = "Suma jest równa: " + sumaZad5;
}
function zadanie5task2(arg){
    var tytul = "";
    tytul += arg.title;
    pZadanie5[3].innerHTML = "Tytuł: " + tytul;
    var splitTytul = tytul.split(" "); 
    pZadanie5[4].innerHTML = "Tytuł split: " + splitTytul; 
    var coDrugie = "";
    for(let i=0;i<splitTytul.length;i++){
        if(i%2==0)
            coDrugie += splitTytul[i]+ " ";
    }
    pZadanie5[5].innerHTML = "Co drugie: " + coDrugie;
}

//+zadanie5 end.
//#endregion
//#region Zadanie 6
//-zadanie6 start: 
var configaxios = {
    url: 'https://jsonplaceholder.typicode.com/photos',
    method: 'get'
};

var zad6var = axios(configaxios).then(response=>response['data']);
//zad6var.then(data=>console.log(data[2].id));
zad6var.then(data=>zad6task1(data));
zad6var.then(data=>zad6task2(data));
var pZadanie6 = document.getElementsByClassName('zadanie6-rozwiazanie');
function zad6task1(arg){
    var ilZdjWAlbId1 = 0;
    var idPierwsze = 0;
    let pierwsza = false;
    let i;
    for(i in arg){
        if(arg[i].albumId == 1)
            ilZdjWAlbId1++;
        if(arg[i].albumId == 1 && pierwsza==false){
            pierwsza = true;
            idPierwsze = i;
        } 
    }
    pZadanie6[0].innerHTML = "ID pierwsze: " + idPierwsze;
    pZadanie6[1].innerHTML = "ID ostatnie: " + ilZdjWAlbId1; 
    var wynik6 = parseInt(idPierwsze)+ parseInt(ilZdjWAlbId1);
    pZadanie6[2].innerHTML = "Działanie: " + idPierwsze + " + " + ilZdjWAlbId1 + " = " + wynik6;
    var urlZdjecia = arg[wynik6].url;
    document.getElementById('zadanie6zdj').src=urlZdjecia;
}

function zad6task2(arg){ 
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img1 = new Image();
    var img2 = new Image();
    img1.src = arg[0].url;
    img1.onload = function() {
        ctx.drawImage(img1, 0, 0, 600, 600);
        img2.src = arg[1].url;
        img2.onload = function() {
           ctx.drawImage(img2, 15, 85, 600, 600);
           var img = c.toDataURL("image/png"); 
           document.write('<img src="' + img + '" width="600" height="600"/>');
        }
     };
}
//+zadanie6 end.
//#endregion