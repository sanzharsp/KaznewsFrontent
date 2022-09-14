import './AboutPage.css'
import TextAnim from '../Animation/PrintsTextAnim'
import Footer from '../footer/footer'


const AboutPage = () => {


    return(
        <div className="about_page" >

       
 
        <div className="container_about text_before_after">

            <h1>Давайте расскажем о нас</h1>
          
          
            </div>
   
            <div className="text_anim_style ">
            <TextAnim  width={46} text_main={"Враги всегда говорят правду, друзья — никогда."} />
            
            
        <div className="Content_container">
   
       <TextAnim  width={10} text_main={"(Цицерон)"} />
       <div className="castom_text_design">
       <div className="container_about_text_design">
         <h1 className="text_about_pages">you can lie, but not to yourself</h1>
       </div>
     </div>
        </div>
            <div className="text_container">
  
            <h4 className="text_about_us">Мы основаны 2022 году, с миссией говорить о новостях только правду , связи с нынешними делами страны и мира пропоганда всяких воин и политических проделок в этом мире нужен надежный источник. 
        Так и зародилаcь идея о kaznews.</h4>

        </div>







        
        <div className="text_container">
        <h4 className="text_about_us">Mы думали сделать для народа только качественные новости и придержовались мысли что идея должна жить не только в голове, но и в реальности. Mы не будем обещать что мир изменится сразу, но мы готовы его изменить хоть на малость, ведь большие дела начинются с малого.</h4>
        </div> 
        </div>
    

        <h4 className="text_brain">"Не завидуй тому, кто силён и богат,
        За рассветом всегда наступает закат."</h4>
 
        <div className="day-night-circle">
        
        <div className="sun"></div>
        <div className="moon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="stars">
        
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
       
        <div className="water"></div>
   
        </div>
        <div className="paddings"/>
     
        <Footer/>

        </div>
    )
}



export default AboutPage;