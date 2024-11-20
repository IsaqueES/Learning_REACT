import './App.css';
import HelloWorld from './components/HelloWorld'
import Header from './components/Header';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';



function App() {

  function somar(a,b){
    return a+b
  }

  return (
    <div>
      <Header/>
      <HelloWorld/>
      <SayMyName nome="Isaque"/>
      <Pessoa nome ='ISAQUE' idade='17'/>
      <p>Soma : {somar(2,9)}</p>
    </div>
    )
    
}


export default App
