import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TodoRow } from './components/TodoRow';
import { CustomButton } from './components/CustomButton';

function App() {
  const [todos,setTodos] = useState('')
  const [data,setData] = useState(['Task1','Task2','Task3','Task4'])
  const handlechange=(e)=>{
    setTodos(e.target.value)
  }
  const handletodo=()=>{
    // e.preventDefault()
    if(todos==='')
      return;
    setData([...data,todos]);
    setTodos('')
  }
  const deletetodos=(index)=>{
    console.log(index)
    const newdata = data.filter((_, i) => i !== index);
    setData(newdata)
  }
  console.log('data',data);
  return (
    <div className='flex items-center justify-center h-[100vh] bg-[#e0dfd5]'>
      <div className='bg-white border-solid border-2 rounded-md'>
      <div className=' main p-3'>
        <div className='font-bold text-lg'><h1>Todo</h1></div>
        <div>
          <ul>
          {data.map((ele,index)=>(
            <TodoRow key={index} position={index} todo={ele} deletetodos={deletetodos}/>
          ))}
          </ul>
        </div>
      </div>
    <div className='input p-2 border-t-2 border-slate-200'>
        <input className='bg-slate-300 mr-2 rounded-sm p-1' name='todos' value={todos} type='text' placeholder='Add Task here...' onChange={handlechange}></input>
        <CustomButton handletodo={handletodo}  />
        {/* <button oncl >submit</button> */}
      </div>
    </div>
    </div>
  );
}

export default App;
