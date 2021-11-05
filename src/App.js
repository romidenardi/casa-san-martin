import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartContext from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={[]}>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/categoria/:categoryId" component={ItemListContainer}/>
            <Route exact path="/producto/:itemId" component={ItemDetailContainer}/>
            <Route exact path="/cart" component={Cart}/>
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
