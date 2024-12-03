import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../App.css";
import { Product } from "../../../models/Product";
import ProductService from "../../../services/ProductService";


export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        const data = await ProductService.getProduct(productId);
        if (data) {
          setProduct(data);
          setSelectedImage(data.foodImageUrls[0])
        }
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      Product Details
    </>
  );
}
