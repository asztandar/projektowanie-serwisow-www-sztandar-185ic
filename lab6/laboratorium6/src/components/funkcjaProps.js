import './style.css';
import React from "react"; 

export function FunkcjaWProps(props){
    return(
       <img className="maly-obrazek" src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_rotate-512.png" alt={props.alt} onClick={props.obroc} />

    )
}