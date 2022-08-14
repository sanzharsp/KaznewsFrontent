
import Checkbox from '@mui/material/Checkbox';
import React, {useState  } from "react";


const MainNewsBoolean=(props)=>{
    const [checked, setChecked] = useState(false),
    handleChange = () => {
    setChecked(!checked);
        };

        props.formData.append('main_news', checked);
    
    return(
        <Checkbox checked={checked} onChange={handleChange} defaultChecked color="success" />
    )
}

export default MainNewsBoolean;