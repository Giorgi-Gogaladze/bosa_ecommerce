type Prods = {
id:number
name:string
rating:number
price: number
quantity:number
images: string[]
thumbnail:string
categories:string[]
description:string
}
const products:Prods[] = [
  {
    id: 1,
    name: "MacBook Pro 14",
    rating: 2.8,
    price: 2499.99,
    quantity: 15,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    categories: ["Electronics", "Laptops"],
    description: "The powerful MacBook Pro 14 with M2 chip, perfect for professionals.",
  },
  {
    id: 2,
    name: "Galaxy S23 Ultra",
    rating: 1.7,
    price: 1199.99,
    quantity: 30,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    categories: ["Electronics", "Smartphones"],
    description: "A top-tier Android smartphone with amazing camera and performance.",
  },
  {
    id: 3,
    name: "Sony Headphones",
    rating: 3.9,
    price: 399.99,
    quantity: 50,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    categories: ["Electronics", "Audio"],
    description: "Noise-canceling headphones with crystal-clear sound quality.",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    rating: 4.6,
    price: 1399.99,
    quantity: 20,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    categories: ["Electronics", "Laptops"],
    description: "A sleek, high-performance laptop for everyday use.",
  },
  {
    id: 5,
    name: "Marshall Major V",
    rating: 3.5,
    price: 129.99,
    quantity: 100,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    categories: ["Fashion", "Footwear"],
    description: "Stylish and comfortable headphones for all-day wear.",
  },
  {
    id: 6,
    name: "Canon EOS R6",
    rating: 2.8,
    price: 2499.99,
    quantity: 10,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    categories: ["Electronics", "Cameras"],
    description: "A high-performance mirrorless camera for professional photography.",
  },
  {
    id: 7,
    name: "Bose SoundLink",
    rating: 1.7,
    price: 199.99,
    quantity: 40,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    categories: ["Electronics", "Audio"],
    description: "Portable Bluetooth speaker with powerful sound and bass.",
  },
  {
    id: 8,
    name: "Apple Watch",
    rating: 4.9,
    price: 429.99,
    quantity: 25,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    ],
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    categories: ["Electronics", "Wearables"],
    description: "Stay connected and healthy with the Apple Watch Series 8.",
  },
];

export default products;
