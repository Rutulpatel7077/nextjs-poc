import type { NextPage } from "next";
const Home: NextPage = ({ site }: any) => {
  return (
    <div style={{ backgroundColor: site === "localhost" ? "blue" : "red" }}>
      <h1>Hello, {site}</h1>
      <h1>Home Page</h1>
    </div>
  );
};

export async function getInitialProps({ params: { site } }: any) {
  console.log(site, "site");

  return {
    props: {
      site,
    },
  };
}

export default Home;
