import React, { useContext } from 'react'
import "../toggle/toggle.css"
import { ThemeContext } from '../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = ()=>{
        theme.dispatch({ type: "TOGGLE"});
    };
    return (
        <div className='t'>
            <img src="https://cdn-icons-png.flaticon.com/512/169/169367.png" alt="" className="t-icon" />
            <img src="https://cdn3.iconfinder.com/data/icons/meteocons/512/moon-black-512.png" alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}

export default Toggle
