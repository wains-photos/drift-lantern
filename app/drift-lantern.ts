// app/drift-lantern.ts
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { createPublicClient, http, formatEther, isAddress } from "viem";
import { baseSepolia } from "viem/chains";

const sdk = new CoinbaseWalletSDK({
  appName: "Drift Lantern (Built for Base)",
});

const client = createPublicClient({
  chain: baseSepolia,
  transport: http("https://sepolia.base.org"),
});

async function connectAndInspect(address?: string) {
  const provider = sdk.makeWeb3Provider("https://sepolia.base.org", 84532);
  const accounts = (await provider.request({ method: "eth_requestAccounts" })) as string[];
  const user = accounts[0];

  const balance = await client.getBalance({ address: user as `0x${string}` });

  console.log("Connected wallet");
  console.log("Address:", user);
  console.log("Balance:", formatEther(balance), "ETH");
  console.log("Explorer:", `https://sepolia.basescan.org/address/${user}`);

  if (address && isAddress(address)) {
    const targetBalance = await client.getBalance({ address: address as `0x${string}` });
    console.log("Inspected address:", address);
    console.log("Balance:", formatEther(targetBalance), "ETH");
  }
}

connectAndInspect();
