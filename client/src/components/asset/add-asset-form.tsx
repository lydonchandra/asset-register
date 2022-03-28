import {Button, FormControl, FormErrorMessage, FormLabel, Input, Select} from "@chakra-ui/react";
import React from "react";
import {useMutation} from "urql";

import {useForm} from "react-hook-form";
import {AddAssetMutation} from "./query-mutation";

export function AddAssetForm() {
    const [, addAssetMut] = useMutation(AddAssetMutation);

    const {
        register
        , handleSubmit
        , formState: { errors, isSubmitting }
        , resetField
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        const newAsset = { ...data };
        newAsset.quantity = parseInt(newAsset.quantity);
        addAssetMut(newAsset)
        .then((res) => {
                resetField('title');
                //reexecute();
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor={'Name'}>
                    Name
                </FormLabel>
                <Input
                    {...register("name",
                        {
                            required: 'Name is required',
                            min: 1,
                        }) } />

                <FormLabel htmlFor={'Quantity'}>
                    Quantity
                </FormLabel>
                <Input
                    {...register("quantity",
                        {
                            required: 'Quantity is required',
                            min: 1,
                        }) } />

                <FormLabel htmlFor={'Type'}>
                    Type
                </FormLabel>

                <Select
                    {...register("type", { required: 'Type is required'})}
                    placeholder="Select Type">
                    <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                    <option value="Other">Other</option>
                </Select>

                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme={'teal'} isLoading={isSubmitting} type={'submit'}>
                Submit
            </Button>
        </form>
    );
}
