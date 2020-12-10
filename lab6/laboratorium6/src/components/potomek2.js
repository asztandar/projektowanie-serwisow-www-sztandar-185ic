import './style.css';
import React from "react";

export function Obrazek(props){
    return(
        <img src={props.zrodlo} alt={props.blad_wczytania} />
    )
}