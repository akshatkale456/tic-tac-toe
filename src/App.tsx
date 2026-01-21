import { useState, useEffect } from 'react'
import { Game } from './components/gamebox'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Button } from 'react-bootstrap'

import './App.css'

function App() {
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    }
  }, []);


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


  return (
    <div className='min-h-screen bg-yellow-100 dark:bg-gray-900'>
      <div>
       <Button
        className=" bg-orange-900 dark:bg-gray-700 absolute top-4 right-4 dark:text-white  rounded-md
         border-gray-700 p-2" onClick={handleThemeSwitch}>{theme === "light"?"dark":"light"} </Button>
</div>
      <Header />


      <Game />

      <Footer />


    </div>
  )
}

export default App
