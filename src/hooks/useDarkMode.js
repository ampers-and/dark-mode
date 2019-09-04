import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode(){

    const [toggleDarkMode, setToggleDarkMode] = useLocalStorage('darkMode', false)

    useEffect( () => {

        const body = document.querySelector('body');

        toggleDarkMode ? body.classList.add('dark-mode'): body.classList.remove('dark-mode'); 

    }, [toggleDarkMode]);
    
    return [toggleDarkMode, setToggleDarkMode];
}