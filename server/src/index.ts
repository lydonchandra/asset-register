import express from 'express';
// import { graphqlHTTP } from 'express-graphql';
// import { buildSchema } from 'graphql';
import cors from 'cors';
// import {Todo} from "./model/todo.js";


const app = express();
app.use(cors());
// app.use(
//     '/graphql',
//     graphqlHTTP({
//         schema: schema,
//         rootValue: root,
//         graphiql: true,
//     })
// );
console.debug('Running a GraphQL API server at http://localhost:4000/graphql');
app.listen(4000);
