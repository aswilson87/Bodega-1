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
  const [shoppingRemove] = useMutation(SHOPPING_REMOVE);
  const deleteShoppingItem = (itemId) => {
    shoppingRemove({
      variables: { itemId: itemId },
      update(cache) {
        const existingShoppingItems = cache.readQuery({ query: GET_SHOPPING_ITEMS });
        const newShoppingItems = existingShoppingItems.getItems.filter((t) => (t._id !== itemId));
        cache.writeQuery({
          query: GET_SHOPPING_ITEMS,
          data: { getItems: newShoppingItems }
        });
      }
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
