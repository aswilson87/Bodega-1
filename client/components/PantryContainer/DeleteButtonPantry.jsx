import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PANTRY_REMOVE } from '../../Queries/Queries';
import usePantryActions from '../../hooks/usePantryActions';

//Deletes single item from pantry
<<<<<<< HEAD
const DeleteButtonPantry = ({ _id }) => {
  const { refreshPantryItems } = usePantryActions();

  const [pantryRemove] = useMutation(PANTRY_REMOVE, {
    onCompleted: () => {
      refreshPantryItems();
    },
  });

  const onButtonClick = () => {
    pantryRemove({
      variables: { itemId: _id },
    });
  };
=======
const DeleteButtonPantry = ({ _id, item_name}) => {
  const dispatch = useDispatch();
>>>>>>> 2655e1d845f82fc1b2295aab0550be16c3c980ac

  return (
    <>
      <button
<<<<<<< HEAD
        onClick={onButtonClick}
        type='button'
        className=' items-center w-24 m-1 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-opacity-100 bg-yellow-500 hover:bg-red-00 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
=======
        onClick={() => dispatch(deletePantryItem(_id))}
        type="button"
        className={`items-center w-24 m-1 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-opacity-100 bg-yellow-500 hover:bg-red-00 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 deleteButton${item_name}`}
>>>>>>> 2655e1d845f82fc1b2295aab0550be16c3c980ac
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButtonPantry;
