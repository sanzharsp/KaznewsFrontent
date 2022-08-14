import './footer.css'
/*компонент футер */

const Footer=(props)=>{


    return(
      <div className="footer">
      <footer>
      <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
          <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
      </ul>
      <ul className="menu">

          <li><a href="#">Home</a></li>
          <li><a href="#">Explorar</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="https://codepen.io/trending">codepen.io</a></li>
      </ul>
      <p>@Design by Sanzhar Sapar</p>
  </footer>

 </div>
    )
}

export default Footer;