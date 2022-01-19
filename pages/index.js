import Head from "next/head";
import Hotdog from "../components/hotdog";
import Menu from "../components/menu";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import NavbarHome from "../components/navbarHome";

export default function Home({ menus }) {
  return (
    <div>
      <NavbarHome />
      <div className="bg-yellowBg bg-no-repeat">
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
