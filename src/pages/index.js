import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bonsai</title>
        <meta name="description" content="Service dedicated to helping teachers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          Hello NextJS
      </main>
    </div>
  )
}
