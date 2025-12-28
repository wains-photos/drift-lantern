# Drift Lantern (Built for Base)

Drift Lantern is a tiny, read-only utility created for quick checks inside the Base ecosystem. It is intentionally simple and focused on validating network setup, connecting a wallet, and reading basic onchain data from Base Sepolia.

---

## Why Drift Lantern Exists

This repository is meant for fast validation rather than full applications. It is useful when you want to:
- Confirm that wallet connectivity works on Base Sepolia  
- Verify the correct chainId is being used (84532)  
- Check ETH balances for wallets or known addresses  
- Open verified explorer links on Basescan  

Nothing in this project submits transactions or changes blockchain state.

---

## Project Files Overview

- **app/drift-lantern.ts**  
  A minimal script that connects to Coinbase Wallet and reads balance data from the Base Sepolia network.

- **contracts/**  
  Solidity contracts deployed on Base Sepolia for lightweight testnet validation:
  - `inheritance.sol` — allows a contract to inherit logic and state from another contract
  - `imports.sol` — enables code reuse and modular project structure

- **package.json**  
  Dependency list including Coinbase SDKs and Base repositories.

- **README.md**  
  Documentation describing purpose, usage, and validation details.

---

## Target Network

Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

---

## Runtime Behavior

Drift Lantern connects to Coinbase Wallet using the Coinbase Wallet SDK and communicates with Base Sepolia through a public RPC endpoint using viem. It retrieves wallet balances and produces direct explorer links for manual verification.

The script operates entirely in read-only mode.

---

## Libraries and Tooling

The project uses a small, focused set of tools:
- Coinbase Wallet SDK for wallet access  
- viem for RPC communication  
- Selected Base GitHub repositories for network alignment  

---

## License

MIT License  
Copyright (c) 2025 YOUR_NAME

---

## Maintainer

GitHub: https://github.com/wains-photos 

Email: wains-photos.0v@icloud.com

twitter: https://x.com/anasida762 

---

## Base Sepolia Testnet Validation

The following contracts were deployed on Base Sepolia to confirm network connectivity and tooling compatibility.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

Contract inheritance.sol address:  
0xc2c6Aa60424444aC24A8CeB1116D2fe3D58A4579 

Deployment and verification:
- https://sepolia.basescan.org/address/0xc2c6Aa60424444aC24A8CeB1116D2fe3D58A4579 
- https://sepolia.basescan.org/0xc2c6Aa60424444aC24A8CeB1116D2fe3D58A4579/0#code  

Contract imports.sol address:  
0xb7589dBE431cD783f3c7E4A9BaE569D7A4B721A0

Deployment and verification:
- https://sepolia.basescan.org/address/0xb7589dBE431cD783f3c7E4A9BaE569D7A4B721A0
- https://sepolia.basescan.org/0xb7589dBE431cD783f3c7E4A9BaE569D7A4B721A0/0#code  

These testnet deployments provide a simple environment for validating Base connectivity and read-only inspection workflows.
