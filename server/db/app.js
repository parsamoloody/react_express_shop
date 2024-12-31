import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { getJeans, getDresses, getSaleItems, getJackets, getAccessories } from '../model/model.js';
import path from 'path';
import fs, { access } from 'fs';
import cors from 'cors';
// Read the schema from the .gql file
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const schema = buildSchema(fs.readFileSync(path.join(__dirname, '../query.gql'), 'utf-8'));


// Define the root resolvers
const root = {
  jeans: getJeans,
  Dresses: getDresses,
  Sale: getSaleItems,
  jackets: getJackets,
  Accessories: getAccessories,
  GetAllData: () => ({
    jeans: getJeans(),
    dresses: getDresses(),
    sales: getSaleItems()
  }),
  sale: getSaleItems
};

const app = express();

// Enable CORS for all routes (allowing any origin)
app.use(cors());  // This enables CORS globally

// Set up the GraphQL endpoint at /data
app.use('/data', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/data`);
});
