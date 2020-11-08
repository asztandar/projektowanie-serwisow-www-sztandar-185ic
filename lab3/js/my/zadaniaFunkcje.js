
//funkcje do zadan od 1 do 9
function zadanieNr1IloscLiter(tekst) {
    let caloscZeSpacjami = tekst.length;
    let caloscBezSpacji = 0;
    let spacje = 0;
    for (let i = 0; i < tekst.length; i++)
        tekst[i] != " " ? caloscBezSpacji++ : spacje++;
    let zwracanyTekst = "<p>Cały tekst łącznie ze spacjami ma " + caloscZeSpacjami + " znaków.</p>";
    zwracanyTekst += "<p>Tekst nie licząc spacji ma " + caloscBezSpacji + " znaków.</p>";
    zwracanyTekst += "<p>W tym tekście jest " + spacje + " spacji.</p>";
    document.getElementById("odpowiedziZad1").innerHTML = zwracanyTekst;
    console.info("Liczba liter: " + caloscBezSpacji);
}

function zadanie2FiltujWejscie(wejscie) {
    let oddzieloneWejscie = [];
    let temp = "";
    let z = 0;
    while (z < wejscie.length) {
        if (wejscie[z] != ";") {
            temp += wejscie[z];
        }
        if (wejscie[z] == ";") {
            if (!isNaN(temp)) {
                oddzieloneWejscie.push(parseInt(temp));
                temp = "";
            }
            else {
                temp = "";
            }
        }
        z++;
    }
    zadanie2Sumuj(oddzieloneWejscie);
}
function zadanie2Sumuj(oddzieloneWejscie) {
    let suma = 0;
    for (let i in oddzieloneWejscie) {
        suma = suma + oddzieloneWejscie[i];
    }
    document.getElementById("odpowiedziZad2").innerHTML = "suma wynosi = " + suma;
}
function zadanie3GenerujRandomowaLiczbe() {
    return Math.floor(Math.random() * 1001);
}
function zadanie3Miksuj(wejscie) {
    let i = 0;
    let temp = "";
    temp += wejscie;
    let zmiksowanyTekst = "";
    temp = temp.toUpperCase();
    while (i < temp.length) {
        let randomNumber = zadanie3GenerujRandomowaLiczbe(); 
        if (randomNumber > 500 && randomNumber < 952 && (randomNumber % 2 == 0) || randomNumber % 3 == 0) {
            zmiksowanyTekst += temp[i].toLowerCase(); 
        } else {
            zmiksowanyTekst += temp[i];
        }

        i++;
    }
    return zmiksowanyTekst;

}

function zadanie4Sprawdz(tekst1,tekst2){
    return ( (!isNaN(tekst1)&&!isNaN(tekst2))?tekst1*tekst2:false);
}

function zadanie5wyjscie(tekst1,tekst2){
    let imie = tekst1[0].toUpperCase();
    imie += (tekst1.substring(1)).toLowerCase();

    let miesiac = tekst2.toLowerCase();
    if(miesiac == "grudzień"|| miesiac == "styczeń" || miesiac == "luty")
        return imie + " jeździ na sankach"; 
    if(miesiac == "marzec"|| miesiac == "kwiecień" || miesiac == "maj")
        return imie + " chodzi po kaluzach";
    if(miesiac == "czerwiec"|| miesiac == "lipiec" || miesiac == "sierpień")
        return imie + " sie opala";
    if(miesiac == "wrzesień"|| miesiac == "październik" || miesiac == "listopad")
        return imie + " zbiera liscie"; 
    else
        return imie + " uczy się JS";
}
function zadanie6Sortowanie(tekst,znak){
    let tabImion = tekst.split(znak);
    tabImion = tabImion.sort();
    return tabImion.join(znak);

}
function zadanie7duze(tekst,znak){
    let tabImion = tekst.split(znak);
    let duze = [];
    for(let i in tabImion)
    duze.push(tabImion[i].toUpperCase());
    return duze.join(znak);
}
function zadanie7mix(tekst,znak){
    let tabImion = tekst.split(znak); 
    let pomieszane = [];
    for(let i in tabImion){
        let temp = 
        pomieszane.push(zadanie3Miksuj(tabImion[i]));
    }
    return pomieszane.join(znak);

}
function checkFemale(imie){
    return (imie.charAt(imie.length-1)=="a"?true:false);
}
function countWomanInTable(arr){
    let pojedynczyElement;
    let podzielone;
    let iloscKobiet = 0; 
    for(let i in arr)
    {
        pojedynczyElement = arr[i];
        
        podzielone = pojedynczyElement.split(" "); 
        if(checkFemale(podzielone[0].toLowerCase())== true)
            iloscKobiet++;
    }
    return iloscKobiet;
}
//zadania od 1-9
function pobierzTekst(tekst) {
    var pobranyTekst = document.getElementById(tekst);
    switch (tekst) {
        case "zadanie1":
            zadanieNr1IloscLiter(pobranyTekst.value);
            break;

        case "zadanie2":
            zadanie2FiltujWejscie(pobranyTekst.value);
            break;

        case "zadanie3":
            document.getElementById("odpowiedziZad4").innerHTML = "Tekst pomiksowany: " + zadanie3Miksuj(pobranyTekst.value);
            break;
            
        case "zadanie4":
            let pobranyTekst2 = document.getElementById("zadanie4input2");
            document.getElementById("odpowiedziZad4").innerHTML = zadanie4Sprawdz(pobranyTekst.value,pobranyTekst2.value);
            break;

        case "zadanie5":
            let miesiac = document.getElementById("zadanie5input2");
            document.getElementById("odpowiedziZad5").innerHTML = zadanie5wyjscie(pobranyTekst.value,miesiac.value);
            break;
        case "zadanie6":
            let znak = document.getElementById("zadanie6input2");
            document.getElementById("odpowiedziZad6").innerHTML = zadanie6Sortowanie(pobranyTekst.value,znak.value);
            break;
        case "zadanie7": 
            let oddzielnik = document.getElementById("zadanie7input2"); 
            document.getElementById("odpowiedziZad7").innerHTML = zadanie7duze(pobranyTekst.value,oddzielnik.value); 
            document.getElementById("odpowiedziZad7").innerHTML += "<br>";
            document.getElementById("odpowiedziZad7").innerHTML += zadanie7mix(pobranyTekst.value,oddzielnik.value); 
            break;    
        case "zadanie8":
            document.getElementById("odpowiedziZad8").innerHTML = checkFemale(pobranyTekst.value.toLowerCase()); 
            break; 
        case "zadanie9":
            let znakOddzielajacy = document.getElementById("zadanie9input2");
            let tabZadanie9 = pobranyTekst.value.split(znakOddzielajacy.value); 
            document.getElementById("odpowiedziZad9").innerHTML = "Ilość kobiet= " + countWomanInTable(tabZadanie9);
            break; 
        }
}
//imiona z nazwiskami do zadania 9 (należy skopiować)
//Ania Nowak,Piotr Kowalski,Bartek Kosecki,Natalia Nowak,Weronika Piotrowska,Agata Beatczak,Tomasz Nowak,Mateusz Kowalski,Marcin Kotecki,Betata Lecka,Katarzyna Melecka


//