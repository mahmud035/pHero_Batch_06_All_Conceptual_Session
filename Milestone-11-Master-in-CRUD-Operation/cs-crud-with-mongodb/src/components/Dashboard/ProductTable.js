import { Dropdown, Table } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-toastify';

const ProductTable = ({ product, refetch }) => {
  const { image, name, price, _id } = product;

  const handleUpdateProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      // body:
    });
  };

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          toast.success(data.message);
          refetch(); // refetching remaining products
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          <img src={image} className="w-32 " alt="" />
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{price}$</Table.Cell>
        <Table.Cell>
          <Dropdown label="Action" dismissOnClick={true} arrowIcon={false}>
            <Dropdown.Item onClick={() => handleUpdateProduct(product._id)}>
              Edit
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleDeleteProduct(product._id)}>
              Delete
            </Dropdown.Item>
          </Dropdown>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default ProductTable;
