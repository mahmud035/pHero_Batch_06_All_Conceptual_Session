import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Add = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: parseInt(e.target.price.value),
      image: e.target.image.value,
    };

    console.log(product);
    postProduct(product); // call the function

    //* NOTE: POST product data using fetch() method
    // fetch(`http://localhost:5000/products`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(product),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);

    //     if (data.success) {
    //       toast.success(data.message);
    //     } else {
    //       toast.error(data.message);
    //     }
    //   })
    //   .catch((error) => console.log(error.message));
  };

  //! NOTE: POST product data using "async...await" function.
  const postProduct = async (product) => {
    try {
      const res = await fetch(`http://localhost:5000/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        toast.success(data.message);
        navigate('/dashboard/products');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="py-32 px-10 min-h-screen w-full">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-5">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="flex items-center mb-10">
            <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
              Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="url"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
            />
          </div>

          <div className="text-right">
            <button className="py-3 px-8 bg-green-400 text-white font-bold rounded-lg">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
