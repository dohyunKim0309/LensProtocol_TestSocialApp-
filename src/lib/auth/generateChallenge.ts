import { fetcher } from "../../graphQL/auth-fetcher";
import {
  ChallengeQuery,
  ChallengeQueryVariables,
  ChallengeDocument,
} from "../../graphQL/generated"; 

export default async function generateChallenge(address: string) {
  fetcher<ChallengeQuery, ChallengeQueryVariables>(
    ChallengeDocument,
    {
      request: {
        address, 
      },
    }
  )();
}