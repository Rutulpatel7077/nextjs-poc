import type { NextPage } from "next";
const About: NextPage = ({ site, time }: any) => {
  return (
    <div >
      <h1>About {site} Page</h1>
      <p>Time: {time}</p>
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
      time: Date.now(),
    },
    revalidate: 10,
  };
}

export default About;
