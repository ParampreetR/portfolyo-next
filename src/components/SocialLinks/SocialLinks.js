"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import Link from "next/link";

const SocialLinks = ({ data }) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleIconHover = (index) => {
    setActiveLink(index);
  };

  return !data ? (
    <div />
  ) : (
    <div
      className="st-social-link"
      onMouseEnter={() => {
        console.log(data);
      }}
    >
      {data.map((item, index) => (
        <Link
          href={item.link}
          className={
            index === activeLink ? "st-social-btn active" : "st-social-btn"
          }
          onMouseEnter={() => handleIconHover(index)}
          key={index}
        >
          <span className="st-social-icon">
            <img src={item.icon} style={{ height: "fit-content" }} />
          </span>
          <span className="st-icon-name">{item.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
