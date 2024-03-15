import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  console.log("body", request.body);
  // const productData = request.body
  try {
    if (request.method === "GET") {
      const products = await Product.find();
      return response.status(200).json(products);
    }

    if (request.method === "POST") {
      const productData = await Product.create(request.body);
      console.log("created", productData);
      return response.status(201).json({ message: "Product created" });
    }
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
