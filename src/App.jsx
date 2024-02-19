// import { useState } from 'react';
// import './App.css'


// function App() {

//   const [count,setCount] = useState(0)

//   const increment = ()=>{
//     setCount(count + 1 )
//   }

//   const decremnet = ()=>{
//     setCount(count - 1)
//   }

//   return (
//       <div className='container'>
//         {count > 5?(<div className='red-container'></div>) : (<div className='yellow-container'></div>)}
//         <h1 className="text-3xl font-bold underline">{count}</h1>
//              <div className='parent'>
//         <button onClick={increment} className='w=20 h=20 bg-red-500'> + </button>
//         <button onClick={decremnet} className='w=20 h=20 bg-green-500'> - </button>

//     </div>
//       </div>
        
//   )
// }

// export default App


import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
    return (
        <div>
        <NavBar></NavBar>
        <Header></Header>
        <Footer></Footer>

        </div>
    );
}

export default App;
