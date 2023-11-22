import { TextField, Button, Stack, MenuItem } from '@mui/material'
import { FieldErrors, useForm  } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';

type Options = {
    value: string | number;
    label: string;
}
type Validation = {
    [key:string]: any
};
type InputItem={
    type: string;
    label: string;
    name: string;
    id: string;
    className: string;
    validations: Validation[];
    options?: Options[];
}
type RequestValues = {
    url: string;
    method:string;
}
type data = {
    [key:string]:any
}
type Props = {
    inputArr: InputItem[];
    requestValues: RequestValues
}

export const Form = ({inputArr, requestValues}:Props) => {

    const arrayOfInputs = [...inputArr]
    const values = requestValues;
    const form = useForm<data>();
    const { register, control, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful } = formState;

    const onSubmit = (data: data) =>{
        const HTTPparams = values;
        console.log('faccio chiamata: ', HTTPparams );
        console.log('con payload: ', data)
    }


    const onError = (errors: FieldErrors<data>) => {
        console.log("errori: ",errors)

    }

    //reset del form al completamento del submit
    useEffect(()=>{
        reset()
    },[isSubmitSuccessful]);


  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>

        <Stack spacing={2}>

        {arrayOfInputs.map((field:InputItem, index) =>{
            if(field.type === 'text'){
                return (
                    <TextField
                    key={index}
                    sx={{ marginBottom: '10px' }}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]?.message as string}
                    {...register(field.name, field.validations.reduce((key, val) => ({ ...key, ...val }), {}))}
                    type={field.type}
                    label={field.label}
                    id={field.id}
                    name={field.name}
                    />
                );

            }else if (field.type === 'select' && field.options){
                return (
                    <TextField
                    key={index}
                    sx={{ marginBottom: '10px' }}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]?.message as string}
                    {...register(field.name, field.validations.reduce((key, val) => ({ ...key, ...val }), {}))}
                    select
                    label={field.label}
                    id={field.id}
                    name={field.name}
                    defaultValue={field.options[0].value}
                    >
                        {field.options?.map((option, optionIndex) => (
                            <MenuItem key={optionIndex} value={option.value}>{option.label}</MenuItem>
                        ))}

                    </TextField>
                );
            }
        })}
            
            <Button type='submit' sx={{marginTop:'20px', }} color='warning' variant='contained'>submit</Button>
        
        </Stack >
        <DevTool control={ control }/>
    </form>
  )
}
