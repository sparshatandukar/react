import React from 'react';
import './App.css';
import ParentComponent from './components/toggleComponent/parentComponent';
import ParentCounter from './components/counterComponent/parentCounter';
import ParentMessage from './components/displayComponent/parentDisplay';
import ToDoApp from './components/todo/ToDoApp';
import AddView from './components/listView/AddView';
import "./tailwind.css"
import ContactForm from './components/Contactform/Contactform';
import RegisterForm from './components/register/RegisterForm';
import LoginForm from './components/login/LoginForm';



function App() {
  return (
    <>
    <div>
      {/* <ParentComponent/>
      <ParentCounter/>
      <ParentMessage/> */}
      {/* <ToDoApp/>
      <AddView/> */}
      <ContactForm/>
      <RegisterForm/>
      <LoginForm/>
    </div>
    </>
  );
}

export default App;
