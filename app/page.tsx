import Image from 'next/image'
import Link from 'next/link'
import Button from './ui/Button';

export default function Home() {
  console.log('Test de composant');
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
    </main>
  )
}
