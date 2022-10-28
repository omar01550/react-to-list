import "./form.css";
import {useDispatch} from 'react-redux';


function Form({input,setInput}) {
  const dispatch = useDispatch();

  function AddItem(e) {
     e.preventDefault();
      dispatch({
         type:"AddToDo",
         payload:{content:input,id:Math.floor(Math.random()*10000),complete:false}
      });

      setInput("");
  }

  function handelValue(e) {
      setInput(e.target.value);
  }

  return (
      <form onSubmit={AddItem}>
          <input type="text" palceholder="whats your task" value={input} onChange={handelValue}/>
      </form>
  )
}

export default Form;
