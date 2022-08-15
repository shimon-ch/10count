import { sectionTitleStyle, leadStyle, layerStyle } from "./index.css.js";
import Loading from "../components/loading/loading.jsx";
import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Container from "../components/container/container.jsx";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const animationStateChange = (isState = isAnimationEnd) => {
    setIsAnimationEnd(isState);
  };
  const layerControl = useAnimationControls();

  useEffect(() => {
    isAnimationEnd &&
      layerControl.start((i) => ({
        scaleX: 0,
        transition: {
          duration: 0.38,
          delay: i * 0.23,
          ease: [0.83, 0, 0.17, 1],
        },
      }));
  }, [isLoading, isAnimationEnd]);

  return (
    <div className={`Wrapper ${isLoading ? "Loaded" : "Loading"}`}>
      <Loading isLoading={isLoading} changeState={animationStateChange} />
      <Header />

      <main>
        <div className={"w-full mx-auto grid grid-cols-2 md:grid-cols-3"}>
          <div className={"relative"}>
            <motion.div
              className={`${layerStyle}`}
              custom={0}
              initial={{
                scaleX: 1,
                originX: "left",
              }}
              animate={layerControl}
              transition={{
                delay: 1,
              }}
            ></motion.div>
            <img src="/images/img_kakeru01.webp" alt="" />
          </div>
          <div className={"relative"}>
            <motion.div
              className={`${layerStyle}`}
              custom={1}
              initial={{
                scaleX: 1,
                originX: "left",
              }}
              animate={layerControl}
              transition={{
                delay: 1,
              }}
            ></motion.div>
            <img src="/images/img_shimon01.webp" alt="" />
          </div>
          <div className={"relative"}>
            <motion.div
              className={`${layerStyle}`}
              custom={2}
              initial={{
                scaleX: 1,
                originX: "left",
              }}
              animate={layerControl}
              transition={{
                delay: 1,
              }}
            ></motion.div>
            <img src="/images/img_tenugui01.webp" alt="" />
          </div>
          <div className={"block md:hidden flex justify-center items-center"}>
            <img
              src="/images/logo_10c.svg"
              alt=""
              className={"w-[35vw] h-[35vw]"}
            />
          </div>
        </div>

        <p className={`${leadStyle}`}>
          10COUNTは
          <br />
          アラサー男性3人組による
          <br />
          ゲーム実況グループです。
        </p>

        <section>
          <Container>
            <h2 className={`${sectionTitleStyle}`}>MEMBER</h2>

            <div className={"grid gap-16 md:gap-10 w-[85%] mx-auto"}>
              <div
                className={
                  "grid grid-cols-1 md:grid-cols-3 grid-rows-[max-content_1fr] gap-x-8"
                }
              >
                <h3
                  className={
                    "col-span-2 auto-rows-max text-2xl font-bold mt-4 md:mt-0"
                  }
                >
                  Shimon
                </h3>
                <p className={"col-span-2 auto-rows-fr mt-4"}>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div
                  className={
                    "col-start-1 row-start-1 row-end-3 w-[65%] md:w-auto mx-auto"
                  }
                >
                  <img src="/images/img_shimon01.webp" alt="" />
                </div>
              </div>

              <div
                className={
                  "grid grid-cols-1 md:grid-cols-3 grid-rows-[max-content_1fr] gap-x-8"
                }
              >
                <h3
                  className={
                    "col-span-2 auto-rows-max text-2xl font-bold mt-4 md:mt-0"
                  }
                >
                  翔
                </h3>
                <p className={"col-span-2 auto-rows-fr mt-4"}>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div
                  className={
                    "col-start-1 row-start-1 row-end-3 w-[65%] md:w-auto mx-auto"
                  }
                >
                  <img src="/images/img_kakeru01.webp" alt="" />
                </div>
              </div>

              <div
                className={
                  "grid grid-cols-1 md:grid-cols-3 grid-rows-[max-content_1fr] gap-x-8"
                }
              >
                <h3
                  className={
                    "col-span-2 auto-rows-max text-2xl font-bold mt-4 md:mt-0"
                  }
                >
                  テヌグイ
                </h3>
                <p className={"col-span-2 auto-rows-fr mt-4"}>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
                <div
                  className={
                    "col-start-1 row-start-1 row-end-3 w-[65%] md:w-auto mx-auto"
                  }
                >
                  <img src="/images/img_tenugui01.webp" alt="" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className={"mt-20 md:mt-24"}>
          <Container>
            <h2 className={`${sectionTitleStyle}`}>SCHEDULE</h2>

            <p className={"text-center py-24"}>COMING SOON...</p>
          </Container>
        </section>

        <section className={"mt-20 md:mt-24"}>
          <Container>
            <h2 className={`${sectionTitleStyle}`}>SUPPORT</h2>

            <p className={"text-center py-24"}>COMING SOON...</p>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
