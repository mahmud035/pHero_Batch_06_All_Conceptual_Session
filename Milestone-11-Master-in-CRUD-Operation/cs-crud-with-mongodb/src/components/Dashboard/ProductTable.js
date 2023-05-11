import { Table } from 'flowbite-react';
import React from 'react';

const ProductTable = ({ product, refetch }) => {
  const { image, name, price } = product;

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          <img src={image} className="w-32 " alt="" />
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{price}$</Table.Cell>
        <Table.Cell>
          <a
            href="/tables"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Edit
          </a>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default ProductTable;
