import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Preloader from "../Preloader/Preloader";

const SocialLinks2 = ({ data }) => {
  return !data ? (
    <div></div>
  ) : (
    <div
      className="st-hero-social-links"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="500"
    >
      {data.map((item, index) => (
        <Link href={item.link} className="st-social-btn" key={index}>
          <span className="st-social-icon">
            <img src={item.icon} />
          </span>
        </Link>
      ))}
    </div>
  );
};

SocialLinks2.propTypes = {
  data: PropTypes.array,
};

export default SocialLinks2;
