import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./YouTubeBox.scss";
import Preloader from "../Preloader/Preloader";

const YouTubeBox = ({ data }) => {
  // const { services } = data;
  return !data || data.length == 0 ? (
    <div />
  ) : (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"YouTube Videos"} />
      <div className="container">
        <div className="row">
          {data.map((element, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos={element.effect ? element.effect : "zoom-out-up"}
              data-aos-duration={element.duration ? element.duration : "800"}
              data-aos-delay={element.delay ? element.delay : "200"}
            >
              <div className={`st-iconbox st-style1`}>
                <iframe
                  width="560"
                  height="315"
                  src={"https://www.youtube.com/embed/" + element.embedId}
                  title="YouTube video player"
                  style={{ border: "0px" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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

YouTubeBox.propTypes = {
  data: PropTypes.array,
};

export default YouTubeBox;
