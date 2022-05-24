import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { useColorMode } from "@docusaurus/theme-common"
import styles from "./index.module.css"
// import Prism from 'prismjs'
// import "prism-svelte"

// import { defaultProviders } from "@connect2ic/core/providers"
// import { Connect2ICProvider, ConnectDialog, useConnect, useDialog } from "@connect2ic/react"
// import style from "@connect2ic/core/style.css"
// import { inspect } from "@xstate/inspect"

// inspect({ iframe: false })

// console.log(style)

// import { useLatestVersion } from "@docusaurus/plugin-content-docs/client";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  // const latestVersion = useLatestVersion().path;
  // const { isConnected, disconnect } = useConnect()
  // const dialog = useDialog()
  const { colorMode } = useColorMode()
  const isDarkTheme = colorMode === "dark"
  return (
    <header style={{ padding: "6rem 0" }} className={clsx("hero", styles.heroBanner)}>
      <div className="container">

        <div className="row">
          <div style={{ margin: "auto" }}>
            <img style={{ width: "100px" }} src="img/connect2ic_logo_light.png" alt="" />
            <h1 style={{ fontSize: "4rem" }}>{siteConfig.title}</h1>
            <h3 style={{ fontSize: "2rem", fontWeight: 400 }}>{siteConfig.tagline}</h3>

            <pre style={{ margin: "2rem", whiteSpace: "break-spaces" }}>
            <code>npm install -S @connect2ic/core @connect2ic/react</code>
            </pre>

            <div className="row">
              <div style={{
                textAlign: "center",
                margin: "auto",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
              }}>
                <a href="https://astrox.me">
                  <img style={{ width: "40px", maxHeight: "40px" }}
                       src={`img/providers/${(isDarkTheme ? "astrox.png" : "astrox_light.svg")}`} alt="" />
                </a>
                <span style={{ marginRight: "1rem" }} />
                <a href="https://chrome.google.com/webstore/detail/infinity-wallet/jnldfbidonfeldmalbflbmlebbipcnle">
                  <img style={{ width: "40px", height: "40px" }} src="img/providers/infinity.png" alt="" />
                </a>
                <span style={{ marginRight: "1rem" }} />
                <a href="https://identity.ic0.app/">
                  <img style={{ width: "40px", height: "40px" }} src="img/providers/dfinity.svg" alt="" />
                </a>
                <span style={{ marginRight: "1rem" }} />
                <a href="https://nfid.one">
                  <img style={{ width: "40px", height: "40px" }} src="img/providers/nfid.png" alt="" />
                </a>
                <span style={{ marginRight: "1rem" }} />
                <a href="https://plugwallet.ooo/">
                  <img style={{ width: "40px", height: "40px" }} src="img/providers/plugLight.svg" alt="" />
                </a>
                <span style={{ marginRight: "1rem" }} />
                <a href="https://www.stoicwallet.com/">
                  <img style={{ width: "40px", height: "40px" }} src="img/providers/stoic.png" alt="" />
                </a>
              </div>
            </div>

            <div className={styles.buttons}>
              <Link
                className="button button--primary button--outline button--lg"
                to="/docs/docs/React/quick_start_react">
                Get Started
              </Link>
              <span style={{ marginRight: "1rem" }} />
              {/*<button onClick={() => isConnected ? disconnect() : dialog.open()}*/}
              {/*        className="button button--primary button--lg">*/}
              {/*  {isConnected ? "Disconnect" : "Open Demo"}*/}
              {/*</button>*/}

            </div>
          </div>
          {/*<div className={styles.buttons}>*/}
          {/*  <Link*/}
          {/*    className="button button--primary button--outline button--lg"*/}
          {/*    to="/docs/React/quick_start_react">*/}
          {/*    Get Started with Vue*/}
          {/*  </Link>*/}
          {/*</div>*/}
          {/*<div className={styles.buttons}>*/}
          {/*  <Link*/}
          {/*    className="button button--primary button--outline button--lg"*/}
          {/*    to="/docs/React/quick_start_react">*/}
          {/*    Get Started with Svelte*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>

      </div>

      {/*<div style={{ padding: "2rem 0" }} className="container">*/}
      {/*  /!*<div className="row">*!/*/}
      {/*  /!*  <div className="col" style={{ textAlign: "center" }}>*!/*/}
      {/*  /!*    <h2>*!/*/}
      {/*  /!*      Supported providers*!/*/}
      {/*  /!*    </h2>*!/*/}
      {/*  /!*  </div>*!/*/}
      {/*  /!*</div>*!/*/}
      {/*</div>*/}

    </header>
  )
}

function HomepageContent() {
  return (
    <>

      <div style={{ paddingTop: "3rem", paddingBottom: "9rem" }} className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2 style={{ fontSize: "2rem" }}>
              Support many wallets & identity providers
            </h2>
            <p style={{ fontSize: "1.5rem" }}>
              Plug, Internet Identity, AstroX, Stoic Wallet and more.
            </p>
            <h2 style={{ fontSize: "2rem" }}>
              Ready to use components
            </h2>
            <p style={{ fontSize: "1.5rem" }}>
              Connect Dialog & Button already pre-styled & ready to use
            </p>
            <h2 style={{ fontSize: "2rem" }}>
              Utility hooks
            </h2>
            <p style={{ fontSize: "1.5rem" }}>
              Such as <code>useCanister()</code> <code>useTransfer()</code> and more to take care of common needs
            </p>
          </div>
        </div>

        {/*<div style={{ padding: "5rem 0", textAlign: "center" }} className="row">*/}
        {/*  <div className="col col--8 col--offset-2">*/}
        {/*    <img style={{ height: 340, borderRadius: "10px" }} src="https://i.imgur.com/aGREctC.png" />*/}
        {/*  </div>*/}
        {/*</div>*/}

      </div>
    </>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    // <Connect2ICProvider providers={defaultProviders} canisters={{}}>
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/*  <HomepageFeatures />*/}
        <HomepageContent />
      </main>
      {/*<ConnectDialog />*/}
    </Layout>
    // </Connect2ICProvider>
  )
}
