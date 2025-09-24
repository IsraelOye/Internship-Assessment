// "use client";

// import { FaMoon, FaSun } from "react-icons/fa";
// import { useTheme } from "next-themes";

// export function ThemeToggle(){

//     const {theme, setTheme} = useTheme();

//     return(
//         <button className="rounded-full" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//             <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"></FaSun>
//             <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100"> </FaMoon>
//         </button>
//     )
// }


// "use client";

// import { FaMoon, FaSun } from "react-icons/fa";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export function ThemeToggle(){
//     const {theme, setTheme} = useTheme();
//     const [mounted, setMounted] = useState(false);

//     // Ensure component is mounted before rendering
//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     if (!mounted) {
//         return <div className="w-10 h-10"></div>; // Placeholder to prevent layout shift
//     }

//     return(
//         <button 
//             className="relative rounded-full p-2 transition-all duration-300" 
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//         >
//             <FaSun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <FaMoon className="absolute top-2 left-2 h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//         </button>
//     )
// }



"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle(){
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    console.log("Current theme:", theme)

    // Ensure component is mounted before rendering
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[27px] h-[27px] bg-gray-100 rounded-xl"></div>; // Placeholder to match your design
    }

    const isDark = theme === "dark";

    return(
        <button 
            className="bg-gray-100 dark:bg-gray-700 p-1 rounded-xl cursor-pointer text-[27px] hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200" 
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? (
                <FaSun className="text-yellow-500" />
            ) : (
                <FaMoon className="text-gray-600" />
            )}
        </button>
    )
}