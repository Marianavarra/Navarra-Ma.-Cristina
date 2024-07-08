import "./Contact.css";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faNewspaper, faUserNinja } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div id="Contact-info" className="">
      <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Contact Page
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <a href="https://web.facebook.com/macristina.navarra.5/">
                <h1>
                <FontAwesomeIcon className="icons" icon={faFacebook}/>
                </h1>
              </a>
            </div>
            <div className="col-lg-2">
              <a href="https://www.tiktok.com/@mariacristinanavarra?lang=en">
                <h1>
                <FontAwesomeIcon className="icons" icon={faTiktok}/>
                </h1>
              </a>
            </div>
          </div>
        </div>
    </section>
 <footer class="footer text-light fixed-bottom pt-3" id="footer">
    <div class="container">
        <div class="row al">
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
                <a class="navbar-brand" href="#">
                </a>
                <h5 class="mt-4"><FontAwesomeIcon className="me-1" icon={faUserNinja} />Contact</h5>
                <p> If you have question you can contact me trough my social media account you can also call me  </p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start text-center">
                <h5><FontAwesomeIcon className="me-1" icon={faLocation} /> Address </h5>
                <p>Prk. Crostons , Brgy. Tampalon<br/> Kabankalan City, Philippines</p>
                <p>Email: macristinanavarra439@gmail.com<br/>Phone:09064829195</p>
            </div>
            <div class="col-md-4 col-sm-6 text-lg-start  text-center">
                <h5><FontAwesomeIcon className="me-1" icon={faNewspaper} />Contact Me</h5>
                <form>
                </form>
                <p>Contact me through Facebook just click the facebook icon and also you can contact me trough tiktok and g-mail account. </p>
            </div>
        </div>
    </div>
</footer>

    </>
  );
};

export default Contact;
