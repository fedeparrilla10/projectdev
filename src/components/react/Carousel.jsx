import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
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
          <img src="/projectdev/caricaturas/1b.png" className="object-cover" />
          <h2 class="text-center font-semibold text-md text-1xl border-t-1 w-[200px] mx-auto">
            REGINA JARQUE
          </h2>
        </div>
        <div className="slide">
          <img src="/projectdev/caricaturas/2b.png" className="object-cover" />
          <h2 class="text-center font-semibold text-md text-1xl border-t-1 w-[200px] mx-auto">
            RAFA BAZULI
          </h2>
        </div>
        <div className="slide">
          <img src="/projectdev/caricaturas/6b.png" className="object-cover" />
          <h2 class="text-center font-semibold text-md text-1xl border-t-1 w-[200px] mx-auto">
            BEGONA VELEZ
          </h2>
        </div>
        <div className="slide">
          <img src="/projectdev/caricaturas/4b.png" className="object-cover" />
          <h2 class="text-center font-semibold text-md text-1xl border-t-1 w-[200px] mx-auto">
            PAULA PENA
          </h2>
        </div>
      </Slider>
    </div>
  );
}
