import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora ",
    location: "New Zealand ",
    grade: "Cultural Relax ",
    fees: "$700",
    description: "Bora Bora is a small, picturesque island located in the South Pacific Ocean, specifically in the French Polynesia region. Bora Bora is a popular luxury travel destination and honeymoon spot. The island is surrounded by a barrier reef and a vibrant coral ecosystem, making it a haven for snorkeling and water activities. Bora Bora is celebrated for its idyllic beaches, crystal-clear waters, and a laid-back atmosphere, making it a dream destination for those seeking a romantic and tranquil escape.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "Cultural Relax ",
    fees: "$600",
    description: "Machu Picchu is an ancient Inca citadel nestled high in the Andes Mountains of Peru. Built in the 15th century, this UNESCO World Heritage site is renowned for its breathtaking location and well-preserved stone structures. Perched on a ridge above the Urubamba River, Machu Picchu is a marvel of Inca engineering and architecture, featuring intricate stone terraces, temples, and residential areas. The site served as a royal estate or religious retreat for the Inca emperor Pachacuti.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "Cultural Relax ",
    fees: "$700",
    description: "The Great Barrier Reef is the world's largest coral reef system, stretching over 2,300 kilometers (1,430 miles) along the northeast coast of Australia. It is a UNESCO World Heritage site and one of the most iconic and diverse ecosystems on the planet. Comprising thousands of individual reefs and islands, the Great Barrier Reef is home to an extraordinary array of marine life, including a vast variety of corals, fish, mollusks, and other species. ",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "Cultural Relax ",
    fees: "$800",
    description: "Cappadocia is a unique and enchanting region located in central Turkey, known for its otherworldly landscapes, distinctive rock formations, and ancient history. The area is characterized by surreal, cone-shaped rock formations, often called fairy chimneys ,which have been sculpted by erosion over centuries. These formations, along with underground cities, cave dwellings, and rock-cut churches, make Cappadocia a UNESCO World Heritage site.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "Cultural Relax ",
    fees: "$1100",
    description: "Guanajuato is a charming and picturesque city located in central Mexico. Renowned for its vibrant colors, colonial architecture, and rich cultural heritage, Guanajuato is a UNESCO World Heritage site. The city is nestled in a narrow valley, surrounded by hills, and its historic center is a maze of narrow, winding cobblestone streets and alleys.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "Cultural Relax ",
    fees: "$840",
    description: "Cinque Terre, translated as Five Lands, refers to a stunning coastal region in Northwestern Italy. Comprising five picturesque villages—Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore—Cinque Terre is a UNESCO World Heritage site known for its colorful cliffside homes, terraced vineyards, and breathtaking views of the Ligurian Sea.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "Cultural Relax ",
    fees: "$790",
    description: "Angkor Wat is a renowned archaeological site located in Cambodia, near the city of Siem Reap. It is the largest religious monument in the world and a UNESCO World Heritage site. Built in the 12th century by the Khmer King Suryavarman II, Angkor Wat originally served as a Hindu temple dedicated to the god Vishnu but later transformed into a Buddhist temple complex.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "Cultural Relax ",
    fees: "$900",
    description: "The Taj Mahal is an iconic white marble mausoleum located in Agra, India. Built in the 17th century by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal is widely regarded as one of the most exquisite examples of Mughal architecture and a masterpiece of Indo-Islamic art.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "Cultural Relax ",
    fees: "$500",
    description: "Bali is a captivating island province of Indonesia, renowned for its stunning natural beauty, vibrant culture, and spiritual atmosphere. Located in Southeast Asia, Bali is known for its lush landscapes, including terraced rice paddies, volcanic mountains, and pristine beaches with turquoise waters.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>{" "}
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    Details <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
