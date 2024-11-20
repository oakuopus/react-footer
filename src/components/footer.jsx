import "../styles/main.css"
import { IoLogoGithub, IoLogoInstagram, IoLogoFacebook, IoLogoArrowUp } from "react-icons/io";


const Footer = ({logo, about, socials}) => {
    return(
        <main>
            <div className="return-top">
                <a href="#">
                    <IoLogoArrowUp size={32} color="white"/>
                </a>
            </div>
            <footer>
                <div className="cont">
                    <div className="logo">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div className="site-links">
                        <a href="">About Us</a>
                        <a href="">FAQ</a>
                        <a href="">Contact Us</a>

                    </div>
                </div>
            </footer>
        </main>
    )
}