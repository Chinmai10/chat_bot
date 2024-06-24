import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);

  async function generateAnswer() {
    setAnswer("loading ... ") ;
    const response = await axios({

      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=",
      method: "post",
      data: { contents: [{ parts: [{ text: question }] }] },
    })
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  return (
    <>
      <h1>Chat Bot</h1>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder='Ask me anything' cols="150" rows="10"></textarea>
      <button onClick={generateAnswer}>Generate Answer</button>
      <pre>{answer}</pre  >
    </>

  )
}

export default App
