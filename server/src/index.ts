import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import {buildSchema} from "graphql";
import {Asset} from "./model/asset.js";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
type Query {
    assets: [Asset]
}

type Mutation {
    addAsset( name: String!, quantity: Int!, type: String! ): Asset
    deleteAsset( id: Int! ): Asset   
}  

type Asset {
    id: ID
    name: String!
    quantity: Int!
    type: String!
    createdAt: String!
    updatedAt: String!
}
`);
const root = {
    assets: async () => {
        const all = await Asset.findAll();
        return all;
    },

    addAsset: async (
            { name, quantity, type }
                : { name: string, quantity: number, type: string }) =>
    {
        const newAsset = { name, quantity, type };
        const created = await Asset.create({ ...newAsset} );
        return created;
    },

    deleteAsset: async ( { id } : { id: number } ) => {
        await Asset.destroy(
        { where : {id: id} }
        );

        return id;
    }

};

const app = express();
app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
console.debug('Running a GraphQL API server at http://localhost:4000/graphql');
app.listen(4000);
