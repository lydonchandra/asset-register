import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,

    Box,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import {AddAssetForm} from "./add-asset-form";

export function AddAsset() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const onSaved = () => {
    }
    return (
        <Box right={0} >
            <Button
                colorScheme={'green'}
                onClick={onOpen}
            >
                Add Asset
            </Button>

            <Modal finalFocusRef={finalRef}
                   isOpen={isOpen}
                   onClose={onClose}>

                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Asset</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddAssetForm onSaved={onSaved} onCancel={onClose}/>
                    </ModalBody>


                </ModalContent>
            </Modal>
        </Box>
    );
}
