import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>First Next App | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>About Page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          similique, odit perspiciatis ut a est laborum magnam deserunt
          laboriosam fugiat recusandae doloribus, possimus voluptatibus modi.
          Culpa ratione amet enim cum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, iure sed? Esse minima quo culpa, libero corrupti
          praesentium cumque molestiae quaerat illum iure asperiores enim
          laborum ea, dolores expedita voluptas.{" "}
        </p>
      </div>
    </>
  );
};

export default About;
