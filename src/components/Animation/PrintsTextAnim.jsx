import './animation.css';

const TextAnim = (props) => {  
    const divStyle = {
        width: `${props.width}ch`,
        
      };
      
     
    
    return (
    <div className="wrapper">
    
    <div className="typing-demo" style={divStyle}>
    {props.text_main}
    </div>
</div>
  
  );
}

export default TextAnim;