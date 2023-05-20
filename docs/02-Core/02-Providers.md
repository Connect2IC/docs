# Providers

## AstroX

```ts
import { AstroX } from "@connect2ic/core/providers/astrox"

const provider = new AstroX({
  // boolean
  dev: true,
  // whitelisted canisters
  whitelist: [],
  // The url for the providers frontend
  providerUrl: "https://zwbmf-zyaaa-aaaai-acjaq-cai.raw.ic0.app",
  // The canister id of the ledger canister
  ledgerCanisterId: "ryjl3-tyaaa-aaaaa-aaaba-cai",
  // The host of the ledger canister
  ledgerHost: "https://boundary.ic0.app/",
  // The host used for canisters
  host: window.location.origin,
})
```

## Infinity Wallet

```ts
import { InfinityWallet } from "@connect2ic/core/providers/infinity-wallet"

const provider = new InfinityWallet({
  // boolean
  dev: true,
  // whitelisted canisters
  whitelist: [],
  // The host used for canisters
  host: window.location.origin,
})
```

## Internet Identity

```ts
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"

const provider = new InternetIdentity({
  // boolean
  dev: true,
  // whitelisted canisters
  whitelist: [],
  // The url for the providers frontend
  providerUrl: "https://identity.ic0.app",
  // The host used for canisters
  host: window.location.origin,
})
```

## NFID

```ts
import { NFID } from "@connect2ic/core/providers/nfid"

const provider = new NFID({
  // boolean
  dev: true,
  // The app name
  appName: "my-ic-app",
  // whitelisted canisters
  whitelist: [],
  // The url for the providers frontend
  providerUrl: "https://nfid.one",
  // The host used for canisters
  host: window.location.origin,
})
```

## Plug Wallet

```ts
import { PlugWallet } from "@connect2ic/core/providers/plug-wallet"

const provider = new PlugWallet({
  // boolean
  dev: true,
  // whitelisted canisters
  whitelist: [],
  // The host used for canisters
  host: window.location.origin,
})
```

## Stoic Wallet

```ts
import { StoicWallet } from "@connect2ic/core/providers/stoic-wallet"

const provider = new StoicWallet({
  // boolean
  dev: true,
  // whitelisted canisters
  whitelist: [],
  // The url for the providers frontend
  providerUrl: "https://www.stoicwallet.com",
  // The host used for canisters
  host: window.location.origin,
})
```
