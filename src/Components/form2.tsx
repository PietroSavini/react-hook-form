import { TextField } from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';



type props = {
    registerFn : any
    errorsArr: any
}

export const Form2 = (props: props) => {

    type data ={
      email:string,
      note:string,
    }
    const { registerFn } = props
    const { errorsArr } = props

    const register = registerFn as UseFormRegister<data> 
    const errors = errorsArr as FieldErrors<data>

  return (
    <>
        <div className='form'>
          <h3>content 2</h3>
          <TextField
                  sx={{ marginBottom: '10px' }}
                  error={!!errors.email}
                  helperText={errors.email?.message as string}
                  {...register('email' ,{required:'email è obbligatoria', pattern:{value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:'inserire un email valida'}})}
                  type='text'
                  label='email'
                  id='user'
                  name='email'
              />
              {/* / username */}

              {/*password */}
              <TextField
                  sx={{ marginBottom: '10px' }}
                  error={!!errors.note}
                  helperText={errors.note?.message as string}
                  {...register('note', {required:'note è obbligatorio', })}
                  type='note'
                  label='note'
                  id='psw'
                  name='note'
              />
              {/* /password */}

        </div>
    </>
  )

}
