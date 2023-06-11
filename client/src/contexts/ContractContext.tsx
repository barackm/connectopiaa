import { createContext, useContext } from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from "ethers";
import { NewPostFormValues } from "../pages/NewPost";
import { toast } from "react-toastify";

interface ContractContextProps {
    publishPost: (form: NewPostFormValues) => Promise<any>;
    connect: (connectOptions?: { chainId?: number | undefined; } | undefined) => Promise<any>;
    address: string | undefined;
}

const ContractContext = createContext<ContractContextProps>({} as ContractContextProps);

export const useContractContext = () => {
    const context = useContext(ContractContext);
    if (!context) {
        throw new Error(
            "useContractContext must be used within a ContractProvider"
        );
    }
    return context;
};


export const ContractProvider = ({ children }: any) => {
    const { contract } = useContract('');
    const { mutateAsync: createPost } = useContractWrite(contract, 'createPost');
    const address = useAddress();
    const connect = useMetamask();

    const publishPost = async (form: NewPostFormValues) => {
        try {
            const data = await createPost({
                args: [address, form.title, form.content, form.isPaidContent, ethers.utils.parseEther(form.price.toString()), form.image],
                overrides: undefined,
            });
            return data
        } catch (error: any) {
            toast.error(error.message);
        }
    }

    return (
        <ContractContext.Provider
            value={{
                address,
                connect,
                publishPost
            }}
        >
            {children}
        </ContractContext.Provider>
    );
}
