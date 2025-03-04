---
slug: /react.useeditiondrop
title: useEditionDrop() function
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useEditionDrop() function

Hook for getting an instance of an `EditionDrop` contract. This conract is used to interface with ERC1155 compliant NFTs that can be lazily minted.

## Example

```javascript
import { useEditionDrop } from '@thirdweb-dev/react'

export default function Component() {
  const editionDrop = await useEditionDrop("<YOUR-CONTRACT-ADDRESS>")

  // Now you can use the edition drop contract in the rest of the component

  // For example, this function will let the connected wallet claim a new NFT
  async function claim(tokenId, quantity) {
    await editionDrop.claim(tokenId, quantity)
  }

  ...
}
```

use `useContract()` instead

**Signature:**

```typescript
export declare function useEditionDrop(
  contractAddress?: string,
): import("@thirdweb-dev/sdk").EditionDrop | undefined;
```

## Parameters

| Parameter       | Type   | Description                                                                                  |
| --------------- | ------ | -------------------------------------------------------------------------------------------- |
| contractAddress | string | <i>(Optional)</i> the address of the Edition Drop contract, found in your thirdweb dashboard |

**Returns:**

import("@thirdweb-dev/sdk").EditionDrop \| undefined
