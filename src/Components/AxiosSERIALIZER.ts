import React from "react";

class Serializer {

    public serialize = (container : any)=>{

        const node = container as React.ReactNode
        console.log(node)
        console.log(React.isValidElement(node))
        this.serializeNode(node);
    }
    
    private serializeNode = (element: React.ReactNode) => {
        const result: any = {};
        if (React.isValidElement(element)) {
            const { name, value } = element.props;
            const serializeAttribute = element.props['data-serialize'];
            if (serializeAttribute === 'true' && name) {
            result[name] = value;
            };
            if (React.Children.count(element.props.children) > 0) {
            React.Children.forEach(element.props.children, this.serializeNode);
            };
        }else{
            throw console.error('ERRORE, l elemento passato alla funzione di serializzazione NON è un nodo React')
        };
        if(!result) {console.warn('ATTENZIONE: nessun elemento selezionato')}
        console.log(result)
        return result;
    };
}

export default Serializer ;