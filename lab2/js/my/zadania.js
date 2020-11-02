//zadanie 1
function zamienKolorLogoZielony() {
    document.getElementById("logo").style.backgroundColor = "green";
}
function zamienKolorLogokDomyslny() {
    document.getElementById("logo").style.backgroundColor = "#428BCA";
}

//zadanie2
var zamienKolorLogoZielonyDomyslnyBoolean = 0;
var kolor = "";
var textButton = "";
function zamienKolorLogoZielonyDomyslny() {
    if (zamienKolorLogoZielonyDomyslnyBoolean == 0) {
        kolor = "green"
        zamienKolorLogoZielonyDomyslnyBoolean = 1;
        textButton = "Zmień kolor na domyślny";
    }
    else {
        kolor = "#428BCA";
        zamienKolorLogoZielonyDomyslnyBoolean = 0;
        textButton = "Zmień kolor na zielony";
    }
    document.getElementById("logo").style.backgroundColor = kolor;
    document.getElementById("buttonZadanie2").textContent = textButton;
}

//zadanie 3

function klonujLogo() {
    var logo = document.querySelector(".logoClone");
    var klonLogo = logo.cloneNode(true);
    logo.appendChild(klonLogo);

}

//zadanie 4

function usunLogo() {

    var elementy = document.querySelector(".logoClone");
    elementy.remove();
}

//zadanie 5

function pokolorujTloNaLosowyKolor() {
    var koloryTab = ['green', 'yellowy', 'blue', 'red', 'pink'];
    var koloryTabLen = koloryTab.length;

    var wylosowanaLiczba = Math.floor(Math.random() * (koloryTabLen - 1 - 0)) + 0;
    document.body.style.backgroundColor = koloryTab[wylosowanaLiczba];

}

//zadanie 6

function zmienWielkoscCzcionki() {

    var elementy = document.getElementById("zadanie6p");
    elementy.style.fontSize = "60px";
}
//zadanie 7


var suwak = document.getElementById("myRange");
var czcionkaP = document.getElementById("zadanie7p");
var wielkosc, rozmiar;
function zmienWielkoscCzcionkiSuwak() {
    wielkosc = suwak.value;
    rozmiar = wielkosc + "px;";
    czcionkaP.style.fontSize = suwak.value + "px";
}

//zadanie 8
let curr = 0;
function zadanie8funkcja() {
    "use strict";
    let x = document.getElementsByClassName("badge-light");
    curr = curr + 6;
    x[0].innerHTML = curr;
}

//zadanie 9
var numer = Math.floor(Math.random() * 5) + 1;

var timer1 = 0;
var timer2 = 0;

function ustawslajd(nrslajdu) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu - 1;

    schowaj();
    setTimeout("zmienslajd()", 500);
}

function schowaj() {
    $("#slider").fadeOut(500);
}

function zmienslajd() {
    numer++; if (numer > 5) numer = 1;

    var plik = "<img src=\"img/img" + numer + ".jpg\" class=\"sliderImg\"/>";

    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(500);

    timer1 = setTimeout("zmienslajd()", 5000);
    timer2 = setTimeout("schowaj()", 4500);
}

zmienslajd();