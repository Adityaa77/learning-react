// import './01_HeaderFooter.css'; 
// import Header from './HeaderandFooter/Header.jsx';
// import Footer from './HeaderandFooter/Footer.jsx';

// import './02_Card.css'; 
// import Card from './Card/Card.jsx'

// import Button from './Button/button.jsx'

// import './03_Prop.css'
// import Student from "./Prop&PropTypes/Prop";

// import Message from "./conditionalrendering/loggedin.jsx";

// import List from './renderinglist/list.jsx';
// const classa = [{id:1, name:'aditya', marks:44},
//                       {id:2,name: 'adiraj', marks:60},
//                       {id:3,name: 'adidas', marks:70},
//                       {id:4,name: 'adivansh', marks:80}];

// const classb = [{id:5, name:'shri', marks:90},
//                       {id:6,name: 'aryan', marks:98},
//                       {id:7,name: 'adiyan', marks:40},
//                       {id:8,name: 'noddy', marks:100}];                      

// import Counter from "./CounterProgram/counter.jsx";

// import BgColor from "./BackGroundColorPicker/bgcolor";

import Todo from "./To_Do_List/todo.jsx";

import Dgclock from "./Digital_Clock_React/dgclock.jsx";

function App() {
  return (
    <>
      {/* for header and footer
      <Header />
      <Footer /> */}

      {/* This is for the Card
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}

      {/*This is for the button 
      <Button/> */}
      
{/* This is for the prop types
<Student name='Aditya Sharma' age={30} student={true} cgpa={8.75} location='Mumbai' />
<Student name='Priya Singh' age={22} student={true} cgpa={9.10} location='Delhi' />
<Student name='Rahul Gupta' age={25} student={false} cgpa={7.50} location='Bangalore' />
<Student name='Sneha Reddy' age={20} student={true} cgpa={9.55} location='Hyderabad' />
<Student name='Amit Kumar' age={28} student={true} cgpa={8.20} location='Chennai' />
<Student name='Deepika Rao' age={23} student={false} cgpa={7.90} location='Pune' />
<Student name='Vikram Patel' age={21} student={true} cgpa={9.30} location='Ahmedabad' />
<Student name='Nisha Verma' age={24} student={true} cgpa={8.90} location='Kolkata' />
<Student name='Sanjay Das' age={26} student={false} cgpa={7.20} location='Lucknow' />
<Student name='Anjali Mishra' age={19} student={true} cgpa={9.80} location='Jaipur' /> */}

        {/* THis is for Coditional Rendering 
        <Message isloggedin={true} username="Aditya"/> */}

       {/*This was for List Rendering  
       <List items={classa} category='Class A'/>
       <List items={classb} category='Class B'/> */}

       {/* This is the Counter app with Updater Function on Increment
        <Counter/>  */}
     
       {/* This is the bgColor  
       <BgColor/> */}
      
       {/* This is a Todo List 
       <Todo/> */}

      <Dgclock/>

    </>
  );
}

export default App
