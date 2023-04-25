import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Container from './layouts/Container'
// import Home from './pages/Home'
// import About from './pages/About'
// import Products from './pages/Products'
// import Contact from './pages/Contact'

function App() {

  return (
      <div className="App">
        <Container>
        <ItemListContainer greeting={'Greetings!'} />
          {/* <Home/>
          <About/>
          <Products/>
          <Contact/> */}
        </Container>
      {/* <NavBar className={"navbar navbar-expand-lg navbar-light bg-warning"} navbarLogo={'Elementary'} />
      <ItemListContainer greeting={'Greetings!'} /> */}
      </div>
  );
}

export default App;
