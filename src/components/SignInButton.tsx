import { 
  useAddress,
  useNetworkMismatch,
  useNetwork,
  ConnectWallet,
  ChainId,
} from "@thirdweb-dev/react";
import React from "react"; 

type Props = {};

export default function SignInButton({}: Props) {
  const address = useAddress(); // Detect the connected address
  const isOnWrongNetwork = useNetworkMismatch(); // Detect if the user is on the wrong network
  const [, switchNetwork] = useNetwork(); // Switch the network

  // 1. User needs to connect to the wallet
  if (!address) {
    return <ConnectWallet />;
  }
  
  // 2. User needs to switch network to polygon
  if (isOnWrongNetwork) {
    return (
      <button onClick={() => switchNetwork?.(ChainId.Polygon)}>
        Switch Network
      </button>
    );
  }

  // 3. Sign in with Lens
  
  // 4. Show the user their profile on Lens.
}