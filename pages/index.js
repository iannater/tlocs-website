import Hotdog from "../components/hotdog";
import Menu from "../components/menu";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import HomeHero from "../components/homeHero";
import Layout from "../components/layout";

export default function Home({ menus }) {
  return (
    <div>
      <div className="bg-yellowBg bg-no-repeat bg-cover min-h-screen">
        <HomeHero />
        <Hotdog />
        <Menu {...menus} />
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
