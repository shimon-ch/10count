import {
  sectionTitleStyle,
  leadStyle,
  layerStyle,
} from "../styles/pages/index.css.js";
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

        <Container>
          <p className={`${leadStyle}`}>
            10COUNTは
            <br />
            30代限界男性3人組による
            <br />
            ゲーム実況グループです。
          </p>

          <div
            className={
              "flex justify-center items-center gap-[16px] md:gap-[24px]"
            }
          >
            <a
              href={"https://www.youtube.com/channel/UCpAeYTv3UN48xW0LaavXnPw"}
              target={"_blank"}
              rel="noreferrer"
            >
              <svg
                className={"w-[45px] h-[45px] md:w-[65px] md:h-[65px]"}
                xmlns="http://www.w3.org/2000/svg"
                height="800"
                width="1200"
                viewBox="-35.20005 -41.33325 305.0671 247.9995"
              >
                <path
                  d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85"
                  fill="#fff"
                />
                <path
                  d="M93.333 117.558l61.334-34.89-61.334-34.893z"
                  fill="#1f1f1f"
                />
              </svg>
            </a>
            <a
              href={"https://twitter.com/count10x"}
              target={"_blank"}
              rel="noreferrer"
            >
              <svg
                className={"w-[42px] h-[34px] md:w-[56px] md:h-[46px]"}
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="500"
                height="500"
              >
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
              </svg>
            </a>
          </div>
        </Container>

        <section className={"mt-12 md:mt-16"}>
          <Container>
            <h2 className={`${sectionTitleStyle}`}>MEMBER</h2>

            <div className={"grid gap-16 md:gap-10 w-[85%] mx-auto"}>
              <div
                className={
                  "grid grid-cols-1 md:grid-cols-3 grid-rows-[max-content_1fr] md:gap-x-8"
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
                  常に睡眠不足の30代。加齢とともにいろんなことに興味が薄れていくことに危機感を覚えている悲しき男。ゲーム実況を通して彼は頑張れる自分を取り戻すことができるのだろうか…。
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
                  "grid grid-cols-1 md:grid-cols-3 grid-rows-[max-content_1fr] md:gap-x-8"
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
                  常に社畜な30代。仕事に追われる多忙な日々を過ごすもゲームの時間だけは必ず確保する訓練された社畜。ゲーム実況を通して不労所得を獲得し、平穏な日々を手に入れることができるだろうか…。ちなみにタバコをくわえているが単なるかっこつけである。
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
                  "grid grid-cols-1 md:grid-cols-3 grid-rows-[max-content_1fr] md:gap-x-8"
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
                  アンデットでアンラックな30代。自作PCが組めるほどの様々なガジェット知識を持つが、持ち前の運の悪さで高確率で初期不良を引き当てる心優しきゾンビ。九州出身の酒豪だが高い確率で記憶がない。今日も彼は東京のどこかで彷徨っている…。
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
