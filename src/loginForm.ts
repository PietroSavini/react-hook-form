type Validation = {
    [key:string]: any
};

type Options = {
    value : string | number,
    label : string
}

type InputItem={
    type: 'text' | 'password' | 'email' |'select' | 'radio' | 'checkbox' | 'textArea';
    label: string;
    name: string;
    id: string;
    className: string;
    validations: Validation[];
    options?: Options[];
}

const loginForm : InputItem[] = [
    
    {
        type:'text',
        label:'Username',
        name:'username',
        id:'username',
        className:'',
        validations:[
            {
                required: 'username è obbligatorio',
                minLength: {
                    value:5,
                    message: 'minimo 5 caratteri'
                },
            },
        ],
        
    },
    {
        type:'email',
        label:'Email',
        name:'email',
        id:'email',
        className:'',
        validations:[
            {
                required:'email è obbligatoria',
                pattern:{
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'digitare un email valida'
                }
            }
        ]
    },
    {
        type:'password',
        label:'Password',
        name:'password',
        id:'password',
        className:'',
        validations:[
            {
                required:'email è obbligatoria',
                
            }
        ]
    },
    {
        type:'select',
        label:'Seleziona paese',
        name:'nation',
        id:'nation',
        className:'',
        validations:[
           
        ],
        options:[
            { value: '', label:''},
            { value: 1, label:'Italia'},
            { value: 2, label:'Olanda' },
            { value: 3, label:'Germania' }
        ]
    },
  
]

export default loginForm;