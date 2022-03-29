export const AssetsQuery = `
  query {
    assets {
      id
      name
      quantity
      type
      createdAt
    }
  }
`;

export const AddAssetMutation = `
  mutation AddAsset ($name: String!, $quantity: Int!, $type: String!) {
      addAsset(name: $name, quantity: $quantity, type: $type) {
          name
          quantity
          type
      } 
  }
`;

export const DeleteAssetMutation = `
  mutation DeleteAsset ($id: Int!) {
      deleteAsset(id: $id) {
          id
      } 
  }
`;
