import cleaner from 'clean-html';
import { useState, useEffect } from 'react';
import { INIT_STATE } from './samples';
import marked from 'marked';
import Navbar from './Navbar';

function Preview({ textValue }) {
	const [previewCompiled, setPreviewCompiled] = useState(INIT_STATE);
	const [previewHtml, setPreviewHtml] = useState();
	const [previewOption, setPreviewOption] = useState(true);
	const tabs = ['Preview', 'HTML'];
	//console.log(cleaner.clean(previewCompiled));

	useEffect(() => {
		setPreviewCompiled(marked.parse(textValue));
	}, [textValue]);

	useEffect(() => {
		cleaner.clean(previewCompiled, (html) => {
			//console.log(html)

			setPreviewHtml(html);
		});
	}, [previewCompiled]);

	function createMarkup() {
		return { __html: previewCompiled };
	}

	function htmlLineConverter(html) {
		return html.split(`\n`).map((line) => <p style={{ margin: 0 }}>{line}</p>);
	}

	function handleClick(tab) {
		if (tab === tabs[0]) setPreviewOption(true);
		if (tab === tabs[1]) setPreviewOption(false);
	}

	return (
		<div id='preview-container' className='section-container'>
			<Navbar
				tabs={tabs}
				handleClick={handleClick}
				input={false}
				id='navbar-1'
			/>
			{previewOption ? (
				<div
					id='preview'
					className='content-box'
					dangerouslySetInnerHTML={createMarkup()}
				/>
			) : (
				<div className='content-box html-box'>
					{htmlLineConverter(previewHtml)}
				</div>
			)}
		</div>
	);
}

export default Preview;
