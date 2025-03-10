---
slug: /nft_drop_encoder
title: NFT Drop Encoder
hide_title: true
displayed_sidebar: go
---

## NFT Drop Encoder

The nft drop encoder class is used to get the unsigned transaction data for nft drop contract contract calls that can be signed at a later time after generation\.

It can be accessed from the SDK through the \`Encoder\` namespace of the nft drop contract:

You can access the NFTDrop interface from the SDK as follows:

```
import (
	"github.com/thirdweb-dev/go-sdk/thirdweb"
)

privateKey = "..."

sdk, err := thirdweb.NewThirdwebSDK("mumbai", &thirdweb.SDKOptions{
	PrivateKey: privateKey,
})

contract, err := sdk.GetNFTDrop("{{contract_address}}")

// Now the encoder can be accessed from the contract
contract.Encoder.ClaimTo(...)
```

```go
type NFTDropEncoder struct {
    *ContractEncoder
}
```

### func \(\*NFTDropEncoder\) [ApproveClaimTo](https://github.com/thirdweb-dev/go-sdk/blob/main/thirdweb/nft_drop_encoder.go#L87)

```go
func (encoder *NFTDropEncoder) ApproveClaimTo(signerAddress string, destinationAddress string, quantity int) (*types.Transaction, error)
```

Get the data for the transaction data required to approve the ERC20 token transfers necessary to claim NFTs from this contract\.

signerAddress: the address intended to sign the transaction

destinationAddress: the address of the wallet to claim the NFTs to

quantity: the number of NFTs to claim

returns: the transaction data of the token approval for the claim

#### Example

```
// Address of the wallet we expect to sign this message
signerAddress := "0x..."
// Address of the wallet we want to claim the NFTs to
destinationAddress := "{{wallet_address}}"
// Number of NFTs to claim
quantity = 1

tx, err := contract.Encoder.ApproveClaimTo(signerAddress, destinationAddress, quantity)

// Now you can get all the standard transaction data as needed
fmt.Println(tx.Data()) // Ex: get the data field or the nonce field (others are available)
fmt.Println(tx.Nonce())
```

### func \(\*NFTDropEncoder\) [ClaimTo](https://github.com/thirdweb-dev/go-sdk/blob/main/thirdweb/nft_drop_encoder.go#L125)

```go
func (encoder *NFTDropEncoder) ClaimTo(signerAddress string, destinationAddress string, quantity int) (*types.Transaction, error)
```

Get the data for the transaction required to claim NFTs from this contract\.

signerAddress: the address intended to sign the transaction

destinationAddress: the address of the wallet to claim the NFTs to

quantity: the number of NFTs to claim

returns: the transaction data of the claim

#### Example

```
// Address of the wallet we expect to sign this message
signerAddress := "0x..."
// Address of the wallet we want to claim the NFTs to
destinationAddress := "{{wallet_address}}"
// Number of NFTs to claim
quantity = 1

tx, err := contract.Encoder.ClaimTo(signerAddress, destinationAddress, quantity)

// Now you can get all the standard transaction data as needed
fmt.Println(tx.Data()) // Ex: get the data field or the nonce field (others are available)
fmt.Println(tx.Nonce())
```
