import React from 'react'
import { useSession, signOut, getSession } from "next-auth/react"
import { useRouter } from 'next/router'

export default function Home() {
    const { data: session, status } = useSession({ required: true });
    if (status === "authenticated") {
        return (
            <div>
                <p>Welcome, {session.user.name}</p>
                <h1 style={{
                    color: 'red',
                }}>account page</h1>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    } else {
        return (
            <div>
                <p>You are not signed in</p>
            </div>
        )
    }
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/login',
            }
        }
    }
    return {
        props: { session }
    }
};