import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Switch from '../Components/Switch';
import { useContractContext } from '../contexts/ContractContext';

interface NewPostProps { }

export interface NewPostFormValues {
    title: string;
    content: string;
    isPaidContent: boolean;
    price: number;
    image: string;
}

const NewPost: React.FC<NewPostProps> = (props) => {
    const [loading, setLoading] = React.useState(false);
    const { publishPost } = useContractContext()
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        content: Yup.string().required('Content is required'),
        isPaidContent: Yup.boolean(),
        price: Yup.number(),
        image: Yup.string().url('Image URL is invalid')
    });

    const handleSubmit = async (values: NewPostFormValues) => {
        try {
            setLoading(true);
            const data = await publishPost(values);
            console.log(data);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex flex-col items-center  py-10 lg:py-20 px-6 lg:px-0 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">New Post</h1>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                    isPaidContent: false,
                    price: 0,
                    image: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, handleSubmit }) => (
                    <div className="flex flex-col w-full lg:w-3/5">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <Input name='title' label='Post Title' />
                            <Input name='content' isTextArea label='Post Content' />
                            <Input name='image' label='Image URL' />
                            <Switch name='isPaidContent' label='Paid Content' labelPlacement='end' />
                            {values.isPaidContent &&
                                <Input name='price' type='number' label='Price' />}
                            <Button loading={loading} type='submit'>Submit</Button>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default NewPost;
