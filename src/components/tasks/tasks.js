import Task from '../task/task';
import {useSelector} from 'react-redux';


function Tasks({setInput}) {

   const data =useSelector(data=> data );


    return(
        <div className="tasks">
             {data.map(ele =>{
                return (
                   <Task ele={ele} setInput={setInput}/>
                )
             })}
        </div>
    )
}

export default Tasks;
