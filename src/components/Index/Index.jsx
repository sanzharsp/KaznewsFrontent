import About from "../about_us/about";
import Img from '../img/img';
import Section from '../section/section';
import lostImage from '../../images/wfh_1.svg';
import '../style/images.css';
import PostList from '../API/getpostmain';
import Textanim from '../Animation/Text-Animation';
import Footer from '../footer/footer';



function IndexPage() {
 
  return (

    <div >


<Section 
img={<Img lostImage={lostImage} imagestyle={"hero-img"}/>}
content={<About main_texts={"Мой способ шутить — это говорить правду.На свете нет ничего смешнее. "}
about={"Коротко о нас"}/>}
/>
<Textanim/>


<PostList/>


<Footer/>
</div>



);
}

export default IndexPage;