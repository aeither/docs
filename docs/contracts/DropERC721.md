---
slug: /DropERC721
title: DropERC721
hide_title: true
displayed_sidebar: contracts
---

# DropERC721

## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```

_See {IERC721-approve}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| to      | address | undefined   |
| tokenId | uint256 | undefined   |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```

_See {IERC721-balanceOf}._

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| owner | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### baseURIIndices

```solidity
function baseURIIndices(uint256) external view returns (uint256)
```

_Largest tokenId of each batch of tokens with the same baseURI_

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### burn

```solidity
function burn(uint256 tokenId) external nonpayable
```

_Burns `tokenId`. See {ERC721-\_burn}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| tokenId | uint256 | undefined   |

### claim

```solidity
function claim(address _receiver, uint256 _quantity, address _currency, uint256 _pricePerToken, bytes32[] _proofs, uint256 _proofMaxQuantityPerTransaction) external payable
```

_Lets an account claim NFTs._

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

### encryptDecrypt

```solidity
function encryptDecrypt(bytes data, bytes key) external pure returns (bytes result)
```

_See: https://ethereum.stackexchange.com/questions/69825/decrypt-message-on-chain_

#### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| data | bytes | undefined   |
| key  | bytes | undefined   |

#### Returns

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| result | bytes | undefined   |

### encryptedData

```solidity
function encryptedData(uint256) external view returns (bytes)
```

\*Mapping from &#39;Largest tokenId of a batch of &#39;delayed-reveal&#39; tokens with the same baseURI&#39; to encrypted base URI for the respective batch of tokens.\*\*

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | bytes | undefined   |

### getActiveClaimConditionId

```solidity
function getActiveClaimConditionId() external view returns (uint256)
```

_At any given moment, returns the uid for the active claim condition._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```

_See {IERC721-getApproved}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| tokenId | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### getBaseURICount

```solidity
function getBaseURICount() external view returns (uint256)
```

_Returns the amount of stored baseURIs_

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

_Returns the timestamp for when a claimer is eligible for claiming NFTs again._

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

### getDefaultRoyaltyInfo

```solidity
function getDefaultRoyaltyInfo() external view returns (address, uint16)
```

_Returns the default royalty recipient and bps._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint16  | undefined   |

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

### getRoyaltyInfoForToken

```solidity
function getRoyaltyInfoForToken(uint256 _tokenId) external view returns (address, uint16)
```

_Returns the royalty recipient and bps for a particular token Id._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_tokenId | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint16  | undefined   |

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

### initialize

```solidity
function initialize(address _defaultAdmin, string _name, string _symbol, string _contractURI, address[] _trustedForwarders, address _saleRecipient, address _royaltyRecipient, uint128 _royaltyBps, uint128 _platformFeeBps, address _platformFeeRecipient) external nonpayable
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
| \_saleRecipient        | address   | undefined   |
| \_royaltyRecipient     | address   | undefined   |
| \_royaltyBps           | uint128   | undefined   |
| \_platformFeeBps       | uint128   | undefined   |
| \_platformFeeRecipient | address   | undefined   |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```

_See {IERC721-isApprovedForAll}._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| owner    | address | undefined   |
| operator | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

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

### lazyMint

```solidity
function lazyMint(uint256 _amount, string _baseURIForTokens, bytes _data) external nonpayable
```

_Lets an account with `MINTER_ROLE` lazy mint &#39;n&#39; NFTs. The URIs for each token is the provided `_baseURIForTokens` + `{tokenId}`._

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| \_amount           | uint256 | undefined   |
| \_baseURIForTokens | string  | undefined   |
| \_data             | bytes   | undefined   |

### maxTotalSupply

```solidity
function maxTotalSupply() external view returns (uint256)
```

_Global max total supply of NFTs._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### maxWalletClaimCount

```solidity
function maxWalletClaimCount() external view returns (uint256)
```

_The max number of NFTs a wallet can claim._

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

_See {IERC721Metadata-name}._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### nextTokenIdToClaim

```solidity
function nextTokenIdToClaim() external view returns (uint256)
```

_The next token ID of the NFT that can be claimed._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### nextTokenIdToMint

```solidity
function nextTokenIdToMint() external view returns (uint256)
```

_The next token ID of the NFT to &quot;lazy mint&quot;._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

_Returns the address of the current owner._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```

_See {IERC721-ownerOf}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| tokenId | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

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

### reveal

```solidity
function reveal(uint256 index, bytes _key) external nonpayable returns (string revealedURI)
```

_Lets an account with `MINTER_ROLE` reveal the URI for a batch of &#39;delayed-reveal&#39; NFTs._

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| index | uint256 | undefined   |
| \_key | bytes   | undefined   |

#### Returns

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| revealedURI | string | undefined   |

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

### royaltyInfo

```solidity
function royaltyInfo(uint256 tokenId, uint256 salePrice) external view returns (address receiver, uint256 royaltyAmount)
```

_Returns the royalty recipient and amount, given a tokenId and sale price._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| tokenId   | uint256 | undefined   |
| salePrice | uint256 | undefined   |

#### Returns

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| receiver      | address | undefined   |
| royaltyAmount | uint256 | undefined   |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external nonpayable
```

_See {IERC721-safeTransferFrom}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| from    | address | undefined   |
| to      | address | undefined   |
| tokenId | uint256 | undefined   |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data) external nonpayable
```

_See {IERC721-safeTransferFrom}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| from    | address | undefined   |
| to      | address | undefined   |
| tokenId | uint256 | undefined   |
| \_data  | bytes   | undefined   |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```

_See {IERC721-setApprovalForAll}._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| operator | address | undefined   |
| approved | bool    | undefined   |

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

