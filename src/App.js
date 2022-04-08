
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CartProvider } from './context/CartContext';




function App() {
  return (
    
    <CartProvider> 
    <BrowserRouter >
    <NavBar/>
    <div className='ctn'> 
    <Routes>
      <Route path='/'element={<ItemListContainer/>}/>
      <Route path='/productos/:category'element={<ItemListContainer/>}/>
      <Route path='/detail/:itemId'element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={ <Checkout/>}/> 
    </Routes>
    </div>
    </BrowserRouter>
    </CartProvider>



   // //<div className="App">
     // <NavBar className="App-header" />
    
      //<div className='ctn'>
       // <ItemDetailContainer/>
     // </div>
       
    //</div>






  );

}

export default App;
/*  <ItemListContainer texto="Hola Props!"
          subtitulo="El props esta funcionando correctamente!!!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae aliquid doloremque saepe asperiores sint dolorum fuga, vitae voluptatem inventore. " />*/