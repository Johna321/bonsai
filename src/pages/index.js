import Head from 'next/head'
import { useUser } from "../context/AuthContext.tsx";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export default function Home() {
    const { user } = useUser();
    const router = useRouter();
    console.log(user);

    async function signOut(){
        try {
            await Auth.signOut();
        } catch (err) {
            console.err('error signing out', err);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Bonsai</title>
                <meta name="description" content="Service dedicated to helping teachers" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col flex-1 w-full px-20 text-center">
                <h1 className="text-3xl font-bold">
                    Welcome to{' '}
                    <a className="text-green-800 hover:underline" href="#">
                        Bonsai
                    </a>
                </h1>
                <p>you are {user ? user.username + ", a " + user.attributes['custom:role'] : "not signed in"}</p>
            </main>
            <footer>
                <div>
                    {user ?
                        <button 
                            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:shadow-outline"
                            onClick={signOut}
                        >
                            Sign out
                        </button>
                        :
                        <div>
                            <button 
                                className="px-4 py-2 m-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:shadow-outline"
                                onClick={() => router.push('/login')}
                            >
                                Log in
                            </button>
                            <button 
                                className="px-4 py-2 m-2 rounded text-blue hover:bg-gray-300 focus:shadow-outline"
                                onClick={() => router.push('/signup')}
                            >
                                Sign up
                            </button>

                        </div>
                    }
                </div>
            </footer>

        </div>
    );
}
