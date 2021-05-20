import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Head>
        <title>NextJS + TypeScript + Tailwind</title>
        <meta name="description" content="Starter repo using Nextjs + TypeScript + Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <div>
          Welcome to the app Nextjs + TypeScript + Tailwind starter
        </div>
      </main>
    </div>
  )
}
