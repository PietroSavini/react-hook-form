import { TextField, Button, MenuItem } from '@mui/material'
import { FieldErrors, useForm  } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import { useRef } from 'react';

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
type ValueRefType = React.RefObject<HTMLInputElement | null>[];


export const Form = ({inputArr, requestValues}:Props) => {

    const arrayOfInputs = [...inputArr]
    const values = requestValues;
    const form = useForm<data>();
    const { register, control, handleSubmit, formState} = form;
    const { errors} = formState;
    const valueRef = useRef<ValueRefType>([])
    const onSubmit = (data: data) =>{

        /*if (serialize === true){

        }*/
        console.log('faccio chiamata: ', values );
        console.log('con payload: ', data)
        console.log('refs', valueRef.current)
    }


    const onError = (errors: FieldErrors<data>) => {
        console.log("errori: ",errors)

    }

    //reset del form al completamento del submit
    // useEffect(()=>{
    //     reset()
    // },[isSubmitSuccessful]);


  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <h2>Form Generato</h2>
        <div>

        {arrayOfInputs.map((field:InputItem, index) => {
            if(field.type === 'text' || field.type === 'password' || field.type === 'email'){
                return (
                    <TextField
                        inputProps={{'serialize':''}}
                        key={index}
                        sx={{ marginBottom: '10px' }}
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message as string}
                        {...register(field.name, field.validations.reduce((key, val) => ({ ...key, ...val }), {}))}
                        type={field.type}
                        label={field.label}
                        id={field.id}
                        name={field.name}
                        className={field.className}
                        inputRef={(input) => {
                            valueRef.current[index] = input
                        }}
                    />
                );

            }else if (field.type === 'select' && field.options){
                return (
                    <TextField
                        select
                        key={index}
                        sx={{ marginBottom: '10px', width:210 }}
                        error={!!errors[field.name]}
                        helperText={errors[field.name]?.message as string}
                        {...register(field.name, field.validations.reduce((key, val) => ({ ...key, ...val }), {}))}
                        label={field.label}
                        id={field.id}
                        name={field.name}
                        defaultValue={''}
                        className={field.className}
                    >
                        {field.options?.map((option, optionIndex) => (
                            <MenuItem key={optionIndex} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </TextField>
                );
            }
        })}
        </div>
            
        <Button type='submit' sx={{marginTop:'20px', }} color='warning' variant='contained'>submit</Button>
        <DevTool control={ control }/>
    </form>
  )
}
