import React from "react";
import {
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";

import {Asset} from "../asset";

export function Home() {
    return (
        <VStack p={10} spacing={5}>
            <Heading size="4xl">Asset Register</Heading>
            <Asset />
        </VStack>
    );
}
