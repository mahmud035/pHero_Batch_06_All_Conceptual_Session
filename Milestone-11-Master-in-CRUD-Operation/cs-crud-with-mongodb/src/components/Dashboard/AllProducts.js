import { useQuery } from '@tanstack/react-query';
import ProductTable from './ProductTable';
import { Table } from 'flowbite-react';

const AllProducts = () => {
  const url = `http://localhost:5000/products`;
  const {
    isLoading,
    isError,
    data: products = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // console.log(products);

  return (
    <div className="w-full">
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Product Name</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product, index) => (
            <ProductTable key={index} product={product} refetch={refetch} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllProducts;
