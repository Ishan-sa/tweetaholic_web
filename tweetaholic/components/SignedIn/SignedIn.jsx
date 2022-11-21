import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import NewTweet from "../NewTweet/NewTweet";


export default function SignedIn() {
    const { data: session } = useSession();
    const [googleSignOut, setGoogleSignOut] = useState(false);
    const [emailSignOut, setEmailSignOut] = useState(false);
    // const [tweet, setTweet] = useState([]);
    // const [tweetText, setTweetText] = useState("");
    // useEffect(() => {
    //     try {
    //         fetch('http://localhost:8080/welcome')
    //             .then(async (res) => {
    //                 // const data = await res.json();
    //                 // console.log(data);
    //                 console.log('Welcome');
    //             })
    //     }
    //     catch (err) {
    //         console.log(err, 'Error');
    //     }
    // })

    // const handleTweet = (e) => {
    //     setTweetText(e.target.value);
    // }

    // const addToNotes = () => {
    //     setTweet([...tweet, tweetText]);
    //     fetch(`http://localhost:8080/new-tweet?tweet=${tweet}`)
    //         .then(async (res) => {
    //             console.log(await res.json());
    //             setTweetText(""); // Clear the input field
    //         })
    // }


    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* <img src={session.user.image ? null : "img"} alt="" className="rounded-full w-[50px]" /> */}
                    {/* <p>Welcome, {session.user.name ? session.user.name : "name"}!</p> */}
                    <p>Welcome user</p>
                </div>
                <Button txt="Sign out" onBtnClick={() => signOut()} />
            </div>
            <NewTweet />
        </div>
    )
}
