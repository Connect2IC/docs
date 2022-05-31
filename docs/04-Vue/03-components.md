# Components

## ConnectDialog

A pre-styled dialog

```html
<script setup>
  import { ConnectDialog } from "@connect2ic/vue"
</script>

<template>
  <ConnectDialog :dark="false" />
</template>
```

| Prop | Type | Description | Default |
| -----|------|-------------|---------|
| dark | boolean | Dark mode on or off | false |
---------------------------------------

## ConnectButton

A pre-styled button for connecting & disconnecting

```html
<script setup>
  import { ConnectButton } from "@connect2ic/vue"
</script>

<template>
  <ConnectButton
    :dark={false}
    :onConnect="() => {/* connected */}"
    :onDisconnect="() => {/* disconnected */}"
  />
</template>
```

| Prop | Type | Description | Default |
| -----|------|-------------|---------|
| dark | boolean | Dark mode on or off | false |
| onConnect | function | Fires when the user has connected | undefined |
| onDisconnect | function | Fires when the user has disconnected | undefined |
---------------------------------------