import Planet from "@/components/Planet/Planet";
import styles from "./page.module.scss";
import Link from "next/link";

const Home = () => {
  return (
    <main className={styles.main}>
      <nav>
        <ul>
          <li>
            <Link href={"/planetDashboard"}>Planets</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Home;
