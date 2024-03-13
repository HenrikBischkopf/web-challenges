import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product } = useSWR(`/api/products/${id}`);
  console.log(product);

  if (!product) {
    return <>product not found</>;
  }

  return (
    <>
      {` "name": ${product.name}, "description": ${product.description}, "price": ${product.price}, "currency": ${product.currency}, "category": ${product.category}`}
    </>
  );
}
