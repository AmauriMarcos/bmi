import React from 'react';
import {useState} from 'react';
import './BMI.css';

const BMI = ({parentCallback}) =>{

    const [weightValue, setWeight] = useState({
        weight: ''
    });
    const [heightValue, setHeight] = useState({
        height: ''
    });

    const handleWeight = (e) =>{
        setWeight({ weight: e.target.value });
    }

    const handleHeight = (e) =>{
        setHeight({ height: e.target.value });
    }


    const submitForm = (e) =>{
        parentCallback(weightValue.weight, heightValue.height);    
        
        e.preventDefault();
    }   

    return(
        <div id="calc">
            <form action="#" id="form">

                <div className="form-bloc">
                    <label htmlFor="weight">Weight</label>
                    <input type="text"  name="weight"  onChange={handleWeight} placeholder="Your weight(kg)" id="weight" required></input>
                </div>

                <div className="form-bloc">
                    <label htmlFor="height">Height</label>
                    <input type="text" name="height"  onChange={handleHeight} placeholder="Your height(m)" id="height" required></input>
                </div>

                <button value="submit" onClick={submitForm} id="button">Go</button>

                <hr></hr>
                
                <ul>
                    <li className="underweight">Underweight  <span className="underweight">&#10094; 18,5</span ></li>
                    <li className="normal">Normal <span className="normal">18,5 - 24,9</span></li>
                    <li  className="overweight" >Overweight <span  className="overweight">25 - 29,9</span></li>
                    <li className="obese">Obese <span className="obese">30 - 34,9</span></li>
                    <li className="x-obese">Extremely Obese<span className="x-obese">35 &#10095;</span> </li>
                </ul>
            </form>
        </div>
    )
}

export default BMI;