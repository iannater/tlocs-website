import React from "react";
import { useRef, useState } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// const settings = {
//   // lazyLoad: true,
//   dots: true,
//   infinite: true,
//   autoplay: false,
//   speed: 2000,
//   // slidesToShow: 1,
//   slidesToScroll: 1,
//   centerPadding: "200px",
//   slidesToShow: 1,
//   // className: "center",
//   centerMode: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         // slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         // slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1,
//         centerMode: false,
//         centerPadding: "0px",
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         // slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: false,
//         centerPadding: "0px",
//         dots: true,
//       },
//     },
//   ],
// };

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className=" py-5  md:p-20">
      <div ref={sliderRef} className=" keen-slider bg-redBg md:rounded-md ">
        <div className="keen-slider__slide flex justify-center align-middle p-10">
          <Image
            src="/images/product.jpg"
            width="898px"
            height="598px"
            alt="product"
          />
        </div>
        <div className="keen-slider__slide flex justify-center align-middle p-10">
          <Image
            src="/images/product-two.jpg"
            width="898px"
            height="598px"
            alt="product"
          />
        </div>
        <div className="keen-slider__slide flex justify-center align-middle p-10 ">
          <Image
            src="/images/product-three.jpg"
            width="898px"
            height="598px"
            alt="product"
          />
        </div>
      </div>
      {/* {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )} */}
    </div>
  );
};

export default ImageSlider;
