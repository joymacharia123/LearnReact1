import { useState } from 'react';
import './App.css'

const[name,setName] = useState('Joy')

function App (){
    return(
       <div>
        <button>Joy</button>
        <button>Njeri</button>
       </div>
    )
}

export default App