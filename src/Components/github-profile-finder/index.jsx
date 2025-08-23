
//https://api.github.com/users/${userName}`

import { useEffect, useState } from "react";
import User from "./User";

// fetch user
// store user in state function
// pass user into User component
// The User component will show our user data

export default function GithubProfileFinder() {

    const [userName, setUserName] = useState("torvalds");
    const [userData, setUserData] = useState(null);

    async function fetchAndSetUser() {
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            const data = await res.json(); 
            setUserData(data);
            setUserName("");
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchAndSetUser();
    }, []);

    function handleSubmit() {
        // fetch data and store
        fetchAndSetUser();
    }

    console.log(userData);

    // form: input and submit button
    // User component
    return (
        <>
            <div className="input-container">
                <input 
                    type="text" 
                    placeholder="Search github user..."
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                />
                <button onClick={handleSubmit}>Get User</button>
            </div>
            <div className="user-container">
                {userData && <User user={userData}/>}
            </div>
        </>
    )

}