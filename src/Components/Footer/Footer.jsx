import React, { useEffect } from "react";
import "./footer.css";
import video1 from "../../assets/video1.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep In Touch</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />

            <button data-aos="fade-up" className="btn flex" type="submit">
              Send <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">Safe Travels And Enjoy</div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/*G1*/}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">Our Agency</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/*G2*/}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">Parteners</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trip Advisor
              </li>
            </div>
            {/*G3*/}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">Last Minute</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>Best Travel Website Theme</small>
            <small>Copyrights Reserved - Likhith 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
