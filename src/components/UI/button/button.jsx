import React  from 'react';
import classes from './button.module.css'



/*Компонент кнопки,пока не использовался */


const MyButton=({children,...props})=>{
 
    return(
        <button {...props} className={classes.myBtn} >{children}</button>
    )
}

export default MyButton;