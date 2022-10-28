import {React} from 'react';
import Navbar from './components/navbar/navbar.js';
import Form from './components/form/form';
import Thems from './components/thems/thems';
import Logo from './components/logo/logo';
import Tasks from './components/tasks/tasks';
import {useSelector,useDispatch} from 'react-redux';
import {useState,useEffect} from 'react';
import './App.css';


function App() {

 const [input,setInput] = useState("");
 const data = useSelector(data => data);
 const dispatch = useDispatch();

  return (
      <div className="App">

                <header>
                   <div className="container">
                       <div className="header-items">
                          <Logo/>
                          <Thems/>

                       </div>

                       <Form input={input} setInput={setInput} />
                   </div>
                </header>
                <section className="todos">
                   <div className="container">
                       <Tasks setInput={setInput}/>
                   </div>
                </section>

      </div>
  );
}


export default App;
