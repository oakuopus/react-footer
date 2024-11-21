import Footington from "./components/footer"
const about = {
    aboutUs: "#",
    FAQ: "#",
    contactUs: "#",
    login: "#"
}
const socials = {
    github: "https://github.com/oakuopus",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    x: "https://x.com/?lang=en"
}
function Footer(){
    return (
        <div>
            <Footington 
                socials = {socials}
                about = {about}
            />
        </div>
    )
}
export default Footer