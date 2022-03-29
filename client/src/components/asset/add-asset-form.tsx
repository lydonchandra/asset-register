import {Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, Select, Spacer} from "@chakra-ui/react";
import React from "react";
import {useMutation} from "urql";
import {useForm} from "react-hook-form";
import {AddAssetMutation} from "./query-mutation";

export function AddAssetForm(props: { onAdded: any, onCancel: any }) {
    const [, addAssetMut] = useMutation(AddAssetMutation);

    const {
        register
        , handleSubmit
        , formState: { errors, isSubmitting }
        , reset
    } = useForm();

    const onSubmit = (data: any) => {
        const newAsset = { ...data };
        newAsset.quantity = parseInt(newAsset.quantity);
        addAssetMut(newAsset)
        .finally(() => {
                reset();
                props.onAdded();
            });
    }

    const onCancel = () => {
        reset();
        props.onCancel();
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
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>

                <FormLabel htmlFor={'Quantity'}>
                    Quantity
                </FormLabel>
                <Input
                    type={'number'}
                    {...register("quantity",
                        {
                            required: 'Quantity is required',
                            min: 1,
                        }) } />
                <FormErrorMessage>
                    {errors.quantity && errors.quantity.message}
                </FormErrorMessage>

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

                <br/>
                <FormErrorMessage>
                    {errors.type && errors.type.message}
                </FormErrorMessage>
            </FormControl>

            <HStack mt={4} justifyContent={'right'}>
                <Button
                        colorScheme={'green'}
                        isLoading={isSubmitting}
                        type={'submit'}
                        width={100}
                >
                    Save
                </Button>

                <Button
                    onClick={onCancel}
                >
                    Cancel
                </Button>

            </HStack>


        </form>
    );
}
