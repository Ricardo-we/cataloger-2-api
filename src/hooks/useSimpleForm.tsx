import { useState } from "react";

export interface useSimpleFormProps {
    initialValues?: {[key: string]: any};
    onSubmit?: (data: any, helpers: any) => any;
}

export function useSimpleForm({
    initialValues={},
    onSubmit= () => console.warn("Unimplemented onSubmite \"useSimpleForm\""),
}:  useSimpleFormProps){
    const [data, setData] = useState(initialValues);

    return {
        setData,
        data,
        setField: (fieldName: string, value: any) => {
            setData(prev => ({ ...prev, [fieldName]: value }))            
        },
        submit: () =>{
            onSubmit(data, {});
        },
    }
}