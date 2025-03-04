---
slug: /react.useclaimnft
title: useClaimNFT() function
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useClaimNFT() function

> This feature is currently in beta and may change based on feedback that we receive.

Use this to claim a NFT on your [DropContract](./react.dropcontract.md)

## Example

```jsx
const Component = () => {
  const { contract } = useContract(<ContractAddress>);
  const {
    mutate: claimNft,
    isLoading,
    error,
  } = useClaimNFT(contract);

  if (error) {
    console.error("failed to claim nft", error);
  }

  return (
    <button
      disabled={isLoading}
      onClick={() => claimNft({ to: "0x...", quantity: 1 })}
    >
      Claim NFT!
    </button>
  );
};
```

**Signature:**

```typescript
export declare function useClaimNFT<TContract extends DropContract>(
  contract: RequiredParam<TContract>,
): import("@tanstack/react-query").UseMutationResult<
  | Omit<
      {
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
      },
      "data"
    >
  | ClaimNFTReturnType<TContract>,
  unknown,
  ClaimNFTParams<TContract>,
  unknown
>;
```

## Parameters

| Parameter | Type                                                       | Description                                              |
| --------- | ---------------------------------------------------------- | -------------------------------------------------------- |
| contract  | [RequiredParam](./react.requiredparam.md)&lt;TContract&gt; | an instance of a [DropContract](./react.dropcontract.md) |

**Returns:**

import("@tanstack/react-query").UseMutationResult&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt; \| [ClaimNFTReturnType](./react.claimnftreturntype.md)&lt;TContract&gt;, unknown, [ClaimNFTParams](./react.claimnftparams.md)&lt;TContract&gt;, unknown&gt;

a mutation object that can be used to claim a NFT to the wallet specificed in the params
