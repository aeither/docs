---
slug: /sdk.erc1155.mintadditionalsupplyto
title: Erc1155.mintAdditionalSupplyTo() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Erc1155.mintAdditionalSupplyTo() method

Increase the supply of an existing NFT and mint it to a given wallet address

**Signature:**

```typescript
mintAdditionalSupplyTo(receiver: string, tokenId: BigNumberish, additionalSupply: BigNumberish): Promise<TransactionResultWithId<EditionMetadata>>;
```

## Parameters

| Parameter        | Type         | Description                                   |
| ---------------- | ------------ | --------------------------------------------- |
| receiver         | string       |                                               |
| tokenId          | BigNumberish | the token id of the NFT to increase supply of |
| additionalSupply | BigNumberish | the additional amount to mint                 |

**Returns:**

Promise&lt;[TransactionResultWithId](./sdk.transactionresultwithid.md)&lt;[EditionMetadata](./sdk.editionmetadata.md)&gt;&gt;
