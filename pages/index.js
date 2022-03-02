import Hotdog from "../components/hotdog";
import Menu from "../components/menu";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import HomeHero from "../components/homeHero";
import Layout from "../components/layout";
import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import Accordion from "../components/accordion";

export default function Home({ menus }) {
  useEffect(() => {
    var tl = gsap.timeline();
    gsap.from("#element", {
      duration: 2,
      y: -500,
      opacity: 0,
      ease: "bounce",
    });
    tl.from("#heading", {
      duration: 1,
      y: -100,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);
  return (
    <div>
      <HomeHero />

      <div className="bg-yellowBg bg-no-repeat bg-cover min-h-screen">
        <Hotdog />
        {/* <Menu {...menus} /> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data: menus } = await client
    .query({
      query: gql`
        query {
          menus {
            nameOfSection
            id
            items {
              itemName
              price
              description
            }
          }
        }
      `,
    })
    .catch((err) => {
      return { data: "There was an error!" };
    });
  // console.log(menus);
  return {
    props: {
      menus,
    },
  };
}

Home.Layout = Layout;
