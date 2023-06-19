import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Landing from './components/landing';
import Client from './pages/client';
import Service from './pages/Service';
import Vehicle from './pages/Cars';
import Reviewticket from './pages/Review'
import {useSelector} from 'react-redux'

function App() {
  const formState = useSelector(state => state.forms)
  console.log(formState);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing></Landing>}>
          <Route path="/" element={<Home></Home>}/>
          <Route path="*" element={<Home></Home>}/>
          <Route path="client" element={<Client></Client>}/>
          <Route path="vehicle" element={<Vehicle></Vehicle>}/>
          <Route path="services" element={<Service></Service>}/>
          <Route path="packages" element={<Packages></Packages>}/>
          <Route path="preview" element={<Reviewticket></Reviewticket>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
