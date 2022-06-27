# Provider

## Connect2ICProvider

The top-level provider

### Usage

```html
<script setup>
  import { createClient } from "@connect2ic/core"
  import { PlugWallet } from "@connect2ic/core/providers/plug-wallet"
  import { AstroX } from "@connect2ic/core/providers/astrox"
  import { Connect2ICProvider } from "@connect2ic/vue"
  import * as myCanister from "canisters/myCanister"
  
  const client = createClient({
    providers: [
      new AstroX(),
      new PlugWallet(),
    ],
    canisters: {
      myCanister
    }
  })
</script>

<template>
  <!-- Wrap your whole App with the Provider -->
  <Connect2ICProvider :client="client">
    <App />
  </Connect2ICProvider>
</template>
```

