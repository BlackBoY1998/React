import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
return (
 <header className='header'>
    {/* this in tag css You can Give  In Belowed Example*/}
  <h1 style={{color:'red',backgroundColor:'black'}}>{title}</h1> 
   {/* You Can Use Js CSS*/}
  {/* <h1 style={headingstyle}>{title}</h1>  */}
  <Button color='green' text='Add'/>
  
</header>
)
}


//Set Default Prop for Componet
 Header.defaultProps={
   title:'Task Tracker',
}
 Header.propTypes={
    title: PropTypes.string.isRequired,
}

 
// css in JS
// const headingstyle ={
//     color:'red',
//     backgroundColor:'black',
// }
export default Header
