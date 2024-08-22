import { useState } from "react"
import Sacola from "./sacola"

export default function Pedidos({lista}){

     let valorTotal = 0
if(lista.length>0){

    //console.log('atualizada ',lista[0].valor)
   
    for(let i =0; i<lista.length;i++){
       valorTotal=valorTotal+lista[i].valor
       
    }
}   
console.log(valorTotal)

    return(
        <>
        </>
    )
}