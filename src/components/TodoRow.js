import React from 'react'
import { CheckBox } from './CheckBox'
import { Small } from './CustomButton'

export const TodoRow = (props) => {
  const deletodos = props.deletetodos
  // console.log(deletodos)
  console.log(props.position)
  return (
    <div className='flex m-3 relative'>
        <CheckBox data={props.todo}/>
        <div className=' absolute right-0 opacity-0 hover:opacity-100'><Small index={props.position} deletetodos={props.deletetodos} /></div>
    </div>
  )
}

