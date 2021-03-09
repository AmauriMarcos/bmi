import BMI from './BMI/BMI';
import Result from './Result/Result';
import {useState} from 'react';
import './App.css';


const App = () =>{

  const [clientBmi, setBmi] = useState({
      bmiInfo: null
  });


 const  handleCallback = (val1, val2) =>{
      const weight = parseFloat(val1);
      const height = parseFloat(val2);

      console.log(weight, height);

      const result = weight / Math.pow(height, 2);
      const bmi = result.toFixed(2);
       setBmi({
        bmiInfo: bmi
       })
  }

  let circle = null;
  let cards = null;
  if(clientBmi.bmiInfo !== null){
     circle = (
       <div className="circle yellow"></div>
     )
  }
  if(clientBmi.bmiInfo !== null && clientBmi.bmiInfo < 18.5 ){
     cards = (
        <div className="card card-underweight animate-card">
            <h1 className="card-text">I should probably eat a little bit more.</h1>
            <img className="emoji show" src="/img/sceptic.svg" alt="happy face"></img>
        </div>
     )
  } else if(clientBmi.bmiInfo !== null && clientBmi.bmiInfo > 18.5 && clientBmi.bmiInfo <= 24.99 ){
    cards = (
      <div className="card card-normal animate-card">
          <h1 className="card-text">Awesome! Eat clean, stay fit and have a burger to stay sane.</h1>
          <img className="emoji show" src="img/happy.svg" />
      </div>
   )
  }else if(clientBmi.bmiInfo !== null && clientBmi.bmiInfo >= 25 && clientBmi.bmiInfo <= 29.99 ){
    cards = (
      <div className="card card-overweight animate-card">
          <h1 className="card-text">I'd lose weight...but I hate losing.</h1>
          <img className="emoji show" src="/img/sad-face-in-rounded-square.svg" alt="happy face"></img>
      </div> 
   )
  }else if(clientBmi.bmiInfo !== null && clientBmi.bmiInfo >= 30 && clientBmi.bmiInfo <= 34.99){
    cards = (
      <div className="card card-obese animate-card">
          <h1 className="card-text">The more you weight, the harder you are to kidnap. Stay safe. Eat cake.</h1>
          <img className="emoji show" src="/img/sad.svg" alt="happy face"></img>
      </div> 
   )
  }else if(clientBmi.bmiInfo !== null && clientBmi.bmiInfo > 35){
    cards = (
      <div className="card card-extremely-obese animate-card">
          <h1 className="card-text">No, it's not water. You seem to be retaining food. </h1>
          <img className="emoji show" src="/img/surprised-emoticon-square-face-with-open-eyes-and-mouth.svg" alt="happy face"></img>
      </div> 
   )
  }

  return (
    <main id="main">
       {circle}
       <h1 className="title">BMI Calculator</h1>
       <BMI parentCallback = {handleCallback}  ></BMI>
       <Result result={clientBmi.bmiInfo}></Result>
       {cards}
    </main>
   
  );
}

export default App;
