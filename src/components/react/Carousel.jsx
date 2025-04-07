import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "0px",
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="/projectdev/caricaturas/1.jpg" className="object-cover" />
          <div className="overlay flex flex-col">
            <h3 className="overlay-text">PAULA PENA</h3>
            <p className="text-sm text-gray-50">
              Architecture Director at BPA BCN
            </p>
          </div>
        </div>
        <div className="slide">
          <img src="/projectdev/caricaturas/2.jpg" className="object-cover" />
          <div className="overlay flex flex-col">
            <h3 className="overlay-text">RAFA BUZALI</h3>
            <p className="text-sm text-gray-50">
              Architecture Director at BPA MIA
            </p>
          </div>
        </div>
        <div className="slide">
          <img src="/projectdev/caricaturas/3.jpg" className="object-cover" />
          <div className="overlay flex flex-col">
            <h3 className="overlay-text">BEGOÑA VELÉZ</h3>
            <p className="text-sm text-gray-50">
              Interior Design Director at J.S CUN
            </p>
          </div>
        </div>
        <div className="slide">
          <img src="/projectdev/caricaturas/4.jpg" className="object-cover" />
          <div className="overlay flex flex-col">
            <h3 className="overlay-text">REGINA JARQUE</h3>
            <p className="text-sm text-gray-50">Interior Design Principal</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
