
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formall from './component/Formall';
import Menu from './component/Menu';
import Footerapp from './component/Footerapp';



function App() {
  return (
    <div className="App">
      <header>
       <Menu />
      </header>

      <main>
        

        <Formall />

      </main>

      
    <Footerapp />
    </div>
  );
}

export default App;
