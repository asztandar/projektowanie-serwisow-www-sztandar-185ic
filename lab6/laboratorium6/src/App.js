import {Header} from './components/komponentFunkcyjny' 
import {TrescZadania} from './components/komponentKlasowy';
import {Nadrzedny} from './components/nadrzedny';
import {FunkcjaWProps} from './components/funkcjaProps';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Mapowanie} from './components/wykorzystanieKeyiMap';
function App() {
  return (
    <div className="App">
      <Header />
      <TrescZadania />
      <Nadrzedny />
      <br /> 
      <div className="wnetrze">
      <FunkcjaWProps alt="strzalka" obroc={()=> document.body.style.animation = "rotate 10s forwards" } />
      </div>
      <br />
      <Button variant="secondary" size="lg" block><a href="https://react-bootstrap.github.io/components/buttons/"> Bootstap </a></Button>
      <br />
      <div className="wnetrze">
        <p>Pdaj imię a sprawdzę czy jest na liście</p>
      <Mapowanie />
      </div>
    </div>
  );
}

export default App;
