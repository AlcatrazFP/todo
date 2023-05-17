import React from 'react'
import { CustomButtonSM } from './CustomButton'
export const CheckBox = (props) => {
    const data = props.data
  return (
    <label className='check'>
        <p>{data}</p>
        <input type="radio" />
        <span className='checkmark'></span>
    </label>
  )
}
