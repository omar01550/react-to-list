import './thems.css';

function Thems() {

   function changeThem() {

        let themIcon = document.querySelector(".them-icon");

        themIcon.classList.toggle("fa-sun");
        themIcon.classList.toggle("fa-moon");

        if (themIcon.classList.contains("fa-sun")) {
            document.documentElement.style.setProperty("--task-bg","white");
            document.documentElement.style.setProperty("--task-color","black");
        }else {
            document.documentElement.style.setProperty("--task-bg","black");
            document.documentElement.style.setProperty("--task-color","white");
        }



   }

   return (
       <div>
           <i className="fa fa-moon them-icon" onClick={changeThem}></i>
       </div>

   )
}


export default Thems;
