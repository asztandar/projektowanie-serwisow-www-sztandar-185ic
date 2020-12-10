import './style.css';
import React from "react";

export function PoleTekstowe(props){
    return(
        <input type={props.typ} placeholder={props.opis}/> 
    )
}