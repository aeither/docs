---
slug: /sdk.thirdwebsdk.fromprivatekey
title: ThirdwebSDK.fromPrivateKey() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## ThirdwebSDK.fromPrivateKey() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get an instance of the thirdweb SDK based on a private key.

## Example

```javascript
const sdk = ThirdwebSDK.fromPrivateKey("SecretPrivateKey", "mainnet");
```

**Signature:**

```typescript
static fromPrivateKey(privateKey: string, network: ChainOrRpc, options?: SDKOptions, storage?: IStorage): ThirdwebSDK;
```

## Parameters

| Parameter  | Type                              | Description                                                                                                     |
| ---------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| privateKey | string                            | the private key - \*\*DO NOT EXPOSE THIS TO THE PUBLIC\*\*                                                      |
| network    | ChainOrRpc                        | the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url |
| options    | [SDKOptions](./sdk.sdkoptions.md) | <i>(Optional)</i> the SDK options to use                                                                        |
| storage    | IStorage                          | <i>(Optional)</i> optional storage implementation to use                                                        |

**Returns:**

[ThirdwebSDK](./sdk.thirdwebsdk.md)

an instance of the SDK

## Remarks

This should only be used for backend services or scripts, with the private key stored in a secure way. \*\*NEVER\*\* expose your private key to the public in any way.
