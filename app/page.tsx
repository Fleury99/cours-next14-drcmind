import Image from 'next/image'
import Link from 'next/link'
import Button from './ui/Button';

// Création d'une fonction pour chercher les données
const getData = async () => {

  //Revalidation des données
  const response = await fetch(`http://localhost:4000/articles`,{
    next: {
      revalidate: 0,
    },
  });
  const data = await response.json();
  return data;
  
};

type Article = {
  id: number;
  titre: string;
  contenu: string;
  date: string;
  user_id: number;
};

export default async function Home() {
  const articles = await getData();

  console.log(articles);
  return (
    <main className="">
      <h2>Bienvenue à tout le monde</h2> 
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
         Animi, dolor. Officia animi veritatis odit labore? 
         Praesentium veniam omnis quae, corporis similique nemo labore ducimus?
         Aliquid saepe qui mollitia unde placeat!
      </p>
      <hr />
      <Link href="/connexion" >Connectez-vous</Link>
      <br/>
      <Button />

      <div className="container">
        {
          //Affichage des données
          articles.map((article:Article) => (
            <div key={article.id} className="carte">
              <Link href={`/articles/${article.id}`}>
                {article.id}.{article.titre}
              </Link>
            </div>
            
          ) )
        }
      </div>

      <Link href="/articles/create">Ajouter un article</Link>
    </main>

    
  );
}
