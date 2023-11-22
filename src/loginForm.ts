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
}

const loginForm : InputItem[]= [
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
                    message: 'immetti un minimo di 5 caratteri'
                },
               
            },
        ],
        
    },
    {
        type:'text',
        label:'Email',
        name:'email',
        id:'email',
        className:'',
        validations:[
            {
                required:'email è obbligatoria',
                pattern:{
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'deve contenere  una @ e un finale(.com/.it etc)'
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
            {required:true}
        ]
    },
 

]

export default loginForm;