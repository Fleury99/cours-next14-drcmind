import React from 'react';

type Props = {
    params:{
        id:number;
    }
};

const getData = async (id:number) => {
    const response = await fetch(`http://localhost:4000/articles/${id}`);
    const data = await response.json();
    return data;
    
};

export default async function page({ params }:Props) {
    const article = await getData(params.id);
    return (
        <>  
            <div className="container">
                <h1 className="titre">{article.titre}</h1>
                <p>{article.contenu}</p>
                <p>{article.date}</p>
                <p>{article.user_id}</p>
            </div>
            
            <div className="container pt-5">
                <span>{article.auteur}</span>
            </div>    
        </>
    );
}
