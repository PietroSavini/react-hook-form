import { Button } from '@mui/material'
import { FieldErrors, useForm  } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import { Form1} from './form1';
import { Form2 } from './form2';
import { useState } from 'react';


export const MultiForm = () => {

    const form = useForm<any>();
    const { register, handleSubmit, control, formState } = form;
    const { errors } = formState;
    const [checkboxValue, setCheckboxValue] = useState()

    const onSubmit = (data: any) =>{
        console.log(data)
        
    }

    const onError = (errors: FieldErrors<any>) => {
        console.log("errori: ",errors)

    }
      
  return (

    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <h2>Multiform</h2>

        <Form1 registerFn={register} errorsArr={errors} checkboxFn={setCheckboxValue}/>
        {checkboxValue === 'on' && 
        <Form2 registerFn={register} errorsArr={errors} />}
            
        <Button type='submit' sx={{marginTop:'20px', }} color='warning' variant='contained'>submit</Button>
        <DevTool control={control} />
    </form>
  )
}


