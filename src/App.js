
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';




function App() {
  return (

    <div className="App">
      <NavBar className="App-header" />
    
      <div className='ctn'>
        
       
          <ItemDetailContainer/>
      </div>
       
    </div>






  );

}

export default App;
/*  <ItemListContainer texto="Hola Props!"
          subtitulo="El props esta funcionando correctamente!!!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae aliquid doloremque saepe asperiores sint dolorum fuga, vitae voluptatem inventore. " />*/