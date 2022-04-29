# Connect2IC

Connect2IC 可让 DApp 对接 IC 的生态钱包或身份提供方变得更简单，并能向 canister 发起可认证的请求。



## 项目简介

现在出现了很多新的钱包应用，对于 DApp 来说逐一接入多个钱包是很耗时耗力的。而 Connect2IC 只需几行代码，就能让 DApp 同时支持多个当下最流行的钱包。你可以使用已经设计好的`<Dialog />`组件，也可以自定义该组件。Connect2IC 提供了定制化能力，还提供了其他更方便的辅助性方法，如`useCanister()`和`useTransaction()`。



## 支持的钱包列表

- [AstroX ME](https://astrox.me)
- [Infinity Wallet](https://chrome.google.com/webstore/detail/infinity-wallet/jnldfbidonfeldmalbflbmlebbipcnle)
- [Internet Identity](https://identity.ic0.app/)
- [NFID](https://nfid.one)
- [Plug](https://plugwallet.ooo/)
- [Stoic Wallet](https://plugwallet.ooo/)

<img height=340 src="https://i.imgur.com/aGREctC.png" />



## 包列表

| 包                        | 描述                             |
| ------------------------- | -------------------------------- |
| [@connect2ic/core]()      | 核心逻辑、连接器、资源和实用工具 |
| [@connect2ic/react]()     | React 组件和 hook                |
| [@connect2ic/vue]()       | Vue 组件和composables目录        |
| [@connect2ic/svelte]()    | Svelte 组件和存储                |
| [@connect2ic/canisters]() | 部分有助于开发的canister         |

# React

## 快速入门

按照以下步骤，通过登录面板里的钱包列表和`<Dialog />`，就可以获得完全有效的授权。

**1、**安装必需的软件包。

```
npm i -S @connect2ic/core @connect2ic/react
```

**2、**用 Provider 包装你的应用程序，并可自行决定是否传入 canister 设置（由dfx生成）。

```jsx
import { defaultConnectors } from "@connect2ic/core"
import { Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
import * as counter from "canisters/counter"

const AppRoot = () => (
  <Connect2ICProvider
    canisters={{
      counter,
    }}
    connectors={defaultConnectors}
  >
    <App />
  </Connect2ICProvider>
)


```

**3、**放置组件。

```jsx
import { ConnectButton, ConnectDialog, Connect2ICProvider, useConnect } from "@connect2ic/react"

function App() {

  const { isConnected, principal, provider } = useConnect({
    onConnect: () => {
      // 已登录
    },
    onDisconnect: () => {
      // 已登出
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

如果你需要控制更多内容的话，请参考以下代码：

```jsx
import { useConnect } from "connect2ic/react"

const { isConnected, principal, provider, connect, disconnect } = useConnect({
  onConnect: () => {
    // 已登录
  },
  onDisconnect: () => {
    // 已登出
  }
})

// true | false
isConnected

// string
principal

// 连接
connect()

// 断开连接
disconnect()

// "inactive" | "idle" | "connecting" | "connected" | "disconnecting"
status
```

### useCanister

提供了一种通用的方式，允许在用户登录前或登录后调用 canister。该方法可以很方便地发起已认证的请求。

```jsx
import { useCanister } from "connect2ic/react"

const [counter, { loading, error }] = useCanister("counter")

// Make calls normally
counter.increment()
```

### useDialog

在程序中控制预设的`<Dialog />`及检查状态。

```jsx
import { useDialog } from "connect2ic/react"

const [dialog] = useDialog()

dialog.open()

dialog.close()

dialog.isOpen
```

### useWallet

查询钱包信息和地址。

```jsx
import { useWallet } from "connect2ic/react"

const [wallet] = useWallet()
```

### useBalance

当连接钱包后，可查询钱包余额。

```jsx
import { useBalance } from "connect2ic/react"

const [assets] = useBalance()
```

### useProviders

当需要控制更多内容时，可以直接访问实例化的连接器（钱包提供方）。

```jsx
import { useProviders } from "connect2ic/react"

const [providers] = useProviders()
```

## Vue

*待更新...*

## Svelte

*待更新...*