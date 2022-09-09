import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Eating from './components/Eating';
import Exercise from './components/Exercise';
import Study from './components/Study';
import Display2 from './components/Display2';
import Exercise2 from './components/Exercise2';
import NewState from './components/NewState';
import News from './components/News';
import Hunter from './components/Hunter';
import ClickFunction from './components/ClickFunction';
import ClickClass from './components/ClickClass';
import BindEvent from './components/BindEvent';
import Qualification from './components/Qualification';




function App() {
  return (
    <div className="App">
      {/* <Display/>
      <Eating/>
      <Exercise/>
      <Study/> */}
      {/* <Study name="Pravin" number="one"/>    
      <Study name="Shubham" number="two"/>  */}
      {/* <Exercise name="Pravin" number="one"/>    
      <Exercise name="Shubham" number="two"/>  */}
      {/* <Display2 firstName="shubham" lastName="kamble" >
        <p>Mai children tag hu i.e. I am children tag</p>

      </Display2> */}

      {/* <Display2 firstName="pravin" lastName="shelar" /> */}
      {/* <Exercise2 firstName="tushar" lastName="ghadage" /> */}
      {/* <NewState message = "Hello"></NewState> */}
      {/* <News />
      <Hunter />
      <Display2 firstName="bapurao" lastName="shelar" />
      <Exercise firstName="viraj" lastName="rasal"/>    */}

      {/* <ClickFunction></ClickFunction>
      <ClickClass></ClickClass> */}
      {/* <BindEvent></BindEvent> */}


      <Qualification></Qualification>
     

   


    </div>
  );
}
export default App;
//for line no 23 and 24
// ye jo humne attribute values humne components ko directly bheje hai..ye humko function me as a parameter receive hote hai Display2 ke jo ki hume props me store hue milte hai

//for line 23,24,25
//yaha pe jo humne paragraph tag i.e. p tag likha hai wo ek sub component hai usko read karne ke liye alag method hai..props me children naam ki method hai