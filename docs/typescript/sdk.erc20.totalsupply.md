---
slug: /sdk.erc20.totalsupply
title: Erc20.totalSupply() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Erc20.totalSupply() method

The total supply for this Token

## Example

```javascript
const balance = await contract.erc20.totalSupply();
```

**Signature:**

```typescript
totalSupply(): Promise<CurrencyValue>;
```

**Returns:**

Promise&lt;[CurrencyValue](./sdk.currencyvalue.md)&gt;

## Remarks

Get how much supply has been minted
