import Task from '../task/task';
import {useSelector} from 'react-redux';


function Tasks() {

   const data =useSelector(data=> data );
   console.log(data);

    return(
        <div className="tasks">
             {data.map(ele =>{
                return (
                   <Task ele={ele}/>
                )
             })}
        </div>
    )
}

export default Tasks;
