import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/home'
import About from '../components/about'
import Techstack from '../components/techstach'
import Contacts from '../components/contacts'
import Repository from '../components/repository'
const App: NextPage = () => {
  return (
    <div className="min-h-screen flex min-w-screen flex-col items-center justify-center bg-tiktokPink w-full">
      <Head>
        <title>André - Developer</title>
        <meta name="description" content="A Luxembourg based developer working and looking for opportunities, he has 5 years experience and a good vibe." />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center min-w-screen text-center ">
        <Home />
        <About></About>
        <Techstack></Techstack>
        <Contacts></Contacts>
        <Repository></Repository>
      </main>
    </div>
  )
}

export default App
