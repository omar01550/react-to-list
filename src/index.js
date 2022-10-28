import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

function reducer(state=[],action) {
       switch (action.type) {
         case "AddToDo":

             return [...state,action.payload];
           break;
           case "RemoveToDo":

               return state.filter(ele => ele.id != action.id);
             break;
             case "UpDateCompleted":
                   return state.map(ele => ele.id == action.id?{content:action.content,complete:! action.case,id:action.id}:ele);
               break;
         default:
            return state;
       }
}

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
