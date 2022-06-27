# Hooks

## useConnect

Gives you access to many things like the status of the connection, which provider is connected

### Usage

```jsx
import { useConnect } from "@connect2ic/react"

function App() {
  const {
    principal,
    connect,
    disconnect,
    status,
    isInitializing,
    isIdle,
    isConnecting,
    isConnected,
    isDisconnecting,
    activeProvider,
  } = useConnect({
    onConnect: () => {
      // Signed in
    },
    onDisconnect: () => {
      // Signed out
    }
  })

  // string
  principal

  // connect
  connect(providerId)

  // "initializing" | "idle" | "connecting" | "connected" | "disconnecting"
  status

  // disconnect
  disconnect()
  
  // boolean
  isInitializing

  // boolean
  isIdle

  // TODO
  isConnecting

  // boolean
  isConnected

  // boolean
  isDisconnecting
}
```

## useCanister

Automatically switches between the anonymous & connected identity for the canister. Authenticated calls are now easy.

### Usage

```jsx
import { useCanister } from "@connect2ic/react"

function App() {
  const [counter, { loading, error }] = useCanister("counter")

  // Make calls to the canister as you would normally
  counter.increment()

  // boolean
  loading

  // TODO
  error

  // Always use the non-signed in identity to make canister calls
  const [counter] = useCanister("counter", { mode: "anonymous" })
}
```

## useDialog

Programmatically control the prestyled `<Dialog />` or check its state.

### Usage

```jsx
import { useDialog } from "@connect2ic/react"

function App() {
  const { open, close, isOpen } = useDialog()

  // opens the dialog
  open()

  // closes the dialog
  close()

  // true | false
  isOpen
}
```

## useWallet

Wallet info and addresses.

### Usage

```jsx
import { useWallet } from "@connect2ic/react"

function App() {
  const [wallet] = useWallet()

  // wallet | false
  wallet

  // string
  wallet.principal
}
```

## useBalance

Provides you with a list of the users assets when a wallet is connected.

### Usage

```jsx
import { useBalance } from "@connect2ic/react"

function App() {
  const [assets, { refetch, error }] = useBalance()

  assets.map(asset => {
    // string
    asset.canisterId

    // string
    asset.name

    // number
    asset.amount
  })
  
  // refetch the balance
  refetch()
  
  // Error
  error
}
```

## useProviders

Gives you direct access to the providers, when you need more control.

### Usage

```jsx
import { useProviders } from "@connect2ic/react"

function App() {
  const [providers] = useProviders()

  // Array<Provider>
  providers.map(provider => {
    // Provider
    provider
    
    // string
    provider.meta.id

    // string
    provider.meta.name

    // <img /> src string
    provider.meta.icon.light
    provider.meta.icon.dark
  })
}
```