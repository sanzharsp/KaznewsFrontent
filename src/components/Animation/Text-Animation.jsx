
import './animation.css';
import TextAnim from './PrintsTextAnim' 


const Textanim = () => {

    

  return (
    <div className="Text">
    <h1 className="text-animated">
            Последние новости недели
            
    </h1>
    <TextAnim width={26} text_main={"Читай и остовайся в курсе"}/>

    </div>
  );
}

export default Textanim;