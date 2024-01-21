import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <h2>Bienvenue à tout le monde</h2> 
      <hr />
      <Link href="/connexion" >Connectez-vous</Link>
    </main>
  )
}
