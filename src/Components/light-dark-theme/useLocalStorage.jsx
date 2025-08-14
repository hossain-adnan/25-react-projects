import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    // key to get and set local storage
    // default value to setValue

    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) 
            : defaultValue;
        } catch (error) {
            console.log(error);
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])


    return [value, setValue]
}