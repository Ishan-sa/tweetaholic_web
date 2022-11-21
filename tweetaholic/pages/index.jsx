import { useSession, signIn, signOut } from "next-auth/react"
import SignedOut from "../components/SignedOut/SignedOut";
import SignedIn from "../components/SignedIn/SignedIn";

export default function login() {
    const { data: session } = useSession();
    console.log(session);
    if (session) {
        return (
            <SignedIn />
        )
    } else {
        return (
            <SignedOut />
        )
    }
}