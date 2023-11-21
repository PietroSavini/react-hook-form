type Validation = {
    [key:string]: string
};

type InputItem={
    type: string;
    label: string;
    name: string;
    id: string;
    className: string;
    validations: Validation[];
}

export const loginForm:Array<InputItem>= [
    {
        type:'text',
        label:'Username',
        name:'username',
        id:'username',
        className:'',
        validations:[
            {required:'username is required'},
        ],
        
    },
    {
        type:'password',
        label:'Password',
        name:'password',
        id:'password',
        className:'',
        validations:[
            {required:'passwordis required'}
        ]
    }

]