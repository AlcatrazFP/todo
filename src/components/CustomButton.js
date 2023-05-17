import React from 'react'

export const Big = ({handletodo}) => {
  return (
    <button className=' bg-green-500 p-1 rounded-md' onClick={handletodo}>Add Todo</button>
  )
}
export const Small = (props) => {
  // console.log(props.deletetodos)
  // console.log(deletodos)
  const index = props.index
  console.log(index)
  return (
    <button className=' bg-green-500 pr-2 pl-2 rounded-md w-auto h-auto' onClick={()=>props.deletetodos(index)} >X</button>
  )
}