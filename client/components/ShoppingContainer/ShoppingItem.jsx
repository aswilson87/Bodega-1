import React from 'react';

import UpdateButton from './UpdateButton.jsx';
import DeleteButton from './DeleteButton.jsx';
import MinusListButton from './MinusListButton.jsx';
import AddListButton from './AddListButton.jsx';
import MinusBuyButton from './MinusBuyButton.jsx';
import AddBuyButton from './AddBuyButton.jsx';

//Individual shopping item component

//Pulls in newItem from container as prop(destructured as param)
const ShoppingItem = ({ newItem }) => {
  const {
    item_name,
    category,
    list_qty,
    buy_qty,
    note,
    unit,
    _id,
    pantry_par,
    pantry_qty,
  } = newItem;

  return (
    <>
      <li>
        <div
          className={`flex flex-row justify-between px-4 py-4 sm:px-6 shoppingItem ${item_name}`}
        >
          <div className='flex flex-column items-center justify-between w-1/4'>
            <p className='flex items-center text-sm text-gray-500'>
              {category}
            </p>
            <p className='text-lg font-bold text-blue-700 truncate'>
              {item_name}
            </p>

            <div className='ml-2 flex-shrink-0 flex'>
              <p className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                {pantry_par !== null ? `${pantry_qty}/${pantry_par}` : '-/-'}
              </p>
            </div>
          </div>

          <div className='flex flex-row justify-around w-2/5'>
            <div className='flex flex-column justify-center items-center mt-2 '>
              <div>
                <strong>Cart Qty</strong>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div
                  className={`text-3xl font-semibold text-blue-700  truncate cartQuantity${item_name}`}
                >
                  {buy_qty}
                </div>
                <div className='ml-3'>{unit}</div>
              </div>
              <div className={`flex flex-row addMinus${item_name}`}>
                <MinusBuyButton _id={_id} item_name={item_name} />
                <AddBuyButton _id={_id} item_name={item_name} />
              </div>
            </div>

            <div className='flex flex-column justify-center items-center mt-2 '>
              <div>
                <strong>Required Qty</strong>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div
                  className={`text-3xl font-semibold text-blue-700  truncate reqQuantity${item_name}`}
                >
                  {list_qty}
                </div>
                <div className='ml-3'>{unit}</div>
              </div>
              <div className='flex flex-row'>
                <MinusListButton _id={_id} item_name={item_name} />
                <AddListButton _id={_id} item_name={item_name} />
              </div>
            </div>
          </div>

          <div className=' flex flex-column justify-center items-center mt-2 pr-5'>
            <UpdateButton item={newItem} _id={_id} item_name={item_name} />
            <DeleteButton _id={_id} item_name={item_name} />
          </div>
        </div>
      </li>
    </>
  );
};

export default ShoppingItem;
