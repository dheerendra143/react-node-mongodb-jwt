import logo from './logo.svg';
import './App.scss';
import {getHost} from "./utils/getHost";

const getAll = () => {
  fetch("/emp/getall",{method:"GET"}).then(res=>res.json).then(res=>{
    console.log("res", res);
  })
}


function App() {
  return (
    <div className="App">
      {getAll()}
    </div>
  );
}

export default App;
