'use client';
import Image from "next/image";
import { useEffect, useState } from "react"

export default function Page({params}) {


  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})

  useEffect(() => {
      
      fetch('/api/products').then(res => res.json()).then( (data) => {
        setProducts(data)
        
        const product = data.find( (product) => product.id === parseInt(params.id) );
        setProduct(product)

      });

  }, [setProducts, params.id])

  return (
    <div>

      <h1>{product.title}</h1>
{/* 
      {product.media ? <Image src={'/'+ product.media.url} alt={product.media.alt} width={product.media.width} height={product.media.height} /> : null}  */}

    </div>
  )
}
