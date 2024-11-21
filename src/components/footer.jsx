import "../styles/main.css"
import { IoLogoGithub, IoLogoInstagram, IoLogoFacebook, IoLogoPython} from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";


const Footington = ({about, socials}) => {
    return(
        <main>
            <footer>
                <div className="cont">
                    <div className="socials">
                        <div className="line"></div>
                        <a href={socials.github} target="_blank" rel="noopener noreferrer">
                            <IoLogoGithub color="white"/>
                        </a>
                        <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                            <IoLogoInstagram color="white"/>
                        </a>
                        <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
                            <IoLogoFacebook color="white"/>
                        </a>
                        <a href={socials.x} target="_blank" rel="noopener noreferrer">
                            <FaXTwitter color="white"/>
                        </a>
                        <div className="line"></div>
                    </div>   
                    <div className="logo">
                        <IoLogoPython color="green"/>
                        <div className="copyright">
                            <p>© 2022 Footington. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="site-links">
                        <a href={about.aboutUs}>About Us</a>
                        <a href={about.FAQ}>FAQ</a>
                        <a href={about.contactUs}>Contact Us</a>
                        <a href={about.login}>Login</a>
                    </div>                 
                </div>
            </footer>
        </main>
    )
}

export default Footington