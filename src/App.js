
import './App.css';
import React from 'react';
import { Container,Segment } from 'semantic-ui-react';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
function App() {
  const [text,setText]=useState('');
  const {speak}=useSpeechSynthesis();
  const handleClick=()=>{
    speak({text:text})
  }
  return (
    <div className="App">
      <Container>
        <Segment>
          <textarea className='textarea' onChange={(e)=>{setText(e.target.value)}}>


          </textarea>
          <button className='button' onClick={()=>{handleClick()}}>alert</button>
        </Segment>
      </Container>
    </div>
  );
}

export default App;
