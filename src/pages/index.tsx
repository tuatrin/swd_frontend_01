import Head from "next/head";
import HomeCard from "@/components/HomeCard.component";
import { Flex, Select } from "antd";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styles from "@/styles/pages/Home.module.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { locale, pathname } = router;
  const { t } = useTranslation("common");

  const onChangeLanguage = (value: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, {
      locale: value,
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
          <Flex justify="end" style={{ width: "100%" }}>
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
            flex={1}
            gap="middle"
            align="center"
            style={{ alignSelf: "stretch", padding: "0 25% 0 25%" }}
          >
            <Link style={{ width: "100%" }} href="/shape">
              <HomeCard
                title={t("homeCardTitle1")}
                description={t("homeCardDetail1")}
              />
            </Link>
            <Link style={{ width: "100%" }} href="/shape">
              <HomeCard
                title={t("homeCardTitle2")}
                description={t("homeCardDetail2")}
              />
            </Link>
            <Link style={{ width: "100%" }} href="/shape">
              <HomeCard
                title={t("homeCardTitle3")}
                description={t("homeCardDetail3")}
              />
            </Link>
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
