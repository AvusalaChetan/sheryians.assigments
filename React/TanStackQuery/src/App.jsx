import {useQuery} from "@tanstack/react-query";
import {useGetProducts} from "./hooks/useGetProducts";
import ProductCard from "./components/ProductCart";

const App = () => {
  const {getProductsData} = useGetProducts();
  const {isPending, error, data} = useQuery({
    queryKey: ["products"],
    queryFn: getProductsData,
  });

  if (isPending) return <h1>loading..........</h1>;
  if (error) return <p>errorr {error.message}</p>;

  const products = data?.products || [];

  return (
    <div className="flex gap-5 flex-wrap">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default App;
