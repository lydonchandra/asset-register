import {useMutation, useQuery} from "urql";
import {AssetsQuery, DeleteAssetMutation} from "./query-mutation";
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
import {format, parse, parseISO} from 'date-fns'

function formatToAwst(dt: string): string {
    const parsed = parse(dt, 'yyyy-MM-dd HH:mm:ss.SSS XXX', new Date());
    const formatted = format(parsed, 'dd-MM-yyyy HH:mm:ss');
    return formatted
}

export function ListAsset() {
    const [result, reexecuteQuery] = useQuery({
        query: AssetsQuery,
    });
    const [, deleteAssetMut] = useMutation(DeleteAssetMutation);

    const {data} = result;

    return (
        <>
            <AddAsset
                onAdded={() => {
                    reexecuteQuery({ requestPolicy: 'network-only' }); }
            }/>

            <Table variant={'striped'}>
                <TableCaption/>
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
                            <Td>{formatToAwst(asset.createdAt)}</Td>
                            <Td>
                                <Button
                                    colorScheme={'red'}
                                    onClick={ async () => {
                                        await deleteAssetMut( {id: parseInt(asset.id)});
                                    }}
                                >
                                    Delete
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    )
}
