---
slug: /react.usetotalcirculatingsupply
title: useTotalCirculatingSupply() function
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useTotalCirculatingSupply() function

> This feature is currently in beta and may change based on feedback that we receive.

Use this to get a the total (minted) supply of your [NFTContract](./react.nftcontract.md).

## Example

```javascript
const { contract } = useContract(<ContractAddress>);
const { data: totalCirculatingSupply, isLoading, error } = useTotalCirculatingSupply(contract);
```

**Signature:**

```typescript
export declare function useTotalCirculatingSupply(
  contract: RequiredParam<NFTContract>,
  tokenId: BigNumberish,
): import("@tanstack/react-query").UseQueryResult<BigNumber, unknown>;
```

## Parameters

| Parameter | Type                                                                                   | Description                                            |
| --------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| contract  | [RequiredParam](./react.requiredparam.md)&lt;[NFTContract](./react.nftcontract.md)&gt; | an instance of a [NFTContract](./react.nftcontract.md) |
| tokenId   | BigNumberish                                                                           |                                                        |

**Returns:**

import("@tanstack/react-query").UseQueryResult&lt;BigNumber, unknown&gt;

a response object that incudes the total minted supply
