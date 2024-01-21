"use client"

import React from 'react';

export default function Button() {
    console.log("Test de Composant Client");
    return (
    <button onClick={()=> alert("salut")}>Dire Bonjour</button>   
    );
}
