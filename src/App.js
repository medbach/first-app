
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './component/Menu';
import Footerapp from './component/Footerapp';
import Allroutes from './component/Allroutes';



function App() {
  return (
    <div className="App">
      <header>
       <Menu />
      </header>

      <main>
        

        <Allroutes />

      </main>

      
    <Footerapp />
    </div>
  );
}

export default App;
