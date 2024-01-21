import React from 'react';

type Props = {
    params:{
        id:number;
    }
};


export default function page({params}:Props) {
    return <div>Bienvenue sur la Page de l'Article {params.id}</div>;
}
