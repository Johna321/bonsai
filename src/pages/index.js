import Head from 'next/head'
import { useUser } from '../context/AuthContext.tsx';

export default function Home() {
    const { user } = useUser();
    console.log("user: ", user);
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
