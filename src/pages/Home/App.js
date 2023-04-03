import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import ProductsImage from "../../img/products.png";
import { useSelector } from "react-redux";
import ImageBackground from "../../img/background.jpg";
import { navigateToUrl } from "single-spa";
import anime from "animejs";
import { ChevronDown, Menu } from "react-feather";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";
import { addUserToLocalStorage } from "../../utils/localStorage";
import { logout } from "../../features/userSlice";
import Background from "../../components/background";
import Carousel from "../../components/carrousel";
import Iphone1 from "../../img/cellphone/iphone1.png";
import Iphone2 from "../../img/cellphone/iphone2.png";
import "./styles.scss";
const App = ({ name }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userFromAuth, setUserFromAuth] = useState([]);
  const [animation, setAnimation] = useState(null);
  const [animationColor, setAnimationColor] = useState(null);
  const refProductsDesconto = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [islogout, setIsLogout] = useState(false);
  const [user, setUser] = useState();
  const { token } = useSelector((state) => state.user);

  console.log("🚀 ~ file: routes.js:12 ~ Routes ~ token:", token);
  useEffect(() => {
    window.addEventListener("@ja/react-multiples/user/login", (event) => {
      console.log("chameiii22", event);
      addUserToLocalStorage({
        email: event.detail.user.email,
        token: event.detail.user.token,
      });
      dispatch(
        setUser({
          email: event.detail.user.email,
          token: event.detail.user.token,
        })
      );
      setUserFromAuth(event.detail.user.user.email);
    });
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("🚀 ~ file: routes.js:16 ~ useEffect ~ user:", user);
    if (!user || user.token == null) {
      history.push("/error");
    }
    if (user && user.user && user.user.email) {
      setUser(user.user.email);
    }
  }, []);

  useEffect(() => {
    console.log(islogout);
  }, [islogout]);
  const handleLogoutClick = () => {
    console.log("oi");
    localStorage.removeItem("user"); // remove user from local storage
    dispatch(logout());
    navigateToUrl("/react-multiples");
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setAnimation(
      anime({
        targets: refProductsDesconto.current,
        backgroundColor: [
          { value: "#f06d57" }, // laranja
          { value: "#0077FF" }, // azul
        ],
        duration: 1000,
        easing: "linear",
        direction: "alternate",
        loop: true,
      })
    );

    setAnimationColor(
      anime({
        targets: refProductsDesconto.current.querySelector("h2"),
        color: [
          { value: "#f06d57" }, // laranja
          { value: "#0077FF" }, // azul
        ],
        duration: 800,
        easing: "linear",
        direction: "alternate",
        loop: true,
      })
    );
  }, []);
  const images = [Iphone1, Iphone2];
  return (
    <div className="container-home">
      {" "}
      <header className="header-home">
        <div className="home-select">
          <div className="select-header" onClick={handleToggle}>
            <Menu size={32} />
          </div>
          {isOpen && (
            <div className="home-select-menu">
              <a href="#">Perfil</a>
              <a href="#" onClick={handleLogoutClick}>
                Sair
              </a>
            </div>
          )}
        </div>
      </header>
      <div className="container-banner">
        {" "}
        <Background className="bubbles" />
        <section className="home-section">
          <h1 className="home-title">
            E-Shop Eletrônicos
            <br /> Compre online!
          </h1>
          <p className="home-subtitle">
            Uma nova maneira de consumir <br />
          </p>
          <button class="button-24" role="button">
            Compre Agora!
          </button>
        </section>
        <section className="center-products">
          {" "}
          <h1 className="h1-outlet">
            out<span className="span-outlet">let</span>
          </h1>
          <div className="products-desconto" ref={refProductsDesconto}>
            <h2 ref={refProductsDesconto}>desconto</h2>
          </div>
          <h2 id="h2-outlet">
            com até <span className="span-outlet">60% off</span>
          </h2>
        </section>
      </div>
      <div className="image-home-container">
        <Carousel items={images} />
        <Carousel items={images} />
        <Carousel items={images} />
        <img src={ProductsImage} alt="image products" />
      </div>
    </div>
  );
};
export default App;
