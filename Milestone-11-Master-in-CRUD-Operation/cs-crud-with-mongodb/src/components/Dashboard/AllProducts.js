import { useQuery } from '@tanstack/react-query';

const AllProducts = () => {
  const url = `http://localhost:5000/products`;
  const {
    isLoading,
    isError,
    data: products = [],
    error,
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

  console.log(products);

  return <div>All products here</div>;
};

export default AllProducts;
