---
slug: /sdk.contractevents.addeventlistener
title: ContractEvents.addEventListener() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## ContractEvents.addEventListener() method

Subscribe to contract events

## Example

```javascript
contract.events.addEventListener("TokensMinted", (event) => {
  console.log(event);
});
```

**Signature:**

```typescript
addEventListener(eventName: keyof TContract["filters"] | (string & {}), listener: (event: ContractEvent) => void): () => void;
```

## Parameters

| Parameter | Type                                                        | Description                                                  |
| --------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| eventName | keyof TContract\["filters"\] &#124; (string &amp; {})       | the event name as defined in the contract                    |
| listener  | (event: [ContractEvent](./sdk.contractevent.md)) =&gt; void | the callback function that will be called on every new event |

**Returns:**

() =&gt; void

a function to un-subscribe from the event

## Remarks

You can add a listener for any contract event to run a function when the event is emitted. For example, if you wanted to listen for a "TokensMinted" event, you could do the following:
