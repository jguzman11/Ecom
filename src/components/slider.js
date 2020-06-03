import React from 'react';
import Slider from "react-slick";


class Carousel extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <img width="100%" src="images/bredToes1.jpeg"/>
            </div>
            <div>
            <img width="100%" src="images/bred11s.jpeg"/>
            </div>
            <div>
            <img width="100%" src="images/chicago1s.jpeg"/>
            </div>
          </Slider>
        </div>
      );
    }
  }

  export default Carousel;