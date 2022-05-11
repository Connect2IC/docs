# Provider

## Connect2ICProvider

The top-level provider

### Usage

```jsx
import { PlugWallet } from "@connect2ic/core/providers/plug-wallet"
import { AstroX } from "@connect2ic/core/providers/astrox"
import { Connect2ICProvider } from "@connect2ic/react"
import * as myCanister from "dfx-generated/my-canister"

function App() {
  return (
    <div>My App</div>
  )
}

// List of providers
const providers = [
  // Either import them from @connect2ic/core
  AstroX,
  PlugWallet,
  // or create your own (check the existing ones to see how they're implemented)
]

// Map of canister definitions as generated by dfx
// It requires the canisterId & idlFactory
const canisterDefinitions = {
  myCanister
}

// url string
const host = window.location.origin

// Wrap your whole App with the Provider
const AppRoot = () => (
  <Connect2ICProvider
    canisters={canisterDefinitions}
    providers={providers}
    host={host}
  >
    <App />
  </Connect2ICProvider>
)
```
