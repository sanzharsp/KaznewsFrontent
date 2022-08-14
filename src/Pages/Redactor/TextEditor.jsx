
import JoditEditor from "jodit-react";

const TextEditor=(props)=>{
    
    const config = {
        readonly: false,
        height: 400
      };
    return(
        <JoditEditor
        ref={props.editor}
        value={props.contentEdit}
        config={config}
        onBlur={props.handleUpdateEdit}
    
      />
    )
}

export default TextEditor;