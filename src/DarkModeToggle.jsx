import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons for light and dark mode

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            console.log(document.documentElement.classList)
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="p-3 rounded-lg flex items-center justify-start gap-2 transition-colors hover:bg-gray-100 dark:hover:bg-slate-800 w-full duration-300"
        >
            {darkMode ? (
                <>
                    <FaSun className="text-yellow-500" size={18} /> Light Mode
                </>
            ) : (
                <>
                    <FaMoon className="text-black" /> Dark Mode
                </>
            )}
        </button>
    );
}
