import styles from "../styles/Home.module.css";
import Loading from "../components/loading/loading.jsx";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(true);
    }, 1000);
  }, [isLoading]);

  return (
    <div className={`Wrapper ${isLoading ? "Loaded" : "Loading"}`}>
      <Loading isLoading={isLoading} />
      <Header />

      <main className={`${styles.Main}`}>
        <div className={"w-full mx-auto flex"}>
          <div>
            <img src="/images/img_kakeru01.webp" alt="" />
          </div>
          <div>
            <img src="/images/img_shimon01.webp" alt="" />
          </div>
          <div>
            <img src="/images/img_tenugui01.webp" alt="" />
          </div>
        </div>

        <p className={`${styles.Summary}`}>
          10COUNTは
          <br />
          アラサー男性3人組による
          <br />
          ゲーム実況グループです。
        </p>
      </main>

      <Footer />
    </div>
  );
}
