import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import Website from "../Website/Website";

export default function MyApp() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <CssBaseline />
      <Website />
    </>
  );
}
