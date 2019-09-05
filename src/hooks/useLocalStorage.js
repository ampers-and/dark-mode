import React, { useState } from 'react';

export default function useLocalStorage(key, initialValue){

    
    const [storedValue, setStoredValue] = useState( () => {

        //check to see if already in localStorage, return or return initialValue
        
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;

    });

    const setValue = value => {

        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];

};