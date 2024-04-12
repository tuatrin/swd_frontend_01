import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Button, Col, Divider, Flex, Row, Select } from "antd";

import styles from "@/styles/pages/Shape.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function ShapePage() {
  const router = useRouter();
  const { locale, pathname } = router;
  const { t } = useTranslation("common");
  const x = (key: string) => (t(key) as string) || undefined;
  const [order, setOrder] = useState<string[]>([
    "square",
    "circle",
    "oval",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ]);
  const [swap, setSwap] = useState<boolean>(false);

  const onChangeLanguage = (value: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, {
      locale: value,
    });
  };

  const rotateRight = () => {
    setOrder((obj) => [obj[5], ...obj.slice(0, -1)]);
  };

  const rotateLeft = () => {
    setOrder((obj) => [...obj.slice(1), obj[0]]);
  };

  const swapOrder = () => {
    setSwap((obj) => !obj);
  };

  const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffleArray = () => {
    setOrder((obj) => {
      const shffled = shuffle(obj);
      return [...shffled];
    });
  };

  return (
    <>
      <Head>
        <title>Test 01</title>
        <meta name="description" content="Frontend Test 01" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Flex flex={1} gap="middle" align="center" vertical>
          <Flex justify="space-between" style={{ width: "100%" }}>
            <p style={{ color: "black", fontSize: "50px" }}>{x("shapePage")}</p>

            <Select
              defaultValue="EN"
              onChange={onChangeLanguage}
              options={[
                { value: "en", label: t("langEn") },
                { value: "th", label: t("langTh") },
              ]}
            />
          </Flex>
          <Flex
            gap="middle"
            align="center"
            style={{ alignSelf: "stretch", padding: "0 25% 0 25%" }}
          >
            <Button
              onClick={rotateLeft}
              style={{
                height: "fit-content",
                padding: "20px 0 20px 0",
                flexGrow: "1",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className={`${styles.triangleLeft}`} />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "-10px",
                  transform: "translate(-50%, 0%)",
                  backgroundColor: "rgba(110, 218, 120, 1)",
                  borderRadius: "10px",
                  padding: "0 10px 0 10px",
                  color: "white",
                }}
              >
                {x("moveShape")}
              </div>
            </Button>
            <Flex
              onClick={swapOrder}
              style={{
                backgroundColor: "white",
                flexGrow: "2",
                position: "relative",
                height: "fit-content",
                padding: "20px 0 20px 0",
              }}
            >
              <Button
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className={`${styles.triangleUp}`} />
              </Button>
              <Button
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className={`${styles.triangleDown}`} />
              </Button>
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: "-10px",
                  transform: "translate(-50%, 0%)",
                  backgroundColor: "rgba(110, 218, 120, 1)",
                  borderRadius: "10px",
                  padding: "0 10px 0 10px",
                  color: "white",
                }}
              >
                {x("movePosition")}
              </div>
            </Flex>
            <Button
              onClick={rotateRight}
              style={{
                flexGrow: "1",
                position: "relative",
                height: "fit-content",
                padding: "20px 0 20px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className={`${styles.triangleRight}`} />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, 0%)",
                  bottom: "-10px",
                  backgroundColor: "rgba(110, 218, 120, 1)",
                  borderRadius: "10px",
                  padding: "0 10px 0 10px",
                  color: "white",
                }}
              >
                {x("moveShape")}
              </div>
            </Button>
          </Flex>
          <Divider />
          <Flex
            gap="middle"
            align="center"
            vertical
            style={{ alignSelf: "stretch", padding: "0 25% 0 25%" }}
          >
            <Row
              gutter={[16, 16]}
              justify={swap ? "start" : "end"}
              style={{ width: "100%", height: "100%" }}
            >
              <Col span={7}>
                <Button
                  onClick={shuffleArray}
                  style={{
                    width: "100%",
                    height: "fit-content",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className={`${styles[order[0]]}`} />
                </Button>
              </Col>
              <Col span={7}>
                <Button
                  onClick={shuffleArray}
                  style={{
                    width: "100%",
                    height: "fit-content",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className={`${styles[order[1]]}`} />
                </Button>
              </Col>
              <Col span={7}>
                <Button
                  onClick={shuffleArray}
                  style={{
                    width: "100%",
                    height: "fit-content",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className={`${styles[order[2]]}`} />
                </Button>
              </Col>
            </Row>
            <Row
              gutter={[16, 16]}
              justify={swap ? "end" : "start"}
              style={{ width: "100%", height: "100%" }}
            >
              <Col span={7}>
                <Button
                  onClick={shuffleArray}
                  style={{
                    width: "100%",
                    height: "fit-content",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className={`${styles[order[3]]}`} />
                </Button>
              </Col>
              <Col span={7}>
                <Button
                  onClick={shuffleArray}
                  style={{
                    width: "100%",
                    height: "fit-content",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className={`${styles[order[4]]}`} />
                </Button>
              </Col>
              <Col span={7}>
                <Button
                  onClick={shuffleArray}
                  style={{
                    width: "100%",
                    height: "fit-content",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className={`${styles[order[5]]}`} />
                </Button>
              </Col>
            </Row>
          </Flex>
        </Flex>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
