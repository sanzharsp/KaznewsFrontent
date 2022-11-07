import About from "../about_us/about";
import Img from '../img/img';
import Section from '../section/section';
import lostImage from '../../images/wfh_1.svg';
import '../style/images.css';
import PostList from '../API/getpostmain';
import Textanim from '../Animation/Text-Animation';
import Footer from '../footer/footer';
import Charts from '../charts/charts'
import {Container,Card} from '@mui/material';
import CardContent from '@mui/material/CardContent';



function IndexPage() {

  return (

    <div >


<Section 
img={<Img lostImage={lostImage} imagestyle={"hero-img"}/>}
content={<About main_texts={"Мой способ шутить — это говорить правду.На свете нет ничего смешнее. "}
about={"Коротко о нас"}/>}
/>

<CardContent/>
<Container>
<Card >
<h1 className="text-animated">Beta</h1>
<Charts/>

</Card>
</Container>
<Textanim/>



<PostList/>


<Footer/>
</div>



);
}

export default IndexPage;