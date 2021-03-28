import logo from './logo.svg';
import './App.css';
import Profil from "./Component/Profil/Photo";
import Name from './Component/Profil/FullName';
import Adress from "./Component/Profil/Adress";



function App() {
  return (
    <div className="App">
    <Profil/>
    <br/>
    <br/>
    <Name/>
    <br/>
    <br/>
    <Adress/>

    </div>
  );
}

export default App;