### setDefaultRoyaltyInfo

```solidity
function setDefaultRoyaltyInfo(address _royaltyRecipient, uint256 _royaltyBps) external nonpayable
```

_Lets a contract admin update the default royalty recipient and bps._

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| \_royaltyRecipient | address | undefined   |
| \_royaltyBps       | uint256 | undefined   |

### setMaxTotalSupply

```solidity
function setMaxTotalSupply(uint256 _maxTotalSupply) external nonpayable
```

_Lets a contract admin set the global maximum supply for collection&#39;s NFTs._

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| \_maxTotalSupply | uint256 | undefined   |

### setMaxWalletClaimCount

```solidity
function setMaxWalletClaimCount(uint256 _count) external nonpayable
```

_Lets a contract admin set a maximum number of NFTs that can be claimed by any wallet._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| \_count | uint256 | undefined   |

### setOwner

```solidity
function setOwner(address _newOwner) external nonpayable
```

_Lets a contract admin set a new owner for the contract. The new owner must be a contract admin._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_newOwner | address | undefined   |

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

### setRoyaltyInfoForToken

```solidity
function setRoyaltyInfoForToken(uint256 _tokenId, address _recipient, uint256 _bps) external nonpayable
```

_Lets a contract admin set the royalty recipient and bps for a particular token Id._

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| \_tokenId   | uint256 | undefined   |
| \_recipient | address | undefined   |
| \_bps       | uint256 | undefined   |

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

_See {IERC721Metadata-symbol}._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### tokenByIndex

```solidity
function tokenByIndex(uint256 index) external view returns (uint256)
```

_See {IERC721Enumerable-tokenByIndex}._

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| index | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### tokenOfOwnerByIndex

```solidity
function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)
```

_See {IERC721Enumerable-tokenOfOwnerByIndex}._

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| owner | address | undefined   |
| index | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```

_Returns the URI for a given tokenId._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_tokenId | uint256 | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

_See {IERC721Enumerable-totalSupply}._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```

_See {IERC721-transferFrom}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| from    | address | undefined   |
| to      | address | undefined   |
| tokenId | uint256 | undefined   |

### verifyClaim

```solidity
function verifyClaim(uint256 _conditionId, address _claimer, uint256 _quantity, address _currency, uint256 _pricePerToken, bool verifyMaxQuantityPerTransaction) external view
```

_Checks a request to claim NFTs against the active claim condition&#39;s criteria._

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

_Mapping from address =&gt; total number of NFTs a wallet has claimed._

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
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| owner `indexed`    | address | undefined   |
| approved `indexed` | address | undefined   |
| tokenId `indexed`  | uint256 | undefined   |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| owner `indexed`    | address | undefined   |
| operator `indexed` | address | undefined   |
| approved           | bool    | undefined   |

### ClaimConditionsUpdated

```solidity
event ClaimConditionsUpdated(IDropClaimCondition.ClaimCondition[] claimConditions)
```

#### Parameters

| Name            | Type                                 | Description |
| --------------- | ------------------------------------ | ----------- |
| claimConditions | IDropClaimCondition.ClaimCondition[] | undefined   |

### DefaultRoyalty

```solidity
event DefaultRoyalty(address indexed newRoyaltyRecipient, uint256 newRoyaltyBps)
```

#### Parameters

| Name                          | Type    | Description |
| ----------------------------- | ------- | ----------- |
| newRoyaltyRecipient `indexed` | address | undefined   |
| newRoyaltyBps                 | uint256 | undefined   |

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

### NFTRevealed

```solidity
event NFTRevealed(uint256 endTokenId, string revealedURI)
```

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| endTokenId  | uint256 | undefined   |
| revealedURI | string  | undefined   |

### OwnerUpdated

```solidity
event OwnerUpdated(address indexed prevOwner, address indexed newOwner)
```

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| prevOwner `indexed` | address | undefined   |
| newOwner `indexed`  | address | undefined   |

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

### RoyaltyForToken

```solidity
event RoyaltyForToken(uint256 indexed tokenId, address indexed royaltyRecipient, uint256 royaltyBps)
```

#### Parameters

| Name                       | Type    | Description |
| -------------------------- | ------- | ----------- |
| tokenId `indexed`          | uint256 | undefined   |
| royaltyRecipient `indexed` | address | undefined   |
| royaltyBps                 | uint256 | undefined   |

### TokensClaimed

```solidity
event TokensClaimed(uint256 indexed claimConditionIndex, address indexed claimer, address indexed receiver, uint256 startTokenId, uint256 quantityClaimed)
```

#### Parameters

| Name                          | Type    | Description |
| ----------------------------- | ------- | ----------- |
| claimConditionIndex `indexed` | uint256 | undefined   |
| claimer `indexed`             | address | undefined   |
| receiver `indexed`            | address | undefined   |
| startTokenId                  | uint256 | undefined   |
| quantityClaimed               | uint256 | undefined   |

### TokensLazyMinted

```solidity
event TokensLazyMinted(uint256 startTokenId, uint256 endTokenId, string baseURI, bytes encryptedBaseURI)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| startTokenId     | uint256 | undefined   |
| endTokenId       | uint256 | undefined   |
| baseURI          | string  | undefined   |
| encryptedBaseURI | bytes   | undefined   |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| from `indexed`    | address | undefined   |
| to `indexed`      | address | undefined   |
| tokenId `indexed` | uint256 | undefined   |

### WalletClaimCountUpdated

```solidity
event WalletClaimCountUpdated(address indexed wallet, uint256 count)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| wallet `indexed` | address | undefined   |
| count            | uint256 | undefined   |
