import dark from '../image/dark.svg'
import light from '../image/light.svg'
import { useContext, useState } from 'react'
import { ThemeContext } from '../App'

const Contents = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <main className={theme === true ? "dark" : "light"}>
            <div>
                <h1>My Repository</h1>
                <p>Dark Mode Website</p>
            </div>
            <img src={theme === false ? light : dark} alt="Logo"/>
        </main>
    )
}

export default Contents