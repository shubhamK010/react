import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Eating from './components/Eating';
import Exercise from './components/Exercise';
import Study from './components/Study';



function App() {
  return (
    <div className="App">
      {/* <Display/>
      <Eating/>
      <Exercise/>
      <Study/> */}
      {/* <Study name="Pravin" number="one"/>    
      <Study name="Shubham" number="two"/>  */}
      <Exercise name="Pravin" number="one"/>    
      <Exercise name="Shubham" number="two"/> 

    </div>
  );
}

export default App;
