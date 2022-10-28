import './thems.css';

function Thems() {

   function changeThem() {
         document.querySelector(".them-icon").classList.toggle("fa-sun");
         document.querySelector(".them-icon").classList.toggle("fa-moon");
   }

   return (
       <div>
           <i className="fa fa-moon them-icon" onClick={changeThem}></i>
       </div>

   )
}


export default Thems;
