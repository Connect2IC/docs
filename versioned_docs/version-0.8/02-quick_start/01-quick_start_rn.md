# React
## Introduction
There are many new wallets coming out and adding support for these isn't always easy. Connect2IC allows you to get fully working for the most popular providers with only a few lines of code. Use the already styled `<Dialog />` component or feel free to create your own. Connect2IC gives you full control and additionally provides you with convenient helper utilities such as `useCanister()` or `useTransaction()`.

## Supported providers
- [AstroX ME](https://astrox.me)
- [Infinity Wallet](https://chrome.google.com/webstore/detail/infinity-wallet/jnldfbidonfeldmalbflbmlebbipcnle)
- [Internet Identity](https://identity.ic0.app/)
- [NFID](https://nfid.one)
- [Plug](https://plugwallet.ooo/)
- [Stoic Wallet](https://plugwallet.ooo/)

<img height="340" src="https://i.imgur.com/aGREctC.png" />



## Packages

| package               | description                                   |
| --------------------- | --------------------------------------------- |
| @connect2ic/core      | Core logic, providers, assets and utilities  |
| @connect2ic/react     | React components & hooks                      |
| @connect2ic/vue       | Vue components & composables                  |
| @connect2ic/svelte    | Svelte components & stores                    |
| @connect2ic/canisters | Some useful canisters to aid with development |

# React

## Quickstart

Following these steps will give you fully working auth with a `<Connect />` button and `<Dialog />` as shown in the screenshot.

**1.** Install the necessary packages.

```
npm i -S @connect2ic/core @connect2ic/react
```

**2.** Wrap your app with the Provider and optionally pass in canister definitions (as generated by dfx).

```jsx
import { defaultProviders } from "@connect2ic/core"
import { Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
import * as counter from "canisters/counter"

const AppRoot = () => (
  <Connect2ICProvider
    canisters={{
      counter,
    }}
    connectors={defaultProviders}
  >
    <App />
  </Connect2ICProvider>
)

```

**3.** Place the components.

```jsx
import { ConnectButton, ConnectDialog, Connect2ICProvider, useConnect } from "@connect2ic/react"

function App() {

  const { isConnected, principal, provider } = useConnect({
    onConnect: () => {
      // Signed in
    },
    onDisconnect: () => {
      // Signed out
    }
  })

  return (
    <>
      <ConnectButton />
      <ConnectDialog dark={false} />
    </>
  )
}

```

### useConnect
When you need more control:
```jsx
import { useConnect } from "connect2ic/react"

const { isConnected, principal, provider, connect, disconnect } = useConnect({
  onConnect: () => {
    // Signed in
  },
  onDisconnect: () => {
    // Signed out
  }
})

// true | false
isConnected

// string
principal

// connect
connect()

// disconnect
disconnect()

// "inactive" | "idle" | "connecting" | "connected" | "disconnecting"
status
```

### useCanister
Automatically switches between the anonymous & connected identity for the canister. Authenticated calls are now easy.
```jsx
import { useCanister } from "connect2ic/react"

const [counter, { loading, error }] = useCanister("counter")

// Make calls normally
counter.increment()
```

### useDialog
Programmatically control the prestyled `<Dialog />` or check its state.
```jsx
import { useDialog } from "connect2ic/react"

const [dialog] = useDialog()

dialog.open()

dialog.close()

dialog.isOpen
```

### useWallet
Wallet info and addresses.
```jsx
import { useWallet } from "connect2ic/react"

const [wallet] = useWallet()
```

### useBalance
Provides you with the users balances when a wallet is connected.
```jsx
import { useBalance } from "connect2ic/react"

const [assets] = useBalance()
```

### useProviders
Gives you direct access to the instantiated Connector (provider) when you need more control.
```jsx
import { useProviders } from "connect2ic/react"

const [providers] = useProviders()
```
