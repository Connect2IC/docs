# FAQ

## Can I create my own dialog?
Yes. It's recommended to check the `<ConnectDialog />` source code to see how it's implemented. It uses a few hooks under the hood 
such as `useProviders` and `useConnect` that the library ships with. 

## I want to add support for my own provider
See how the other providers are implemented and pass it in:

`<Connect2ICProvider providers={[myCustomProvider]} />`

## I dont want the canister calls to be authenticated
See the `{ mode: "anonymous" }` option for the `useCanister` hook