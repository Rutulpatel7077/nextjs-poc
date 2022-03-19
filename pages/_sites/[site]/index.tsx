import type { NextPage } from "next";
const Home: NextPage = ({ site }: any) => {
  return (
    <div style={{ backgroundColor: site === "localhost" ? "blue" : "red" }}>
      <h1>Hello, {site}</h1>
      <h1>Hello</h1>
    </div>
  );
};

export async function getStaticPaths({ ...args }: any) {
  return {
    paths: [{ params: { site: "localhost" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params: { site } }: any) {
  return {
    props: {
      site,
    },
    revalidate: 5,
  };
}

export default Home;
