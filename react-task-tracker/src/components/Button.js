import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
    const onclick=() =>{
        console.log('Hello');
        alert('button Clicked !!!');
    }
    //Event Calling On Button Click
    // const onDoubleClick=() =>{
    //     alert('Button Double Clicked!!');
    // }
  return (
    <button  onClick={onclick}  className='btn' style={{backgroundColor:color}}>{text}</button> 
  )
}

Button.defaultProps={
    color:'steelblue',
}
Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func, //func because it is Function 
}
export default Button
