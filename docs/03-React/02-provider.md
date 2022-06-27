# Provider

## Connect2ICProvider

The top-level provider

| Prop | Type | Description | Default |
| -----|------|-------------|---------|
| client | Client | The connect2ic client |  |
---------------------------------------

### Usage

```jsx
import { createClient } from "@connect2ic/core"
import { AstroX } from "@connect2ic/core/providers/astrox"
import { PlugWallet } from "@connect2ic/core/providers/plug-wallet"
import { Connect2ICProvider } from "@connect2ic/react"
import * as myCanister from "dfx-generated/myCanister"

function App() {
  return (
    <div>My App</div>
  )
}

const client = createClient({
  providers: [
    new AstroX(),
    new PlugWallet(),
  ],
  canisters: {
    myCanister
  }
})

const AppRoot = () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
```

