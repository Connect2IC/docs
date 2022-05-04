import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import IndexMdx from "./_index.mdx"

// import { useLatestVersion } from "@docusaurus/plugin-content-docs/client";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  // const latestVersion = useLatestVersion().path;
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img src="img/dfinity.svg" alt="" />
        <h1 style={{ fontSize: "4rem" }}>{siteConfig.title}</h1>
        <h3 style={{ fontSize: "2rem", fontWeight: 300 }}>{siteConfig.tagline}</h3>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--outline button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="theme-doc-markdown markdown"
               style={{ width: "700px", textAlign: "left", paddingTop: "100px" }}>
            <h2 style={{ fontSize: "2rem" }}>
              Features
            </h2>
            <ul>
              <li>
                Connect Dialog & Button already pre-styled & ready to use
              </li>
              <li>
                Utility hooks such as `useCanister()` `useTransfer()` and more...
              </li>
              <li>
                Wallet & Identity providers, various ones supported out of the box
              </li>
              <li>
                Assets for all providers
              </li>
            </ul>


            <img style={{ height: 340 }} src="https://i.imgur.com/aGREctC.png" />

            <div>
              Connect2IC is a frontend library & toolkit for the Internet Computer which makes it easy to support
              different
              identity providers & wallets.

              <h2>
                Supported providers
              </h2>

              <ul>
                <li>
                  <a href="https://astrox.me">
                    AstroX ME
                  </a>
                </li>
                <li>
                  <a href="https://chrome.google.com/webstore/detail/infinity-wallet/jnldfbidonfeldmalbflbmlebbipcnle">
                    Infinity Wallet
                  </a>
                </li>
                <li>
                  <a href="https://identity.ic0.app/">
                    Internet Identity
                  </a>
                </li>
                <li>
                  <a href="https://nfid.one">
                    NFID
                  </a>
                </li>
                <li>
                  <a href="https://plugwallet.ooo/">
                    Plug
                  </a>
                </li>
                <li>
                  <a href="https://plugwallet.ooo/">
                    Stoic Wallet
                  </a>
                </li>
              </ul>
              <h2>
                Packages
              </h2>

            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/*<main>*/}
      {/*  <HomepageFeatures />*/}
      {/*</main>*/}
    </Layout>
  )
}
