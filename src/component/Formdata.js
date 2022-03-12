import { useState } from "react";

const Formdata = validation => {

    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [errors, seterrors] = useState({});

    const handleChange = (event)=> {
        event.preventDefault();

        const {name,value} = event.target

        setData({
            ...data,
            [name]:value
        })
        console.log("data",data);

        

        
    }

    const handelClick = (event)=>{
        event.preventDefault();
        console.log("test1");

        console.log("dataClick",data);
        seterrors(validation(data));
    }




  return {handleChange,handelClick,data,errors}  

}

export default Formdata;