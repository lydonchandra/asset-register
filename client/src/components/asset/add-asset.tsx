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

    // @ts-ignore
    return (
        <Box right={0} >
            <Button
                colorScheme={'green'}
                onClick={onOpen}
            >
                Add Asset
            </Button>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddAssetForm />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Save
                        </Button>
                        <Button variant='ghost'>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}
