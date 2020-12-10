import './style.css';
import React from "react";
import {PoleTekstowe} from './potomek1';
import {Obrazek} from './potomek2';
export function Nadrzedny(){
    return(
        <div className="wnetrze pod-soba">
            Nadrzędny
            <PoleTekstowe typ="password" opis="podaj imię" />
            <Obrazek blad_wczytania="problem z wczytaniem" zrodlo="https://uczelnie-wojskowe.mon.gov.pl/l/logo/5b2484a0d3588ec7bf3020201424611d85cc6395a0df369dc8fd042e/amw_logo.png"/>
        </div>

    )
}