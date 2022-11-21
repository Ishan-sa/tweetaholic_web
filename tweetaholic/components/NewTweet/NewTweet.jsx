import { getFirestore } from "firebase/firestore"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import Button from "../Button/Button";
import { useState } from "react";

export default function NewTweet() {
    const [tweet, setTweet] = useState("");
    const [tweetContent, setTweetContent] = useState("");
    const addToDb = async (e) => {
        e.preventDefault();
        try {
            const db = getFirestore();
            const docRef = await addDoc(collection(db, "tweets"), {
                tweet: tweet,
                content: tweetContent,
                createdAt: Timestamp.now(),
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }
    return (
        <>
            <div className="flex bg-gray-400 px-4 py-4">
                <form action="" onSubmit={addToDb}>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <label htmlFor="heading">New tweet</label>
                            <input type="text" name="heading" id="heading" value={tweet} onChange={
                                (e) => {
                                    setTweet(e.target.value);
                                }
                            } />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="heading">Content</label>
                            <input type="text" name="content" id="content" value={tweetContent}
                                onChange={
                                    (e) => {
                                        setTweetContent(e.target.value);
                                    }
                                }
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
