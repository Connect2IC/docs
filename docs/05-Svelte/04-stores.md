# Stores

## useConnect

Gives you access to many things like the status of the connection, which provider is connected

### Usage

```html

<script>
  import { useConnect } from "@connect2ic/svelte"

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
  $principal

  // connect
  connect(providerId)

  // disconnect
  disconnect()

  // "initializing" | "idle" | "connecting" | "connected" | "disconnecting"
  $status

  // boolean
  $isInitializing

  // boolean
  $isIdle

  // TODO
  $isConnecting

  // boolean
  $isConnected

  // boolean
  $isDisconnecting

  // Provider
  $activeProvider
</script>
```

## useCanister

Automatically switches between the anonymous & connected identity for the canister. Authenticated calls are now easy.

### Usage

```html

<script>
  import { useCanister } from "@connect2ic/svelte"

  const [counter, { loading, error }] = useCanister("counter")

  // Make calls to the canister as you would normally
  $counter.increment()

  // boolean
  $loading

  // TODO
  $error

  // Always use the non-signed in identity to make canister calls
  const [counter] = useCanister("counter", { mode: "anonymous" })
</script>
```

## useDialog

Programmatically control the prestyled `<Dialog />` or check its state.

### Usage

```html

<script>
  import { useDialog } from "@connect2ic/svelte"

  const { open, close, isOpen } = useDialog()

  // opens the dialog
  open()

  // closes the dialog
  close()

  // true | false
  $isOpen

</script>
```

## useWallet

Wallet info and addresses.

### Usage

```html

<script>
  import { useWallet } from "@connect2ic/svelte"

  const [wallet] = useWallet()

  // wallet | false
  $wallet

  // string
  $wallet.principal
</script>
```

## useBalance

Provides you with a list of the users assets when a wallet is connected.

### Usage

```html

<script>
  import { useBalance } from "@connect2ic/svelte"

  const [assets, { refetch, error }] = useBalance()

  $assets?.map(asset => {
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
  $error
</script>
```

## useProviders

Gives you direct access to the providers, when you need more control.

### Usage

```html

<script>
  import { useProviders } from "@connect2ic/svelte"

  const [providers] = useProviders()

  // Array<Provider>
  $providers?.map(provider => {
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
</script>
```