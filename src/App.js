import React, { useState } from 'react';
import './App.css';

const LoremGenerator = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState('');

  // Function to generate Lorem Ipsum text
  const generateLoremText = () => {
    fetch(`https://baconipsum.com/api/?type=all-meat&paras=${numParagraphs}&start-with-lorem=1`)
      .then(response => response.json())
      .then(data => {
        const paragraphs = data.map((paragraph, index) => <p key={index}>{paragraph}</p>);
        setGeneratedText(paragraphs);
      })
      .catch(error => {
        console.error('Error fetching Lorem Ipsum text:', error);
      });
  };

  return (
    <div className='main'>
      <h1>Lorem Generator</h1>
      <label className='texthead' htmlFor="numParagraphs">Number of Paragraphs:</label>
      <input className='inputbox'
        type="number"
        id="numParagraphs"
        value={numParagraphs}
        onChange={e => setNumParagraphs(parseInt(e.target.value))}
      />
      <button onClick={generateLoremText}>Generate</button>
      <div>
        <h2>Generated Text:</h2>
        {generatedText}
      </div>
    </div>
  );
};

export default LoremGenerator;
