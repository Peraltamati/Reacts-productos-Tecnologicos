import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

<ItemListContainer texto="Hola Props"
  subtitulo="El props esta funcionando correctamente" />



function App() {
  return (

    <div className="App">
      <NavBar className="App-header" />
      <div >
        <ItemListContainer texto="Hola Props!"
          subtitulo="El props esta funcionando correctamente!!!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! Unde qui quos, minus voluptates nemo possimus quasi alias molestiae aliquid doloremque saepe asperiores sint dolorum fuga, vitae voluptatem inventore. " />
      </div>
    </div>






  );
}

export default App;
