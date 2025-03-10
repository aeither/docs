---
slug: /GovernorVotesUpgradeable
title: GovernorVotesUpgradeable
hide_title: true
displayed_sidebar: contracts
---

# GovernorVotesUpgradeable

_Extension of {Governor} for voting weight extraction from an {ERC20Votes} token, or since v4.5 an {ERC721Votes} token. *Available since v4.3.*_

## Methods

### BALLOT_TYPEHASH

```solidity
function BALLOT_TYPEHASH() external view returns (bytes32)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### COUNTING_MODE

```solidity
function COUNTING_MODE() external pure returns (string)
```

module:voting

_A description of the possible `support` values for {castVote} and the way these votes are counted, meant to be consumed by UIs to show correct vote options and interpret the results. The string is a URL-encoded sequence of key-value pairs that each describe one aspect, for example `support=bravo&amp;quorum=for,abstain`. There are 2 standard keys: `support` and `quorum`. - `support=bravo` refers to the vote options 0 = Against, 1 = For, 2 = Abstain, as in `GovernorBravo`. - `quorum=bravo` means that only For votes are counted towards quorum. - `quorum=for,abstain` means that both For and Abstain votes are counted towards quorum. NOTE: The string can be decoded by the standard https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams JavaScript class._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### castVote

```solidity
function castVote(uint256 proposalId, uint8 support) external nonpayable returns (uint256)
```

_See {IGovernor-castVote}._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| proposalId | uint256 | undefined   |
| support    | uint8   | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### castVoteBySig

```solidity
function castVoteBySig(uint256 proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s) external nonpayable returns (uint256)
```

_See {IGovernor-castVoteBySig}._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| proposalId | uint256 | undefined   |
| support    | uint8   | undefined   |
| v          | uint8   | undefined   |
| r          | bytes32 | undefined   |
| s          | bytes32 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### castVoteWithReason

```solidity
function castVoteWithReason(uint256 proposalId, uint8 support, string reason) external nonpayable returns (uint256)
```

_See {IGovernor-castVoteWithReason}._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| proposalId | uint256 | undefined   |
| support    | uint8   | undefined   |
| reason     | string  | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### execute

```solidity
function execute(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) external payable returns (uint256)
```

_See {IGovernor-execute}._

#### Parameters

| Name            | Type      | Description |
| --------------- | --------- | ----------- |
| targets         | address[] | undefined   |
| values          | uint256[] | undefined   |
| calldatas       | bytes[]   | undefined   |
| descriptionHash | bytes32   | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getVotes

```solidity
function getVotes(address account, uint256 blockNumber) external view returns (uint256)
```

Read the voting weight from the token&#39;s built in snapshot mechanism (see {IGovernor-getVotes}).

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| account     | address | undefined   |
| blockNumber | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### hasVoted

```solidity
function hasVoted(uint256 proposalId, address account) external view returns (bool)
```

module:voting

_Returns weither `account` has cast a vote on `proposalId`._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| proposalId | uint256 | undefined   |
| account    | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### hashProposal

```solidity
function hashProposal(address[] targets, uint256[] values, bytes[] calldatas, bytes32 descriptionHash) external pure returns (uint256)
```

_See {IGovernor-hashProposal}. The proposal id is produced by hashing the RLC encoded `targets` array, the `values` array, the `calldatas` array and the descriptionHash (bytes32 which itself is the keccak256 hash of the description string). This proposal id can be produced from the proposal data which is part of the {ProposalCreated} event. It can even be computed in advance, before the proposal is submitted. Note that the chainId and the governor address are not part of the proposal id computation. Consequently, the same proposal (with same operation and same description) will have the same id if submitted on multiple governors accross multiple networks. This also means that in order to execute the same operation twice (on the same governor) the proposer will have to change the description in order to avoid proposal id conflicts._

#### Parameters

| Name            | Type      | Description |
| --------------- | --------- | ----------- |
| targets         | address[] | undefined   |
| values          | uint256[] | undefined   |
| calldatas       | bytes[]   | undefined   |
| descriptionHash | bytes32   | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### name

```solidity
function name() external view returns (string)
```

_See {IGovernor-name}._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### proposalDeadline

```solidity
function proposalDeadline(uint256 proposalId) external view returns (uint256)
```

_See {IGovernor-proposalDeadline}._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| proposalId | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### proposalSnapshot

```solidity
function proposalSnapshot(uint256 proposalId) external view returns (uint256)
```

_See {IGovernor-proposalSnapshot}._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| proposalId | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### proposalThreshold

```solidity
function proposalThreshold() external view returns (uint256)
```

_Part of the Governor Bravo&#39;s interface: *&quot;The number of votes required in order for a voter to become a proposer&quot;*._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### propose

```solidity
function propose(address[] targets, uint256[] values, bytes[] calldatas, string description) external nonpayable returns (uint256)
```

_See {IGovernor-propose}._

#### Parameters

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| targets     | address[] | undefined   |
| values      | uint256[] | undefined   |
| calldatas   | bytes[]   | undefined   |
| description | string    | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### quorum

```solidity
function quorum(uint256 blockNumber) external view returns (uint256)
```

module:user-config

_Minimum number of cast voted required for a proposal to be successful. Note: The `blockNumber` parameter corresponds to the snaphot used for counting vote. This allows to scale the quroum depending on values such as the totalSupply of a token at this block (see {ERC20Votes})._

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| blockNumber | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### relay

```solidity
function relay(address target, uint256 value, bytes data) external nonpayable
```

_Relays a transaction or function call to an arbitrary target. In cases where the governance executor is some contract other than the governor itself, like when using a timelock, this function can be invoked in a governance proposal to recover tokens or Ether that was sent to the governor contract by mistake. Note that if the executor is simply the governor itself, use of `relay` is redundant._

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| target | address | undefined   |
| value  | uint256 | undefined   |
| data   | bytes   | undefined   |

### state

```solidity
function state(uint256 proposalId) external view returns (enum IGovernorUpgradeable.ProposalState)
```

_See {IGovernor-state}._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| proposalId | uint256 | undefined   |

#### Returns

| Name | Type                                    | Description |
| ---- | --------------------------------------- | ----------- |
| \_0  | enum IGovernorUpgradeable.ProposalState | undefined   |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_See {IERC165-supportsInterface}._

#### Parameters

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| interfaceId | bytes4 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### token

```solidity
function token() external view returns (contract IVotesUpgradeable)
```

#### Returns

| Name | Type                       | Description |
| ---- | -------------------------- | ----------- |
| \_0  | contract IVotesUpgradeable | undefined   |

### version

```solidity
function version() external view returns (string)
```

_See {IGovernor-version}._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### votingDelay

```solidity
function votingDelay() external view returns (uint256)
```

module:user-config

_Delay, in number of block, between the proposal is created and the vote starts. This can be increassed to leave time for users to buy voting power, of delegate it, before the voting of a proposal starts._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### votingPeriod

```solidity
function votingPeriod() external view returns (uint256)
```

module:user-config

_Delay, in number of blocks, between the vote start and vote ends. NOTE: The {votingDelay} can delay the start of the vote. This must be considered when setting the voting duration compared to the voting delay._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

## Events

### ProposalCanceled

```solidity
event ProposalCanceled(uint256 proposalId)
```

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| proposalId | uint256 | undefined   |

### ProposalCreated

```solidity
event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 startBlock, uint256 endBlock, string description)
```

#### Parameters

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| proposalId  | uint256   | undefined   |
| proposer    | address   | undefined   |
| targets     | address[] | undefined   |
| values      | uint256[] | undefined   |
| signatures  | string[]  | undefined   |
| calldatas   | bytes[]   | undefined   |
| startBlock  | uint256   | undefined   |
| endBlock    | uint256   | undefined   |
| description | string    | undefined   |

### ProposalExecuted

```solidity
event ProposalExecuted(uint256 proposalId)
```

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| proposalId | uint256 | undefined   |

### VoteCast

```solidity
event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)
```

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| voter `indexed` | address | undefined   |
| proposalId      | uint256 | undefined   |
| support         | uint8   | undefined   |
| weight          | uint256 | undefined   |
| reason          | string  | undefined   |
