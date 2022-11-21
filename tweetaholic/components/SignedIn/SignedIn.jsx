import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Button from "../Button/Button";
import { useState, useEffect } from "react";

export default function SignedIn() {
    const { data: session } = useSession();
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
                    <img src={session.user.image} alt="" className="rounded-full w-[50px]" />
                    <p>Welcome, {session.user.name}!</p>
                </div>
                <Button
                    txt="Sign out"
                    onBtnClick={() => signOut()}
                />
            </div>
            {/* <p className="text-5xl text-center"> signed in</p>
            <p>{tweet}</p>
            <input type="text" value={tweetText} onChange={handleTweet} />
            <button onClick={addToNotes}>Add</button>
            {
                tweet.map(n => <li key={n}>{n}</li>)
            } */}
        </div>
    )
}
