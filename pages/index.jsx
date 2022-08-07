import Link from "next/link";
import styles from "../styles/Home.module.css";
import Loading from "../components/loading/loading.jsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(true);
    }, 1000);
  }, [isLoading]);

  return (
    <div className={`${isLoading ? "Loaded" : "Loading"}`}>
      <main className={`${styles.main}`}>
        <Loading isLoading={isLoading} />
        <h1>10COUNT IS COMING...</h1>
        <Link href={"/about/"}>ABOUT</Link>
      </main>
    </div>
  );
}
