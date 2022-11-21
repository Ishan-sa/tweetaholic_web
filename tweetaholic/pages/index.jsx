import { useSession, signIn, signOut } from "next-auth/react"
import SignedOut from "../components/SignedOut/SignedOut";
import SignedIn from "../components/SignedIn/SignedIn";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignedInEmail from "../components/SignedIn/SignedInEmail";

export default function login() {

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIfAuth(true)
            }
        })

    }, [])
    const [ifAuth, setIfAuth] = useState(false);
    const { data: session } = useSession();
    console.log(session);

    // const auth = getAuth();
    if (session) {
        return (
            <SignedIn />
        )
    }
    if (ifAuth) {
        return (
            <SignedInEmail />
        )
    }
    else {
        return (
            <SignedOut />
        )
    }
}