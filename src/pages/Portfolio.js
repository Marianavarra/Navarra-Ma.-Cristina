import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage from "./img/calcu.png"
import tin17 from "./img/tin17.PNG"
import tin123 from "./img/tin123.PNG"
import tin19 from "./img/tin19.PNG"
const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-none">
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
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h2>Projects</h2>
            <hr />
          <div className="col">
          <img className="one" src={calcuImage} />
          <h4 className="mt-5">Calculator Project</h4>
          </div>
          <div className="col">
          <img className="two" src={tin123} />
          <h4 className="mt-5">My React Project</h4>
          </div>
          <div className="col">
          <img className="three" src={tin19} />
          <h4 className="mt-5">Final Frontend Project</h4>
          </div>
          <div className="col">
          <img className="four" src={tin17} />
          <h4 className="mt-5">Frontend Project</h4>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
