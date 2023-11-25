// 'use client'
// import { useEffect, useState } from "react";
// import ToggleSwitch from "../Toggle/Toggle";

function DarkModeToggle() {
    // const [darkMode, setDarkMode] = useState(Boolean(window.localStorage.getItem("darkmode")));

    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark');
    //         window.localStorage.setItem("darkmode", "true")
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         window.localStorage.setItem("darkmode", "false")
    //     }
    // }, [darkMode]);

    // if (!show) return <></>;

    return (
        <div>
            Dark mode
            {/* <ToggleSwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
        </div>
    );
}

export default DarkModeToggle