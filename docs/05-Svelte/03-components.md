# Components

## ConnectDialog

A pre-styled dialog

```html
<script>
  import { ConnectDialog } from "@connect2ic/svelte"
</script>

<ConnectDialog dark={false} />
```

| Prop | Type | Description | Default |
| -----|------|-------------|---------|
| dark | boolean | Dark mode on or off | false |
---------------------------------------

## ConnectButton

A pre-styled button for connecting & disconnecting

```html
<script>
  import { ConnectButton } from "@connect2ic/svelte"
</script>

<ConnectButton
  dark={false}
  onConnect={() => {/* connected */}}
  onDisconnect={() => {/* disconnected */}}
/>
```

| Prop | Type | Description | Default |
| -----|------|-------------|---------|
| dark | boolean | Dark mode on or off | false |
| onConnect | function | Fires when the user has connected | undefined |
| onDisconnect | function | Fires when the user has disconnected | undefined |
---------------------------------------