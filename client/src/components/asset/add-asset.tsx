import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Box,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import {AddAssetForm} from "./add-asset-form";

export function AddAsset(props: {onAdded: any}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const finalRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    return (
        <Box>
            <Button
                colorScheme={'green'}
                onClick={onOpen}
            >
                Add New Asset
            </Button>

            <Modal finalFocusRef={finalRef}
                   isOpen={isOpen}
                   onClose={onClose}>

                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Asset</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddAssetForm
                            onAdded={props.onAdded}
                            onCancel={onClose}/>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </Box>
    );
}
