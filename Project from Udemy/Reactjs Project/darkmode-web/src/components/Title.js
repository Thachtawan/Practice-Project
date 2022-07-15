import Switch from "react-switch"
import { useContext, useState } from "react"
import { ThemeContext } from "../App"

const Title = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleSwitch = (checked) => {
        setTheme(checked)
    }

    return (
        <header className={theme === true ? "dark" : "light"}>
            <span>
                Mode
                {theme === false ? " [Light]" : " [Dark]"}
            </span>
            <Switch 
                onChange = {toggleSwitch}
                checked = {theme}
                checkedIcon = {false}
                uncheckedIcon = {false}
                onColor = {'#ffa500'}
            />
        </header>
    )
}

export default Title