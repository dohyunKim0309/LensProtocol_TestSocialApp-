import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { 
    PublicationSortCriteria, 
    useExplorePublicationsQuery, 
} from "../graphQL/generated";
import useLogin from "../lib/auth/useLogin";

export default function Home() {
    // const { data, isLoading, error } = useExplorePublicationsQuery(
    //     {
    //         request: {
    //             sortCriteria: PublicationSortCriteria.TopMirrored,
    //         },
    //     }
    // );

    // console.log({
    //     data, 
    //     isLoading,
    //     error,
    // });

    const address = useAddress();
    const { mutate } = useLogin();

    if(!address) {
        return (<ConnectWallet/>)
    }

    return <button onClick={() => requestLogin()}>Login</button>;
}