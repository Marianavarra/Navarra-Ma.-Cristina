import "./Experience.css";
import Navbar from "./Navbar";
import tin06 from "./img/tin06.jpg"
import tin07 from "./img/tin07.jpg"
import tin08 from "./img/tin08.jpg"
import tin09 from "./img/tin09.jpg"
import tin10 from "./img/tin10.jpg"
import tin11 from "./img/tin11.jpg"
import tin12 from "./img/tin12.jpg"
import tin13 from "./img/tin13.jpg"


const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="">
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
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>

     <div className="exp">
      <div className="container">
        <hr/>
        <div className="row mb-5">
          <h2 className="fw-bold display-4 text-center">On-The Job Training</h2>
          <hr/>
          <div className="col-lg-6 text-center">
            <img className="one" src={tin06} />
            <h4 >Placing the book's barcode </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin07} />
            <h4 >Printing students' papers </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin08} />
            <h4>Assisting students with printing activities </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin09} />
            <h4 >Encoding office tasks </h4>
          </div>
        </div>
        <hr />
        <div className="row mb-5">
          <h3 className="fw-bold display-4 text-center">Achievements</h3>
          <hr/>
          <div className="col-lg-6">
            <img className="one" src={tin10} />
            <h4> Academic Awardes </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin11} />
            <h4 >Tekno Pinta 2023 </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin12} />
            <h4 >Certificate of Completion </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={tin13} />
            <h4>BSIT 4-A Graduation Picturial </h4>
          </div>
        </div>
      </div>
     </div>

           
    </>
  );
};

export default Experience;


