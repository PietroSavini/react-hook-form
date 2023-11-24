import { TextField } from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';



type props = {
    registerFn : any
    errorsArr : any
    checkboxFn : any
}

export const Form1 = (props: props) => {

    type data ={
        username:string,
        password:string,
    }
    
    const { registerFn, checkboxFn, errorsArr  } = props


    const register = registerFn as UseFormRegister<data> 
    const errors = errorsArr as FieldErrors<data>
    const setCheckboxValue = checkboxFn as React.Dispatch<React.SetStateAction<string>>
    

  return (
    <>
        <div className='form'>
            <h3>content 1</h3>
            <TextField
                    sx={{ marginBottom: '10px' }}
                    error={!!errors.username}
                    helperText={errors.username?.message as string}
                    {...register('username')}
                    type='text'
                    label='Username'
                    id='user'
                    name='username'
                />
                {/* / username */}

                {/*password */}
                <TextField
                    sx={{ marginBottom: '10px' }}
                    error={!!errors.password}
                    helperText={errors.password?.message as string}
                    {...register('password', {required:'password è obbligatorio', })}
                    type='password'
                    label='password'
                    id='psw'
                    name='password'
                />
                {/* /password */}

                <input type="checkbox" name="" id="" onChange={(e)=> setCheckboxValue(e.target.value)} />
        </div>
    </>
  )

}
