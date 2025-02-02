import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'
import './App.css'
import Calculation from './components/Calculation/Calculation'
import Courses from './components/course/Courses'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selected,setSelected]= useState([]);
  const [cdtHr, setCdtHr]=useState(0);

  //let cdtHr=0;

  function handleSelectedCourse(course,id){
    const newCdtHr=parseInt(course.credit_hour)+cdtHr;
    // let credit=parseInt(course.credit_hour);
    // cdtHr+=credit;
    // console.log(cdtHr);
    setCdtHr(newCdtHr);
    if ((selected.includes(course))===false && cdtHr<parseInt(20)) {
      const newSelectedCourse=[...selected,course];
      setSelected(newSelectedCourse);
    }
    else if(cdtHr>20){
      toast.error('More Than 20 credit hour is not allowed')
      const remainingSelected=selected.filter(course=>course.id!==id);
      setSelected(remainingSelected);
    }
  }
  
  return (
    <>
      <div><ToastContainer /></div>
      <div className="bg-gray-200 h-full pb-10">
      <Navbar></Navbar>
      <div className="flex flex-col md:flex-row gap-4 container mx-auto">
        <div className="w-11/12 md:w-2/3 lg:w-3/4 flex mx-auto justify-center">
          <Courses handleSelectedCourse={handleSelectedCourse}></Courses>
        </div>
        <div className="w-10/12 md:w-1/3 lg:w-1/4 flex mx-auto justify-center">
          <Calculation selected={selected} cdtHr={cdtHr}></Calculation>
        </div>
      </div>
      </div>
      
      {/* <h1>Vite + React</h1> */}
      
    </>
  )
}
App.propTypes={
  cdtHr: PropTypes.number,
}
export default App
