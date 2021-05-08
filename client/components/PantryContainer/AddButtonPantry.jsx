import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { PANTRY_QTY_UP } from '../../Queries/Queries';
import usePantryActions from '../../hooks/usePantryActions';

// Increments Required stock QTY
const AddButtonPantry = ({ _id, item_name }) => {
  const { refreshPantryItems } = usePantryActions();

  const [pantryQtyUp] = useMutation(PANTRY_QTY_UP, {
    onCompleted: () => {
      refreshPantryItems();
    },
  });

  const onButtonClick = () => {
    pantryQtyUp({
      variables: { itemId: _id },
    });
  };

  //Increments In Stock qty in pantry
  return (
    <div>
      <span className='relative z-0 inline-flex shadow-md rounded-md'>
        <button
          onClick={onButtonClick}
          id='add-btn'
          type='button'
          className={`-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-red-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 pantryStockAdd${item_name}`}
        >
          <span className='sr-only'>Next</span>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            ></path>
          </svg>
        </button>
      </span>
    </div>
  );
};

export default AddButtonPantry;
