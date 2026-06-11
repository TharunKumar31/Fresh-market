import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Home } from './Components/Home/home';
import { Shop } from './Components/Shop/shop';
import { About } from './Components/About/about';
import { Contact } from './Components/Contact/contact';
function App() {
  return (
    <>
    <Home/>
    <Shop/>
    <About/>
    <Contact/>
    </>
  );
}

export default App;