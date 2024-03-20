"use client";

import data from "../../Data.json";
import About from "../../components/About/About";
import Iconbox from "../../components/Iconbox/Iconbox";
import Skill from "../../components/Skill/Skill";
import Resume from "../../components/Resume/ResumeSection";
import BlogSection from "../../components/Blog/BlogSection";
import ReviewSection from "../../components/Review/ReviewSection";
import Contact from "../../components/Contact/Contact";
import PortfolioSection from "../../components/Portfolio/PortfolioSection";
import Hero4 from "../../components/Hero/Hero4";
import axios from "axios";
import { useEffect, useState } from "react";
import YouTubeBox from "../../components/YouTube/YouTubeBox";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Home4 = () => {
  const {
    _heroData,
    _aboutData,
    _serviceData,
    _skillData,
    _portfolioData,
    _blogData,
    _resumeData,
    _reviewData,
    contactData, // Only using contactData from static Data.json (Not found in API Response)
    _socialData,
    _socialData2,
  } = data;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      )
      .then((response) => {
        // Arrays to store the data of indivdual components
        let socialLinks = [];
        let servicesData = [];
        let skillData = [];
        let workExperience = [];
        let education = [];
        let portfolioItems = [];
        let reviewInformation = [];
        let blogInformation = [];
        let youTubeData = [];

        // Iterate through social handles in response to store them
        // into array in proper format required by Social Links Component
        // Sequence not found in Social handles
        for (let i = 0; i < response.data.user.social_handles.length; i++) {
          if (!response.data.user.social_handles[i].enabled) {
            continue;
          }
          // console.log(response.data.user.social_handles[i].image.url);
          socialLinks.push({
            id: response.data.user.social_handles[i]._url,
            icon: response.data.user.social_handles[i].image.url,
            title: response.data.user.social_handles[i].platform,
            link: response.data.user.social_handles[i].url,
          });
        }

        // Iterate through services in response to store them
        // into array in proper format required by IconBox Component
        for (let i = 0; i < response.data.user.services.length; i++) {
          if (!response.data.user.services[i].enabled) {
            continue;
          }

          servicesData.push({
            imgLink: response.data.user.services[i].image.url,
            title: response.data.user.services[i].name,
            text: response.data.user.services[i].desc,
            price: response.data.user.services[i].charge,
            effect: "zoom-out-up",
            duration: "500",
            delay: (i + 2) * 100,
            id: response.data.user.services[i]._id,
            sequence: response.data.user.services[i].sequence,
          });
        }
        servicesData = servicesData.sort((a, b) => a.sequence - b.sequence);

        // Iterate through skills in response to store them
        // into array in proper format required by Skills Component
        for (let i = 0; i < response.data.user.skills.length; i++) {
          if (!response.data.user.skills[i].enabled) {
            continue;
          }
          skillData.push({
            title: response.data.user.skills[i].name,
            progress: response.data.user.skills[i].percentage,
            effect: "fade-up",
            duration: "500",
            delay: (i + 2) * 100,
            sequence: response.data.user.skills[i].sequence,
            id: response.data.user.skills[i]._id,
          });
        }

        skillData = skillData.sort((a, b) => a.sequence - b.sequence);

        // Iterate through social handles in response to store them
        // into array in proper format required by Social Links Component
        for (let i = 0; i < response.data.user.timeline.length; i++) {
          if (!response.data.user.timeline[i].enabled) {
            continue;
          }

          // note: I haven't found single item in response that has "forEducation" set true
          // So I assumed the format for education data
          if (response.data.user.timeline[i].forEducation) {
            education.push({
              id: response.data.user.timeline[i]._id,
              title: response.data.user.timeline[i].jobTitle,
              duration: `${response.data.user.timeline[i].startDate} - ${response.data.user.timeline[i].endDate}`,
              subTitle: response.data.user.timeline[i].company_name,
              text: response.data.user.timeline[i].summary,
              sequence: response.data.user.timeline[i].sequence,
            });
          } else {
            workExperience.push({
              id: response.data.user.timeline[i]._id,
              title: response.data.user.timeline[i].jobTitle,
              duration: `${response.data.user.timeline[i].startDate} - ${response.data.user.timeline[i].endDate}`,
              subTitle: response.data.user.timeline[i].company_name,
              text: response.data.user.timeline[i].summary,
              sequence: response.data.user.timeline[i].sequence,
            });
          }
        }

        workExperience = workExperience.sort((a, b) => a.sequence - b.sequence);
        education = education.sort((a, b) => a.sequence - b.sequence);

        // Iterate through portfolio in response to store them
        // into array in proper format required by PortfolioSection Component
        for (let i = 0; i < response.data.user.projects.length; i++) {
          if (!response.data.user.projects[i].enabled) {
            continue;
          }
          portfolioItems.push({
            id: response.data.user.projects[i]._id,
            imgLink: response.data.user.projects[i].image.url,
            imgLinkLg: response.data.user.projects[i].image.url,
            title: response.data.user.projects[i].title,
            subTitle: response.data.user.projects[i].description,
            effect: "fade-up",
            duration: "500",
            delay: (i + 2) * 100,
            sequence: response.data.user.projects[i].sequence,
          });
        }
        portfolioItems = portfolioItems.sort((a, b) => a.sequence - b.sequence);

        // Iterate through Testimonials in response to store them
        // into array in proper format required by Testimonials Component
        for (let i = 0; i < response.data.user.testimonials.length; i++) {
          if (!response.data.user.testimonials[i].enabled) {
            continue;
          }
          reviewInformation.push({
            id: response.data.user.testimonials[i]._id,
            imgLink: response.data.user.testimonials[i].image.url,
            title: response.data.user.testimonials[i].name,
            text: response.data.user.testimonials[i].review,
            designation: response.data.user.testimonials[i].position,
          });
        }

        // Iterate through Testimonials in response to store them
        // into array in proper format required by Testimonials Component
        for (let i = 0; i < response.data.user.youtube.length; i++) {
          if (!response.data.user.youtube[i].enabled) {
            continue;
          }
          youTubeData.push({
            embedId: response.data.user.youtube[i].embedId,
            id: response.data.user.youtube[i]._id,
            sequence: response.data.user.youtube[i].sequence,
          });
        }

        youTubeData = youTubeData.sort((a, b) => a.sequence - b.sequence);

        // note: I haven't found the blogs in response so I assume the format
        if (response.data.user.blogs) {
          for (let i = 0; i < response.data.user.blogs.length; i++) {
            if (!response.data.user.blogs[i].enabled) {
              continue;
            }
            blogInformation.push({
              id: response.data.user.blogs[i]._id,
              imgLink: response.data.user.blogs[i].image.url,
              title: response.data.user.blogs[i].name,
              date: response.data.user.blogs[i].date,
              href: response.data.user.blogs[i].link,
              designation: response.data.user.role,
            });
          }
        }

        // Set the user data from the response and the indivdual arrays
        setUserData({
          heroData: {
            title: response.data.user.about.name,
            subTitle: response.data.user.about.subTitle,
            designation: response.data.user.about.title,
            imgLink: response.data.user.about.avatar.url,
            text: response.data.user.about.subTitle,
            imgAuthor: response.data.user.about.avatar.url,
          },
          socialLinks: socialLinks,
          aboutData: {
            imgLink: response.data.user.about.avatar.url,
            title: response.data.user.about.name,
            subTitle: response.data.user.about.title,
            text: response.data.user.about.description,
            cvPdf: "#", // note: CV not found in API response
            details: [
              {
                title: "Phone",
                info: response.data.user.about.phoneNumber,
              },
              {
                title: "Email",
                info: response.data.user.email,
              },
              {
                title: "From",
                info: response.data.user.about.address,
              },
              {
                title: "Language",
                info: "English, Spanish", // note: Language not found in API
              },
              {
                title: "Freelance",
                info: "Available", // note: Freelance not found in API
              },
            ],
          },
          serviceData: {
            services: servicesData,
          },
          skillData: {
            title:
              "All the skills that I have in that field of work are mentioned.", // note: Title not found in API response
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.", // note: Text not found in API response
            skills: skillData,
          },
          resumeData: {
            experienceTitle: "Experience",
            experience: workExperience,
            educationTitle: "Education",
            education: education,
          },
          portfolioData: {
            portfolioItems: portfolioItems,
          },
          reviewData: {
            useFor: "review",
            sliderSetting: {
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    autoplay: true,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    autoplay: true,
                  },
                },
              ],
            },
            informations: reviewInformation,
          },
          blogData: {
            useFor: "blog",
            sliderSetting: {
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    autoplay: true,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    autoplay: true,
                  },
                },
              ],
            },
            informations: blogInformation,
          },
          youTubeData: youTubeData,
        });
      });
  }, []);

  return (
    <>
      <CustomCursor />
      <Header
        phoneNumber={
          userData.aboutData ? userData.aboutData.details[0].info : ""
        }
      />
      <Hero4 data={userData.heroData} socialData={userData.socialLinks} />
      <About data={userData.aboutData} data-aos="fade-right" />
      <Iconbox data={userData.serviceData} data-aos="fade-right" />
      <Skill data={userData.skillData} data-aos="fade-right" />
      <YouTubeBox data={userData.youTubeData} data-aos="fade-right" />
      <Resume data={userData.resumeData} />
      <PortfolioSection data={userData.portfolioData} data-aos="fade-right" />
      <ReviewSection data={userData.reviewData} data-aos="fade-right" />
      <BlogSection data={userData.blogData} data-aos="fade-right" />
      <Contact
        data={{
          ...contactData,
          phone: userData.aboutData
            ? userData.aboutData.details[0].info
            : "Loading...",

          address: userData.aboutData
            ? userData.aboutData.details[2].info
            : "Loading...",

          email: userData.aboutData
            ? userData.aboutData.details[1].info
            : "Loading...",
        }}
        socialData={userData.socialLinks}
        data-aos="fade-right"
      />
      <Footer />
    </>
  );
};

export default Home4;
