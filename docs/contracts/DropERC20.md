---
slug: /DropERC20
title: DropERC20
hide_title: true
displayed_sidebar: contracts
---

# DropERC20

## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```

_See {IERC20Permit-DOMAIN_SEPARATOR}._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```

_See {IERC20-allowance}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| owner   | address | undefined   |
| spender | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```

_See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| spender | address | undefined   |
| amount  | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```

_See {IERC20-balanceOf}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### burn

```solidity
function burn(uint256 amount) external nonpayable
```

_Destroys `amount` tokens from the caller. See {ERC20-\_burn}._

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| amount | uint256 | undefined   |

### burnFrom

```solidity
function burnFrom(address account, uint256 amount) external nonpayable
```

_Destroys `amount` tokens from `account`, deducting from the caller&#39;s allowance. See {ERC20-\_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for `accounts`&#39;s tokens of at least `amount`._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |
| amount  | uint256 | undefined   |

### checkpoints

```solidity
function checkpoints(address account, uint32 pos) external view returns (struct ERC20VotesUpgradeable.Checkpoint)
```

_Get the `pos`-th checkpoint for `account`._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |
| pos     | uint32  | undefined   |

#### Returns

| Name | Type                             | Description |
| ---- | -------------------------------- | ----------- |
| \_0  | ERC20VotesUpgradeable.Checkpoint | undefined   |

### claim

```solidity
function claim(address _receiver, uint256 _quantity, address _currency, uint256 _pricePerToken, bytes32[] _proofs, uint256 _proofMaxQuantityPerTransaction) external payable
```

_Lets an account claim tokens._

#### Parameters

| Name                             | Type      | Description |
| -------------------------------- | --------- | ----------- |
| \_receiver                       | address   | undefined   |
| \_quantity                       | uint256   | undefined   |
| \_currency                       | address   | undefined   |
| \_pricePerToken                  | uint256   | undefined   |
| \_proofs                         | bytes32[] | undefined   |
| \_proofMaxQuantityPerTransaction | uint256   | undefined   |

### claimCondition

```solidity
function claimCondition() external view returns (uint256 currentStartId, uint256 count)
```

_The set of all claim conditions, at any given moment._

#### Returns

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| currentStartId | uint256 | undefined   |
| count          | uint256 | undefined   |

### contractType

```solidity
function contractType() external pure returns (bytes32)
```

_Returns the type of the contract._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### contractURI

```solidity
function contractURI() external view returns (string)
```

_Contract level metadata._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### contractVersion

```solidity
function contractVersion() external pure returns (uint8)
```

_Returns the version of the contract._

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | uint8 | undefined   |

### decimals

```solidity
function decimals() external view returns (uint8)
```

_Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for *display* purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}._

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | uint8 | undefined   |

### decreaseAllowance

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) external nonpayable returns (bool)
```

_Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`._

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| spender         | address | undefined   |
| subtractedValue | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### delegate

```solidity
function delegate(address delegatee) external nonpayable
```

_Delegate votes from the sender to `delegatee`._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| delegatee | address | undefined   |

### delegateBySig

```solidity
function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

_Delegates votes from signer to `delegatee`_

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| delegatee | address | undefined   |
| nonce     | uint256 | undefined   |
| expiry    | uint256 | undefined   |
| v         | uint8   | undefined   |
| r         | bytes32 | undefined   |
| s         | bytes32 | undefined   |

### delegates

```solidity
function delegates(address account) external view returns (address)
```

_Get the address `account` is currently delegating to._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### getActiveClaimConditionId

```solidity
function getActiveClaimConditionId() external view returns (uint256)
```

_At any given moment, returns the uid for the active claim condition._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getClaimConditionById

```solidity
function getClaimConditionById(uint256 _conditionId) external view returns (struct IDropClaimCondition.ClaimCondition condition)
```

_Returns the claim condition at the given uid._

#### Parameters

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| \_conditionId | uint256 | undefined   |

#### Returns

| Name      | Type                               | Description |
| --------- | ---------------------------------- | ----------- |
| condition | IDropClaimCondition.ClaimCondition | undefined   |

