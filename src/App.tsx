import './App.scss'
import { Form } from './Components/Form'
import {LoginForm} from './Components/LoginForm';
import loginForm from './loginForm';

function App() {
  
  return (
    <>
      <main>
        <h2>Form Generator</h2>
        <Form inputArr={loginForm} requestValues={{ url:'/api/Login', method: 'POST' }}  />
        <LoginForm />
      </main>
    </>
  )
}

export default App
