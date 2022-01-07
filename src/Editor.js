import Navbar, { INPUT } from './Navbar';
import { Samples } from './samples';
import { useEffect, useState } from 'react';

function Editor({ textValue, setTextValue }) {
	const [editorInput, setInput] = useState(textValue);
	const tabs = Object.keys(Samples);

	function handleOnChange(event) {
		setInput(event.target.value);
	}

	function handleClick(key) {
		key === INPUT ? setTextValue(editorInput) : setTextValue(Samples[key]);
	}

	useEffect(() => {
		setTextValue(editorInput);
	}, [editorInput, setTextValue]);

	return (
		<div id='editor-container' className='section-container'>
			<Navbar
				tabs={tabs}
				setInput={setInput}
				handleClick={handleClick}
				input={true}
				id='navbar-0'
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
