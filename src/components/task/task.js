import './task.css';
import {useDispatch} from 'react-redux';

function Task({ele}) {

  const dispatch = useDispatch();

  function removeItem() {
        dispatch({
           type:"RemoveToDo",
           id:ele.id
        })
  }

  // up date completed tasks

  function upDateCompleted() {
      dispatch({
         type:"UpDateCompleted",
         id:ele.id,
         case:ele.complete,
         content:ele.content
      })
  }



  return (
      <div className="task" id={ele.id} data-check={ele.complete}>
          <div className="task-content">
          <span className="check-box" onClick={upDateCompleted}>
             {ele.complete == true?<span className="inner"></span>:true}
          </span>
          <p>{ele.content}</p>
          </div>
          <div className="btns">
               <i className="fa fa-trash" onClick={removeItem}></i>
               <i className="fa fa-pen"></i>
               <i className="fa fa-star"></i>
          </div>
      </div>
  )
}

export default Task;
