# Components

## ConnectDialog

A pre-styled dialog

```jsx
import { ConnectDialog } from "@connect2ic/react"

function App() {
  return (
    <ConnectDialog dark={false} />
  )
}
```

| Prop | Type | Description | Default |
| -----|------|-------------|---------|
| dark | boolean | Dark mode on or off | false |
---------------------------------------

### Props

#### dark


## ConnectButton

A pre-styled button for connecting & disconnecting

```jsx
import { ConnectButton } from "@connect2ic/react"

function App() {
  return (
    <ConnectButton
      dark={false}
      onConnect={() => {/* connected */}}
      onDisconnect={() => {/* disconnected */}}
    />
  )
}
```

| Prop | Type | Description | Default |
| -----|------|-------------|---------|
| dark | boolean | Dark mode on or off | false |
| onConnect | function | Fires when the user has connected | undefined |
| onDisconnect | function | Fires when the user has disconnected | undefined |
---------------------------------------