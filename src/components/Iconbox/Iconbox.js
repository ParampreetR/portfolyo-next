import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Iconbox.scss";
import Preloader from "../Preloader/Preloader";

const Iconbox = ({ data }) => {
  // const { services } = data;
  return !data || data.services.length == 0 ? (
    <div />
  ) : (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Service"} />
      <div className="container">
        <div className="row">
          {data.services.map((element, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos={element.effect ? element.effect : "zoom-out-up"}
              data-aos-duration={element.duration ? element.duration : "800"}
              data-aos-delay={element.delay ? element.delay : "200"}
            >
              <div className={`st-iconbox st-style1`}>
                <div className="st-iconbox-icon">
                  <img src={element.imgLink} alt="Icon" />
                </div>
                <h2 className="st-iconbox-title">{element.title}</h2>
                <div className="st-iconbox-text">{element.text}</div>
                <div className="st-iconbox-text" style={{ marginTop: "20px" }}>
                  Charges:{" "}
                  <span style={{ fontWeight: "bold" }}>{element.price}</span>
                </div>
              </div>
              <div className="st-height-b30 st-height-lg-b30"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  );
};

Iconbox.propTypes = {
  data: PropTypes.object,
};

export default Iconbox;
