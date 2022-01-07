import { useState } from 'react';
import './styles/App.css';
import Editor from './Editor';
import Preview from './Preview';
import { INIT_STATE } from './samples';
//const MARK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/marked/2.0.0/marked.min.js'

function App() {
	const [textValue, setTextValue] = useState(INIT_STATE);

	return (
		<div className='App'>
			<div id='container'>
				<Editor textValue={textValue} setTextValue={setTextValue} />
				<Preview textValue={textValue} />
			</div>
		</div>
	);
}

export default App;
