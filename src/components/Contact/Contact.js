import Link from "next/link";
import "./Contact.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Contact({ data, socialData }) {
  // const { title, text, subTitle } = data;
  return !data ? (
    <div />
  ) : (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>
            <form
              action="#"
              method="POST"
              className="st-contact-form"
              id="contact-form"
            >
              <div className="st-form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  required
                />
              </div>
              <div className="st-form-field">
                <textarea
                  cols="30"
                  rows="10"
                  id="msg"
                  name="msg"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                className="st-btn st-style1 st-color1"
                type="submit"
                id="submit"
                name="submit"
              >
                Send Message
              </button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{data.title}</h3>
            <div className="st-contact-text">{data.text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link href="#">{data.email}</Link>
                  <Link href="#">info@support.com</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>{data.phone}</span>
                  <span>+1 213-519-1786</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>{data.address}</span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{data.subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
}

// Contact.propTypes = {
//   data: PropTypes.object,
//   socialData: PropTypes.array,
// };
