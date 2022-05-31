# Composables

## useConnect

Gives you access to many things like the status of the connection, which provider is connected

### Usage

```html
<script setup>
  import { useConnect } from "@connect2ic/vue"

  const {
    principal,
    connect,
    disconnect,
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
  principal.value

  // connect
  connect(providerId)

  // disconnect
  disconnect()

  // Ref<boolean>
  isIdle.value

  // TODO
  isConnecting.value

  // Ref<boolean>
  isConnected.value

  // Ref<boolean>
  isDisconnecting.value

  // Provider
  activeProvider.value
</script>
```

## useCanister

Automatically switches between the anonymous & connected identity for the canister. Authenticated calls are now easy.

### Usage

```html
<script setup>
  import { useCanister } from "@connect2ic/vue"

  const [counter, { loading, error }] = useCanister("counter")

  // Make calls to the canister as you would normally
  counter.value.increment()

  // Ref<boolean>
  loading.value

  // TODO
  error.value

  // Always use the non-signed in identity to make canister calls
  const [counter] = useCanister("counter", { mode: "anonymous" })
</script>
```

## useDialog

Programmatically control the prestyled `<Dialog />` or check its state.

### Usage

```html

<script setup>
  import { useDialog } from "@connect2ic/vue"

  const { open, close, isOpen } = useDialog()

  // opens the dialog
  open()

  // closes the dialog
  close()

  // Ref<boolean>
  isOpen.value
</script>
```

## useWallet

Wallet info and addresses.

### Usage

```html
<script setup>
  import { useWallet } from "@connect2ic/vue"

  const [wallet] = useWallet()

  // Ref<wallet>
  wallet.value

  // string
  wallet.value.principal
</script>
```

## useBalance

Provides you with a list of the users assets when a wallet is connected.

### Usage

```html
<script setup>
  import { useBalance } from "@connect2ic/vue"

  const [assets] = useBalance()

  // Ref<assets> | undefined
  assets.value.map(asset => {
    // string
    asset.canisterId

    // string
    asset.name

    // number
    asset.amount
  })
</script>
```

## useProviders

Gives you direct access to the providers, when you need more control.

### Usage

```html
<script setup>
  import { useProviders } from "@connect2ic/vue"

  const [providers] = useProviders()

  // Ref<Array<Provider>>
  providers.value?.map(provider => {
    // string
    provider.id

    // string
    provider.name

    // <img /> src string
    provider.icon.light
    provider.icon.dark

    // Connector
    provider.connector
  })
</script>
```