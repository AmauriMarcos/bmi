import React from 'react';
import './Result.css';


const Result = (props) =>{

   /*  const [result, setResult] = useState(0);

    const changeResult = () =>{
         setResult({
             result: props.result
         })
    } */
    let results = null;
    if(props.result){
        results = ( 
            <h1 className="result result-animate">{props.result} </h1>   
        )
    }

    return (
        <div>
            <h1 className="result">{results}</h1>
        </div>
    )   
}

export default Result;