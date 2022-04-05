import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Layout2 from "../components/layoutSd";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import Hours from "../components/Hours";

const info = [
  {
    title: "Phone",
    sub: "(512) 994-8982",
    icon: "/images/phone.png",
  },
  {
    title: "Email",
    sub: "520tlocs@gmail.com",
    icon: "/images/email.png",
  },
  {
    title: "Address",
    sub: "5000 Burnet Rd, Austin, Tx 78756",
    icon: "/images/address.png",
  },
];

const contact = ({ contactPg }) => {
  return (
    <div className="bg-yellowBg bg-cover bg-no-repeat min-h-screen">
      <div className="flex flex-col px-5 items-center">
        {/* Center box */}
        <div className="grid md:grid-cols-2 rounded-md max-w-6xl pt-20">
          <div className="bg-redBg flex flex-col rounded-md lg:rounded-l-md lg:rounded-r-none py-5 md:py-10 justify-center items-center mb-5 md:mb-0">
            <div className="text-[#F1E8DC] text-center pb-5 lg:pb-10">
              <h1 className=" text-4xl lg:text-6xl font-nmr">
                {contactPg.contactPages[0].title}
              </h1>
              <p className=" text-lg lg:text-2xl">
                {contactPg.contactPages[0].subTitle}
              </p>
            </div>
            <ContactForm />
          </div>
          {/* map */}
          <div className="flex">
            <Image src="/gmap.png" alt="google map" width={520} height={552} />
          </div>
        </div>
        {/* icons */}
        <div className="grid md:grid-cols-3 px-14 pt-10 md:pt-20 pb-5 md:pb-10 md:text-center max-w-6xl w-full">
          {contactPg.contactPages[0].icons.map((items, i) => (
            <div key={i} className="grid grid-cols-2 md:grid-cols-1">
              <div className="flex justify-center items-center md:block pb-3">
                <Image
                  src={items.icon.url}
                  alt="phone icon"
                  width={59}
                  height={59}
                />
              </div>

              <div>
                <h1 className="font-nmr font-bold text-lg lg:text-3xl text-nmr-black">
                  {items.title}
                </h1>
                <h2 className="text-nmr-red font-semibold">{items.subTitle}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Hours {...contactPg} />
    </div>
  );
};

export async function getStaticProps() {
  const { data: contactPg } = await client
    .query({
      query: gql`
        query {
          contactPages {
            subTitle
            title
            icons {
              subTitle
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
      return { contactPg: "There was an error!" };
    });
  // console.log(menus);
  return {
    props: {
      contactPg,
    },
  };
}

contact.Layout = Layout2;

export default contact;
