import { useEffect, useState } from "react";

export const INPUT = 'Input';

function Navbar({tabs, handleClick, input, id}){
    const [selection, setSelection] = useState({width: 0, left: 0})
    const navTabs = input ? [INPUT, ...tabs] : tabs
    const getTabId = (key) => `${id}-${key}`

    function setSelectionWrap(key){
        const tabBox = document.getElementById(getTabId(key)).getBoundingClientRect()
        const navBox =  document.getElementById(id).getBoundingClientRect()
        setSelection({
            width: tabBox.width,
            left: tabBox.left - navBox.left
        })
    }
    function handleListClick(tab){
            handleClick(tab);
            setSelectionWrap(tab);
    }
    
    function getSelectionStyle(){
        return {
            "--selection-width": `${selection.width}px`,
            "--selection-left":  `${selection.left}px`,
        }
    }

    const liTabs = navTabs.map(
        (key, index) => 
        <li onClick={() => handleListClick(key)}
            key={key}
            id={getTabId(key)}
            className={key === INPUT ? "input" : ""}
            >
            {key}
        </li>
    );

    useEffect(()=>{
        setSelectionWrap(navTabs[0])
    },[])

    return(
        <div>
            <ul id={id} className="navbar">
                <li className="selection" style={getSelectionStyle()}></li>
                {liTabs}
            </ul>
        </div>
    )
}

export default Navbar;