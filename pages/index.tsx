import type { NextPage } from 'next'
import Head from 'next/head'
import TopNav from '../components/TopNav'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      <div className="mx-auto flex max-w-7xl items-center bg-yellow-400 py-10">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{' '}
            is a place to write, read, and connect
          </h1>

          <h2>
            It`s easy and free to post your thinking on any topic and connect
            with millions of renders.
          </h2>
        </div>

        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="medium-logo"
        />
      </div>
    </div>
  )
}

export default Home
