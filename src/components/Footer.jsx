import { BsTwitterX, BsFacebook, BsInstagram, BsSkype, BsLinkedin, BsGithub } from "react-icons/bs";
import '../styles/footer.css'
const Footer = () => {
    return (
        <>
            <footer id="footer" class="footer position-relative light-background">
                <div class="container">
                    <h3 class="sitename">Ayhan Karaman</h3>
                    <p></p>
                    <div class="social-links d-flex justify-content-center">
                        {/*
                            <a href=""><i> <BsTwitterX /></i></a>
                            <a href=""><i><BsFacebook /></i></a>
                            <a href=""><i> <BsInstagram /></i></a>
                            <a href=""><i> <BsSkype /></i></a> 
                            <a href=""><i><BsLinkedin /></i></a>
                        */}
                        <a target='_blank' href="https://github.com/ayhan-karaman"><i><BsGithub /></i></a>
                    </div>
                    <div class="container">
                        <div class="copyright">
                            <span>Telif Hakkı</span> <strong class="px-1 sitename">Ayhan Karaman</strong> <span>Tüm Hakları Saklıdır</span>
                        </div>
                        <div class="credits">
                            &#169; {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer