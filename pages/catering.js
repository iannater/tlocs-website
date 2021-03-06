import React from "react";
import Image from "next/image";
import Layout2 from "../components/layoutSd";
import Form from "../components/Form";
import { Link, animateScroll as scroll } from "react-scroll";
import Hours from "../components/Hours";

import { gql } from "@apollo/client";
import client from "../apolloClient";

const info = [
  {
    title: "Fresh Ingredients",
    sub: "We use only the best ingrdients, making sure nothing is ever frozen and served perfect to you.",
    icon: "/images/tomato.png",
  },
  {
    title: "World Class Chefs",
    sub: "Professional trained, and at the top of their class. Leave it to Miguel and Zulma to leave you without words.",
    icon: "/images/chef.png",
  },
  {
    title: "Attractive Selection",
    sub: "We have something for everyone and all ages. Let us know any restrictions and we will make sure to accomodate.",
    icon: "/images/selection.png",
  },
];

const Catering = ({ cateringtPg }) => {
  // console.log(cateringtPg.cateringtPg.cateringPages[0]);
  return (
    <div>
      <div className="pt-20 md:py-20 bg-yellowBg bg-cover bg-no-repeat">
        <div className="px-10 md:px-0 text-center md:text-left grid md:grid-cols-2 ">
          <div className="md:pl-40 ">
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:max-w-md">
              <h2 className="font-nmr font-bold text-2xl">
                {cateringtPg.cateringPages[0].topSubTitle}
              </h2>
              <h1 className="text-[#D9453F] text-5xl font-bold font-nmr pb-2 ">
                {cateringtPg.cateringPages[0].title}
              </h1>
              <p className="font-semibold pb-5 md:pb-10 max-w-xs md:max-w-md ">
                {" "}
                {cateringtPg.cateringPages[0].description}
              </p>
              <div>
                <Link activeClass="active" to="form" spy={true}>
                  <button className="bg-[#D9453F] text-[#F1E8DC] rounded-md px-5 py-2 text-lg font-bold font-nmr">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-auto hidden md:block">
            <Image
              src="/images/half-dog.png"
              layout="responsive"
              alt="half a hotdog"
              width={749}
              height={447}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 text-center py-20 px-10 md:px-40 gap-6 md:gap-4">
          {cateringtPg.cateringPages[0].cards.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="pb-4">
                <Image
                  src={item.icon.url}
                  alt="phone icon"
                  width={59}
                  height={59}
                />
              </div>
              <div className="max-w-xs">
                <h1 className="font-nmr text-3xl sm:text-2xl lg:text-3xl text-nmr-redTxt">
                  {item.title}
                </h1>
                <h2 className="font-semibold">{item.description}</h2>
              </div>
            </div>
          ))}
        </div>
        <Form />
        <Hours {...cateringtPg} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const { data: cateringtPg } = await client
    .query({
      query: gql`
        query {
          cateringPages {
            description
            title
            topSubtitle
            cards {
              description
              title
              icon {
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
      return { cateringtPg: "There was an error!" };
    });
  // console.log(menus);
  return {
    props: {
      cateringtPg,
    },
  };
}

Catering.Layout = Layout2;

export default Catering;