### getClaimTimestamp

```solidity
function getClaimTimestamp(uint256 _conditionId, address _claimer) external view returns (uint256 lastClaimTimestamp, uint256 nextValidClaimTimestamp)
```

_Returns the timestamp for when a claimer is eligible for claiming tokens again._

#### Parameters

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| \_conditionId | uint256 | undefined   |
| \_claimer     | address | undefined   |

#### Returns

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| lastClaimTimestamp      | uint256 | undefined   |
| nextValidClaimTimestamp | uint256 | undefined   |

### getPastTotalSupply

```solidity
function getPastTotalSupply(uint256 blockNumber) external view returns (uint256)
```

_Retrieve the `totalSupply` at the end of `blockNumber`. Note, this value is the sum of all balances. It is but NOT the sum of all the delegated votes! Requirements: - `blockNumber` must have been already mined_

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| blockNumber | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getPastVotes

```solidity
function getPastVotes(address account, uint256 blockNumber) external view returns (uint256)
```

_Retrieve the number of votes for `account` at the end of `blockNumber`. Requirements: - `blockNumber` must have been already mined_

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| account     | address | undefined   |
| blockNumber | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getPlatformFeeInfo

```solidity
function getPlatformFeeInfo() external view returns (address, uint16)
```

_Returns the platform fee recipient and bps._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint16  | undefined   |

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```

_Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {\_setRoleAdmin}._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| role | bytes32 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### getRoleMember

```solidity
function getRoleMember(bytes32 role, uint256 index) external view returns (address)
```

_Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296 for more information._

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| role  | bytes32 | undefined   |
| index | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### getRoleMemberCount

```solidity
function getRoleMemberCount(bytes32 role) external view returns (uint256)
```

_Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| role | bytes32 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getVotes

```solidity
function getVotes(address account) external view returns (uint256)
```

_Gets the current votes balance for `account`_

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```

_Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have `role`&#39;s admin role._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| role    | bytes32 | undefined   |
| account | address | undefined   |

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```

_Returns `true` if `account` has been granted `role`._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| role    | bytes32 | undefined   |
| account | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### increaseAllowance

```solidity
function increaseAllowance(address spender, uint256 addedValue) external nonpayable returns (bool)
```

_Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| spender    | address | undefined   |
| addedValue | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### initialize

```solidity
function initialize(address _defaultAdmin, string _name, string _symbol, string _contractURI, address[] _trustedForwarders, address _primarySaleRecipient, address _platformFeeRecipient, uint256 _platformFeeBps) external nonpayable
```

_Initiliazes the contract, like a constructor._

#### Parameters

| Name                   | Type      | Description |
| ---------------------- | --------- | ----------- |
| \_defaultAdmin         | address   | undefined   |
| \_name                 | string    | undefined   |
| \_symbol               | string    | undefined   |
| \_contractURI          | string    | undefined   |
| \_trustedForwarders    | address[] | undefined   |
| \_primarySaleRecipient | address   | undefined   |
| \_platformFeeRecipient | address   | undefined   |
| \_platformFeeBps       | uint256   | undefined   |

### isTrustedForwarder

```solidity
function isTrustedForwarder(address forwarder) external view returns (bool)
```

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| forwarder | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### maxTotalSupply

```solidity
function maxTotalSupply() external view returns (uint256)
```

_Global max total supply of tokens._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### maxWalletClaimCount

```solidity
function maxWalletClaimCount() external view returns (uint256)
```

_The max number of tokens a wallet can claim._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### multicall

```solidity
function multicall(bytes[] data) external nonpayable returns (bytes[] results)
```

_Receives and executes a batch of function calls on this contract._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| data | bytes[] | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| results | bytes[] | undefined   |

### name

```solidity
function name() external view returns (string)
```

_Returns the name of the token._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### nonces

```solidity
function nonces(address owner) external view returns (uint256)
```

_See {IERC20Permit-nonces}._

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| owner | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### numCheckpoints

```solidity
function numCheckpoints(address account) external view returns (uint32)
```

_Get number of checkpoints for `account`._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | uint32 | undefined   |

### permit

```solidity
function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

