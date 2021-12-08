const INPUT = 'INPUT';

function Navbar({tabs, setTextValue, editorInput}){


    function handleListClick(tab){
        tab==INPUT ? 
            setTextValue(editorInput):
            setTextValue(tabs[tab]);
            
    }
    

    const liTabs = Object.keys(tabs).map(
        key => 
        <li onClick={() => handleListClick(key)} key={key}>
            {key}
        </li>);

    return(
        <div>
            
            <ul className="navbar">
                <li 
                onClick={() => handleListClick(INPUT)}
                className="input">
                    Input
                </li>
                {liTabs}
            </ul>
        </div>
    )
}

export default Navbar;