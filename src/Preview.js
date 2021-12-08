import './styles/Preview.css'
import cleaner from 'clean-html'
import {useState, useEffect} from 'react'
import {INIT_STATE} from './samples'
import marked from 'marked'

function Preview({textValue}){
    const [previewCompiled, setPreviewCompiled] = useState(INIT_STATE);
    const [previewHtml, setPreviewHtml] = useState();
    const [previewOption, setPreviewOption] = useState(true);

    //console.log(cleaner.clean(previewCompiled));

    useEffect(()=>{
        setPreviewCompiled(marked.parse(textValue));
      },[textValue]);

      useEffect(()=>{
        cleaner.clean(previewCompiled, html => {
            console.log(previewCompiled)

            setPreviewHtml(`${html}`)});
      },[previewCompiled])

    function createMarkup(){
        return {__html: previewCompiled};
    }

    function htmlLineConverter(html){
        return html.split(`\n`).map(line => <p style={{margin: 0}}>{line}</p>);
    }

    return(
        
        <div>
            <ul className='navbar'>
                <li onClick={() => setPreviewOption(true)}>Preview</li>
                <li onClick={() => setPreviewOption(false)}>HTML</li>
            </ul>
            {previewOption ? <div 
                    id='preview'
                    className='content-box'
                    dangerouslySetInnerHTML={createMarkup()}
                />:
                <div className='content-box html-box'>{htmlLineConverter(previewCompiled)}</div>
            }
        </div>
    )
}

export default Preview;