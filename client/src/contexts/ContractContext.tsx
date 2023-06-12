import { createContext, useContext } from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'

import { BigNumber, ethers } from "ethers";
import { NewPostFormValues } from "../pages/NewPost";
const contractAddr = import.meta.env.VITE_CONTRACT_ADDRESS as string;

interface ContractContextProps {
    publishPost: (form: NewPostFormValues) => Promise<any>;
    connect: (connectOptions?: { chainId?: number | undefined; } | undefined) => Promise<any>;
    address: string | undefined;
    getPosts: () => Promise<any>;
    likePost: (id: number) => Promise<any>;
    payForPost: (id: number, price: string) => Promise<any>;
    hasAlreadyPaid: (id: number) => Promise<boolean>;
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
    const { contract } = useContract(contractAddr);
    const { mutateAsync: createPost } = useContractWrite(contract, 'createPost');
    const { mutateAsync: likePost } = useContractWrite(contract, 'likePost');
    const { mutateAsync: payForPost } = useContractWrite(contract, 'payForPost');

    const address = useAddress();
    const connect = useMetamask();

    const publishPost = async (form: NewPostFormValues) => {
        const data = await createPost({
            args: [address, form.title, form.content, form.isPaidContent, ethers.utils.parseEther(form.price.toString()), form.image],
            overrides: undefined,
        });
        return data
    }

    const getPosts = async () => {
        const data = await contract?.call('getPosts');
        return data || []
    }

    const likePostAsync = async (id: number) => {
        const data = await likePost({
            args: [id],
            overrides: undefined,
        });
        return data
    }

    const payForPostAsync = async (id: number, price: string) => {
        const data = await payForPost({
            args: [id],
            overrides: { value: ethers.utils.parseEther(price) },
        });
        return data
    }

    const hasAlreadyPaid = async (id: number) => {
        const data = await contract?.call('hasPaidForPost', [id, address]);
        return data
    }

    return (
        <ContractContext.Provider
            value={{
                address,
                connect,
                publishPost,
                getPosts,
                likePost: likePostAsync,
                payForPost: payForPostAsync,
                hasAlreadyPaid
            }}
        >
            {children}
        </ContractContext.Provider>
    );
}
