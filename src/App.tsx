import './App.scss'
import { Form } from './Components/Form'
import loginForm from './loginForm';

function App() {
  
  return (
    <>
      <main>
        <h2>Form Generator</h2>
        <Form inputArr={loginForm} requestValues={{ url:'/api/Login', method: 'POST' }}  />
        <Form inputArr={loginForm} requestValues={{ url:'/api/Login', method: 'POST' }} />
      </main>
    </>
  )
}

export default App
