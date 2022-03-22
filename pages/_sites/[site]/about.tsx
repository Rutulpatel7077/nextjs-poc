import type { NextPage } from "next";
const About: NextPage = ({ site }: any) => {
  return (
    <div >
      <h1>About {site} Page</h1>
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

export default About;
