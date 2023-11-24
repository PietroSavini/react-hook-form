import './App.scss'
import { Form } from './Components/Form'
import { MultiForm } from './Components/MultiForm';
import {StaticForm} from './Components/StaticForm';
import loginForm from './loginForm';

function App() {
  
  return (
    <>
      <main>
        <h2>Form Generator</h2>
        <Form inputArr={loginForm} requestValues={{ url:'/api/Login', method: 'POST' }}  />
        <StaticForm />
        <MultiForm serialize={true}/>
      </main>
    </>
  )
}

export default App