_See {IERC20Permit-permit}._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| owner    | address | undefined   |
| spender  | address | undefined   |
| value    | uint256 | undefined   |
| deadline | uint256 | undefined   |
| v        | uint8   | undefined   |
| r        | bytes32 | undefined   |
| s        | bytes32 | undefined   |

### primarySaleRecipient

```solidity
function primarySaleRecipient() external view returns (address)
```

_The address that receives all primary sales value._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```

_Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| role    | bytes32 | undefined   |
| account | address | undefined   |

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```

_Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have `role`&#39;s admin role._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| role    | bytes32 | undefined   |
| account | address | undefined   |

### setClaimConditions

```solidity
function setClaimConditions(IDropClaimCondition.ClaimCondition[] _phases, bool _resetClaimEligibility) external nonpayable
```

#### Parameters

| Name                    | Type                                 | Description |
| ----------------------- | ------------------------------------ | ----------- |
| \_phases                | IDropClaimCondition.ClaimCondition[] | undefined   |
| \_resetClaimEligibility | bool                                 | undefined   |

### setContractURI

```solidity
function setContractURI(string _uri) external nonpayable
```

_Lets a contract admin set the URI for contract-level metadata._

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| \_uri | string | undefined   |

### setMaxTotalSupply

```solidity
function setMaxTotalSupply(uint256 _maxTotalSupply) external nonpayable
```

_Lets a contract admin set the global maximum supply of tokens._

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| \_maxTotalSupply | uint256 | undefined   |

### setMaxWalletClaimCount

```solidity
function setMaxWalletClaimCount(uint256 _count) external nonpayable
```

_Lets a contract admin set a maximum number of tokens that can be claimed by any wallet._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| \_count | uint256 | undefined   |

### setPlatformFeeInfo

```solidity
function setPlatformFeeInfo(address _platformFeeRecipient, uint256 _platformFeeBps) external nonpayable
```

_Lets a contract admin update the platform fee recipient and bps_

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| \_platformFeeRecipient | address | undefined   |
| \_platformFeeBps       | uint256 | undefined   |

### setPrimarySaleRecipient

```solidity
function setPrimarySaleRecipient(address _saleRecipient) external nonpayable
```

_Lets a contract admin set the recipient for all primary sales._

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| \_saleRecipient | address | undefined   |

### setWalletClaimCount

```solidity
function setWalletClaimCount(address _claimer, uint256 _count) external nonpayable
```

_Lets a contract admin set a claim count for a wallet._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_claimer | address | undefined   |
| \_count   | uint256 | undefined   |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_See ERC 165_

#### Parameters

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| interfaceId | bytes4 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### symbol

```solidity
function symbol() external view returns (string)
```

_Returns the symbol of the token, usually a shorter version of the name._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

_See {IERC20-totalSupply}._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### transfer

```solidity
function transfer(address to, uint256 amount) external nonpayable returns (bool)
```

_See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`._

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| to     | address | undefined   |
| amount | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external nonpayable returns (bool)
```

_See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for `from`&#39;s tokens of at least `amount`._

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| from   | address | undefined   |
| to     | address | undefined   |
| amount | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### verifyClaim

```solidity
function verifyClaim(uint256 _conditionId, address _claimer, uint256 _quantity, address _currency, uint256 _pricePerToken, bool verifyMaxQuantityPerTransaction) external view
```

_Checks a request to claim tokens against the active claim condition&#39;s criteria._

#### Parameters

| Name                            | Type    | Description |
| ------------------------------- | ------- | ----------- |
| \_conditionId                   | uint256 | undefined   |
| \_claimer                       | address | undefined   |
| \_quantity                      | uint256 | undefined   |
| \_currency                      | address | undefined   |
| \_pricePerToken                 | uint256 | undefined   |
| verifyMaxQuantityPerTransaction | bool    | undefined   |

### verifyClaimMerkleProof

```solidity
function verifyClaimMerkleProof(uint256 _conditionId, address _claimer, uint256 _quantity, bytes32[] _proofs, uint256 _proofMaxQuantityPerTransaction) external view returns (bool validMerkleProof, uint256 merkleProofIndex)
```

