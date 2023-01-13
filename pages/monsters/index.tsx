import { Monster } from "@/types/Monster";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Monsters.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { monsters: data },
  };
};

const externalImageLoader = ({ src }: { src: string }) =>
  `https://robohash.org/${src}?set=set2&size=180x180`;

interface PropType {
  monsters: Monster[];
}

const Monsters = ({ monsters }: PropType) => {
  return (
    <>
      <Head>
        <title>First Next App | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Monsters Page</h1>
      {monsters.map((monster) => (
        <Link href={`/monsters/${monster.id}`} key={monster.id}>
          <div className={styles.single}>
            <Image
              loader={externalImageLoader}
              height="100"
              width="100"
              src={monster.id.toString()}
              alt={"monster" + monster.id}
            />
            <h3>{monster.name}</h3>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Monsters;
