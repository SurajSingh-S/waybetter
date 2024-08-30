import { useState,useEffect } from 'react'
import './App.css'
import { Themeprovideer } from './context/BTheme'
import Themebutton from './components/Themebutton'
import Card from './components/Card'

function App() {

  const [thememode,setthememode] = useState("light")

  const lighttheme=()=>{
    setthememode ("light")
  }

  const darktheme=()=>{
    setthememode ("dark ")
  }
// actual change in a theme

useEffect(()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(thememode)

},[thememode])

  return (
    
<Themeprovideer value={{thememode,lighttheme,darktheme}}>
    
<div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebutton/>
                        
              </div>

                <div className="w-full max-w-sm mx-auto">
                   <Card/>
                    </div>
                </div>
            </div>

            </Themeprovideer>
  )
}

export default App