_Checks whether a claimer meets the claim condition&#39;s allowlist criteria._

#### Parameters

| Name                             | Type      | Description |
| -------------------------------- | --------- | ----------- |
| \_conditionId                    | uint256   | undefined   |
| \_claimer                        | address   | undefined   |
| \_quantity                       | uint256   | undefined   |
| \_proofs                         | bytes32[] | undefined   |
| \_proofMaxQuantityPerTransaction | uint256   | undefined   |

#### Returns

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| validMerkleProof | bool    | undefined   |
| merkleProofIndex | uint256 | undefined   |

### walletClaimCount

```solidity
function walletClaimCount(address) external view returns (uint256)
```

_Mapping from address =&gt; number of tokens a wallet has claimed._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| owner `indexed`   | address | undefined   |
| spender `indexed` | address | undefined   |
| value             | uint256 | undefined   |

### ClaimConditionsUpdated

```solidity
event ClaimConditionsUpdated(IDropClaimCondition.ClaimCondition[] claimConditions)
```

#### Parameters

| Name            | Type                                 | Description |
| --------------- | ------------------------------------ | ----------- |
| claimConditions | IDropClaimCondition.ClaimCondition[] | undefined   |

### ContractURIUpdated

```solidity
event ContractURIUpdated(string prevURI, string newURI)
```

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| prevURI | string | undefined   |
| newURI  | string | undefined   |

### DelegateChanged

```solidity
event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)
```

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| delegator `indexed`    | address | undefined   |
| fromDelegate `indexed` | address | undefined   |
| toDelegate `indexed`   | address | undefined   |

### DelegateVotesChanged

```solidity
event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance)
```

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| delegate `indexed` | address | undefined   |
| previousBalance    | uint256 | undefined   |
| newBalance         | uint256 | undefined   |

### MaxTotalSupplyUpdated

```solidity
event MaxTotalSupplyUpdated(uint256 maxTotalSupply)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| maxTotalSupply | uint256 | undefined   |

### MaxWalletClaimCountUpdated

```solidity
event MaxWalletClaimCountUpdated(uint256 count)
```

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| count | uint256 | undefined   |

### PlatformFeeInfoUpdated

```solidity
event PlatformFeeInfoUpdated(address indexed platformFeeRecipient, uint256 platformFeeBps)
```

#### Parameters

| Name                           | Type    | Description |
| ------------------------------ | ------- | ----------- |
| platformFeeRecipient `indexed` | address | undefined   |
| platformFeeBps                 | uint256 | undefined   |

### PrimarySaleRecipientUpdated

```solidity
event PrimarySaleRecipientUpdated(address indexed recipient)
```

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| recipient `indexed` | address | undefined   |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```

#### Parameters

| Name                        | Type    | Description |
| --------------------------- | ------- | ----------- |
| role `indexed`              | bytes32 | undefined   |
| previousAdminRole `indexed` | bytes32 | undefined   |
| newAdminRole `indexed`      | bytes32 | undefined   |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| role `indexed`    | bytes32 | undefined   |
| account `indexed` | address | undefined   |
| sender `indexed`  | address | undefined   |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| role `indexed`    | bytes32 | undefined   |
| account `indexed` | address | undefined   |
| sender `indexed`  | address | undefined   |

### TokensClaimed

```solidity
event TokensClaimed(uint256 indexed claimConditionIndex, address indexed claimer, address indexed receiver, uint256 quantityClaimed)
```

#### Parameters

| Name                          | Type    | Description |
| ----------------------------- | ------- | ----------- |
| claimConditionIndex `indexed` | uint256 | undefined   |
| claimer `indexed`             | address | undefined   |
| receiver `indexed`            | address | undefined   |
| quantityClaimed               | uint256 | undefined   |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| from `indexed` | address | undefined   |
| to `indexed`   | address | undefined   |
| value          | uint256 | undefined   |

### WalletClaimCountUpdated

```solidity
event WalletClaimCountUpdated(address indexed wallet, uint256 count)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| wallet `indexed` | address | undefined   |
| count            | uint256 | undefined   |
