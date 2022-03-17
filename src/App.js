
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (

    <div className="App">
      <NavBar className="App-header" />
    
      <div className='ctn'>
        
       <ItemListContainer/>
      
      </div>
       
    </div>






  );

}

export default App;
/*  <ItemListContainer texto="Hola Props!"
          subtitulo="El props esta funcionando correctamente!!!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae aliquid doloremque saepe asperiores sint dolorum fuga, vitae voluptatem inventore. " />*/