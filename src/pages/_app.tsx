import "@/styles/globals.scss";
import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default appWithTranslation(App);
