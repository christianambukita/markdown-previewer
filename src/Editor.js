import Navbar from './Navbar'
import {Samples} from './samples'
import './styles/Editor.css'
import {useEffect, useState} from 'react'

function Editor({textValue, setTextValue}){

    const [editorInput, setInput] = useState(textValue)

    function handleOnChange(event){
        setInput(event.target.value);
    }

    useEffect(()=>{
        setTextValue(editorInput);
    }, [editorInput]);

    return(
        <div>
            <Navbar 
                tabs={Samples} 
                setTextValue={setTextValue}
                editorInput={editorInput}
                setInput={setInput}
            />
            <textarea 
                id='editor'
                className='content-box'
                value={textValue}
                onChange={handleOnChange}
            />
        </div>
    );
}

export default Editor;