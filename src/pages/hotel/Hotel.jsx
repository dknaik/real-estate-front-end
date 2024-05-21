import React, { useState } from "react";
import NavBar from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/maillist/MailList";
const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
    },
    {
      src: "https://media.designcafe.com/wp-content/uploads/2022/07/29185240/industrial-rustic-living-room-in-earthy-tones.jpg",
    },
    {
      src: "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/11/Luxury-interior-design-home-designing-1-scaled.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg",
    },
    {
      src: "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
    },
    {
      src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8zNF9hX3Bob3RvX29mX21pbmltYWxfYXBhcnRtZW50X19sX3NvZmFfOTZhYjQ1OTQtOWVhMS00NTllLTkzZjctZDFjYzc3MTgyMjZkXzEuanBn.jpg",
    },
  ];

  const onClickImage = (index) => {
    setSlideIndex(index);
    setOpen(true);
  };
  const handleArrowLeft = (slideIndex) => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(photos.length - 1);
    }
  };
  const handleArrowRight = (slideIndex) => {
    if (slideIndex < photos.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              onClick={() => setOpen(false)}
              icon={faCircleXmark}
              className="close"
            />
            <FontAwesomeIcon
              onClick={() => handleArrowLeft(slideIndex)}
              icon={faCircleArrowLeft}
              className="arrow"
            />
            <div className="sliderWrapper">
              <img src={photos[slideIndex].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              onClick={() => handleArrowRight(slideIndex)}
              icon={faCircleArrowRight}
              className="arrow"
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Book now</button>
          <h1 className="hotelTitle">Grand hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton st 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent Location 500m from center
          </span>
          <span className="hotelPrinceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((val, index) => {
              return (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => onClickImage(index)}
                    src={val.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hoteltitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Locted in the real heaer of ahbccn, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or book now!</button>
            </div>
          </div>
        </div>
        <MailList />
      </div>
    </div>
  );
};

export default Hotel;
