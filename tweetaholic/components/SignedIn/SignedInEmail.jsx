import { signOut } from "firebase/auth"
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";

export default function SignedInEmail() {
    const r = useRouter();
    const auth = getAuth();
    const Logout = async () => {
        await signOut(auth);
        window.open('/', '_self');
    }
    return (
        <>
            <button className="bg-red-300" onClick={Logout}>signOut</button>
            <div>SignedInEmail</div>
        </>
    )
}
