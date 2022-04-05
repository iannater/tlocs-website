import React from "react";
import { useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

const ImageSlider = (props) => {
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
    <div className=" py-5  md:p-20 ">
      <div
        ref={sliderRef}
        className=" keen-slider bg-redBg md:rounded-md relative "
      >
        {props.aboutPages[0].sliders.map((img, i) => (
          <div
            key={i}
            className="keen-slider__slide flex justify-center align-middle py-10 px-14"
          >
            <Image
              src={`${img.sliderImg.url}`}
              width="898px"
              height="598px"
              alt="product"
            />
          </div>
        ))}
        {/* <div className="keen-slider__slide flex justify-center align-middle py-10 px-14">
          <Image
            src="/images/product-two.jpg"
            width="898px"
            height="598px"
            alt="product"
          />
        </div>
        <div className="keen-slider__slide flex justify-center align-middle py-10 px-14 ">
          <Image
            src="/images/product-three.jpg"
            width="898px"
            height="598px"
            alt="product"
          />
        </div> */}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`w-14 h-1w-14 absolute top-1/2 -t -translate-y-1/2 fill-nmr-lightBrown pointer-events-auto" ${
        props.left ? "left-1" : "right-1"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default ImageSlider;
