import {useQuery} from "urql";
import {AssetsQuery} from "./query-mutation";
import {
    Button,
    Table,
    TableCaption,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {AddAsset} from "./add-asset";

export function ListAsset() {
    const [result] = useQuery({
        query: AssetsQuery,
    });

    const {data} = result;

    return (
        <>
            <AddAsset></AddAsset>

            <Table variant={'striped'}>
                <TableCaption></TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Quantity</Th>
                        <Th>Type</Th>
                        <Th>Added At</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.assets?.map((asset: any) => (
                        <Tr key={asset.id}>
                            <Td>{asset.name}</Td>
                            <Td>{asset.quantity}</Td>
                            <Td>{asset.type}</Td>
                            <Td>{asset.createdAt}</Td>
                            <Td>
                                <Button colorScheme={'red'}>Delete</Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    )
}
