import useSWR from "swr";

export default function ProductsList() {
  const { data: products, isLoading } = useSWR("api/products");

  if (!products) {
    return;
  }

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {` "name": ${product.name}, "description": ${product.description}, "price": ${product.price}, "currency": ${product.currency}, "category": ${product.category}`}
        </li>
      ))}
    </ul>
  );
}
