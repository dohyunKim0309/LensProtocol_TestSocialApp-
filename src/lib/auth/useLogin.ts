// 0. make sure the user has a connected wallet.
// 5. Store the access token inside local storage so we can use it.

import { useMutation } from "@tanstack/react-query";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import { useAuthenticateMutation } from "@/src/graphQL/generated";
import generateChallenge from "./generateChallenge";

export default function useLogin() {
  const address = useAddress();
  const sdk = useSDK();
 
  const {
    mutateAsync: sendSignedMessage
  } = useAuthenticateMutation();
  
  // I. async function declaration
  async function login() {
    if (!address) return;
    
    // 1. Generate challenge which comes from the Lens API
    const { challenge } = await generateChallenge(address);
    
    // 2. Sign the challenge with the user`s wallet
    const signature = await sdk?.wallet.sign(challenge.text)
    
    // 3. Send the signed challenge to the Lens API
    const { authenticate } = await sendSignedMessage({
      request: {
        address,
        signature,
      },
    });

    console.log("Authenticated: ", authenticate);

    // 4. Recieve a access token from the Lens API if we succeed

  }

  // II. Return the useMutation Hook wrapping the async function
  return useMutation(login);
}