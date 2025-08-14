import { useEffect, useState } from "react";
import "./styles.css"

export default function SetLightOrDarkTheme() {

    const [theme, setTheme] = useState("light"); //useLocalStorage

    function handleToggle() {
        // theme toggle 
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        console.log(theme);
    }, [theme]);

    return (
        <div className="theme-container" data-theme={theme}>
            <h1>Hello world!</h1>
            <button
                onClick={() => handleToggle()}
            >Change Theme</button>
        </div>
    )
}