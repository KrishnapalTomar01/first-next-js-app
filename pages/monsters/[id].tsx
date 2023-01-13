import { Monster } from "@/types/Monster";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import styles from "../../styles/Monster.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await res.json()) as Monster[];

  const paths = data.map((monster) => {
    return { params: { id: monster.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const monsterId = context.params?.id;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + monsterId
  );
  const data = await res.json();

  return {
    props: { monster: data },
  };
};

const externalImageLoader = ({ src }: { src: string }) =>
  `https://robohash.org/${src}?set=set2&size=180x180`;

interface PropType {
  monster: Monster;
}

const MonsterDetail = ({ monster }: PropType) => {
  return (
    <>
      <Head>
        <title>First Next App | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.box}>
        <div className={styles.container}>
          <Image
            loader={externalImageLoader}
            alt="monster"
            height="100"
            width="100"
            src={monster.id.toString()}
          />
          <h2>{monster.name}</h2>
          <p>{monster.email}</p>
          <p>{monster.address.city}</p>
        </div>
      </div>
    </>
  );
};

export default MonsterDetail;
