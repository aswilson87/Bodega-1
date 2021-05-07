import { useQuery, gql, useMutation } from '@apollo/react-hooks';
import { SHOPPING_REMOVE } from '../Queries/Queries';

const GET_SHOPPING_ITEMS = gql`
  query shoppingItems {
    getItems {
      item_name
      category
      list_qty
      buy_qty
      note
      unit
      _id
      pantry_par
      pantry_qty
    }
  }
`;

function useShoppingActions() {
  const { data, error, refetch } = useQuery(GET_SHOPPING_ITEMS);

  // Handle deletions
  const [shoppingRemove] = useMutation(SHOPPING_REMOVE, {
    onCompleted: () => {
      refetch();
    },
  });
  const deleteShoppingItem = (id) => {
    shoppingRemove({
      variables: { itemId: id },
    });
  }

  return {
    data,
    deleteShoppingItem,
    shoppingItems: data?.getItems || [],
    refreshShoppingItems: refetch,
  };
}

export default useShoppingActions;
