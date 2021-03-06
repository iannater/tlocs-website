import Image from "next/image";
import React from "react";
import AboutHero from "../components/aboutHero";
import Layout from "../components/layout";
import MeetSection from "../components/meetSection";
import ImageSlider from "../components/imageSlider";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import Hours from "../components/Hours";

const about = ({ aboutPg }) => {
  return (
    <div className="bg-yellowBg bg-cover bg-no-repeat">
      <AboutHero {...aboutPg} />
      <div className=" pt-10 pb-5 md:pt-20 md:pb-0">
        <h1 className="text-center text-4xl font-bold text-nmr-red font-nmr">
          Photo Gallery
        </h1>
      </div>
      <ImageSlider {...aboutPg} />
      <div className="pb-10 w-full h-auto z-0 static ">
        <Image
          src="/images/about2.png"
          width={1440}
          height={1252}
          layout="responsive"
          priority
          alt="Image with a map"
        />
      </div>
      {/* </div> */}
      <MeetSection {...aboutPg} />
      <Hours {...aboutPg} />
    </div>
  );
};

export async function getStaticProps() {
  const { data: aboutPg } = await client
    .query({
      query: gql`
        query {
          aboutPages {
            chefs {
              description
              name
              chefImage {
                url
              }
            }
            meetSection
            title
            topTitle
            sliders {
              sliderImg {
                url
              }
            }
          }
          hours {
            day
            hours
          }
        }
      `,
    })
    .catch((err) => {
      return { aboutPg: "There was an error!" };
    });
  // console.log(menus);
  return {
    props: {
      aboutPg,
    },
  };
}

about.Layout = Layout;

export default about;
