import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/LogoBanner.css';

// Import logos
import AirbnbLogo from '../assets/Airbnb.svg';
import GoogleLogo from '../assets/Google.svg';
import MicrosoftLogo from '../assets/Microsoft.svg';
import SpotifyLogo from '../assets/Spotify.svg';
import MailchimpLogo from '../assets/Mailchimp.svg';
import MashableLogo from '../assets/Mashable.svg';
import KlaviyoLogo from '../assets/Klaviyo.svg';


const CompanyLogoBanner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4.8,
    autoplay: true,
    speed: 3000,    
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2
        }
      }
    ]
  };
    return (
        <>
        <div className="slider-container py-4">
      <Slider {...settings}>
        <div className="m-auto flex justify-center items-center">
          <img className="h-6 md:h-8" src={AirbnbLogo} Alt="Logo"/>
        </div>
        <div className="m-auto flex justify-center items-center">
          <img className="h-6 md:h-8" src={GoogleLogo} Alt="Logo"/>
        </div>
        <div className="m-auto flex justify-center items-center">
          <img className="h-6 md:h-8" src={MicrosoftLogo} Alt="Logo"/>
        </div>
        <div className="m-auto flex justify-center items-center">
          <img className="h-6 md:h-8" src={SpotifyLogo} Alt="Logo"/>
        </div>
        <div className="m-auto flex justify-center items-center">
          <img className="h-6 md:h-8" src={MailchimpLogo} Alt="Logo"/> 
        </div>
        <div className="m-auto flex justify-center items-center">
          <img className="h-6 md:h-8" src={KlaviyoLogo} Alt="Logo"/> 
        </div>
      </Slider>
    </div>
        </>
      );
};

export default CompanyLogoBanner;