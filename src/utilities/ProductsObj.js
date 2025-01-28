const products = [
    {
      id: 1,
      name: "Apple MacBook Pro 14",
      rating: 4.8,
      price: 2499.99,
      quantity: 15,
      images: [
        "https://www.shutterstock.com/image-photo/cracow-poland-february-24-2020-260nw-1654752016.jpg",
        "https://www.shutterstock.com/image-illustration/macbook-pro-2023-m2-chip-600nw-2328203513.jpg",
        "https://static.toiimg.com/thumb/msid-70147390,width-400,resizemode-4/70147390.jpg",
      ],
      thumbnail: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111902_mbp14-silver2.png",
      categories: ["Electronics", "Laptops"],
      description: "The powerful MacBook Pro 14 with M2 chip, perfect for professionals.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      rating: 4.7,
      price: 1199.99,
      quantity: 30,
      images: [
        "https://m.media-amazon.com/images/I/71n3cdiCKWL._AC_SL1500_.jpg",
        "https://hooplo.co.uk/cdn/shop/files/F2BD274C-48C1-4E71-9D87-C1E628818BCC.png?v=1723758660",
        "/images/s23-side.jpgv",
      ],
      thumbnail: "https://m.media-amazon.com/images/I/51qtXkmbvYL._AC_UF894,1000_QL80_.jpg",
      categories: ["Electronics", "Smartphones"],
      description: "A top-tier Android smartphone with amazing camera and performance.",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      rating: 4.9,
      price: 399.99,
      quantity: 50,
      images: [
        "https://m.media-amazon.com/images/I/5163GtX782L._AC_UF350,350_QL80_.jpg",
        "https://d1ncau8tqf99kp.cloudfront.net/converted/122345_original_local_1200x1050_v3_converted.webp",
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/d5ba7d10-9111-450f-8d1b-be2b65d8c06c.__CR0,0,600,450_PT0_SX600_V1___.png"
      ],
      thumbnail: "https://alta.ge/images/thumbnails/900/650/detailed/297/1_WH-1000XM5_standard_silver_hsup-jn.png.jpg",
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
        "https://www.dell.com/wp-uploads/2022/06/XPS-13-2-in-1-on-desk-1280x800-1.jpg",
        "https://www.pcworld.com/wp-content/uploads/2023/10/Dell-XPS-13-Plus-9320-2023_Produktbild_Test.jpg?quality=50&strip=all",
        "https://b2c-contenthub.com/wp-content/uploads/2024/08/xps-13-snapdragon-2.jpg?quality=50&strip=all&w=1200"
      ],
      thumbnail: "https://imageio.forbes.com/specials-images/imageserve/668d6d039649f2dda5ca89ca/dell-xps-13-9345-with-snapdragon-x-elite-keyboard-open/960x0.jpg?format=jpg&width=960",
      categories: ["Electronics", "Laptops"],
      description: "A sleek, high-performance laptop for everyday use.",
    },
    {
      id: 5,
      name: "Marshall Major V",
      rating: 4.5,
      price: 129.99,
      quantity: 100,
      images: [
        "https://iplus.com.ge/images/detailed/8/61VyoXiIRwL.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaMC40BXNzeSQS3Ij_ktDPazy3Ei6NyZudg&s",
      ],
      thumbnail: "https://m.media-amazon.com/images/I/71mTfSKhhTL._AC_SL1500_.jpg",
      categories: ["Fashion", "Footwear"],
      description: "Stylish and comfortable headphones for all-day wear.",
    },
    {
      id: 6,
      name: "Canon EOS R6 Camera",
      rating: 4.8,
      price: 2499.99,
      quantity: 10,
      images: [
        "https://i1.adis.ws/i/canon/eos-r6-mark-ii_hotspots_5_7ff5ef5dd732431f88633698fcaf17a9?$hotspot-dt-jpg$",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiamAI54DoF-ysTCRl03viEFN7Aso82Yl50a_3GVIX59lrfirDlBomIHwPX5QxnUBof0&usqp=CAU",
      ],
      thumbnail: "https://2.img-dpreview.com/files/p/E~TC4x3S590x0~articles/1548544834/body/Canon-EOS-R6-lead-01.jpeg",
      categories: ["Electronics", "Cameras"],
      description: "A high-performance mirrorless camera for professional photography.",
    },
    {
      id: 7,
      name: "Bose SoundLink Mini II",
      rating: 4.7,
      price: 199.99,
      quantity: 40,
      images: [
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_mini_ii/product_silo_images/slmiise_black_EC_03.PNG/jcr:content/renditions/cq5dam.web.1280.1280.png",
        "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_mini_ii/images/slmiise_hotspot_2x1.psd/jcr:content/renditions/cq5dam.web.320.320.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5t8Rx1v_VittUazeZDK0PbF-NkdAf2vFS6A&s"
      ],
      thumbnail: "https://i5.walmartimages.com/asr/7fc1715c-1cb4-4d90-a7da-b609d7582b8a.4353a1697dad193d90968e7f5b8bfe89.jpeg",
      categories: ["Electronics", "Audio"],
      description: "Portable Bluetooth speaker with powerful sound and bass.",
    },
    {
      id: 8,
      name: "Apple Watch Series 8",
      rating: 4.9,
      price: 429.99,
      quantity: 25,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNA-aSZpGSjPAUWbbZna8-MF8j5E-Xt41zA&s",
        "https://i0.wp.com/myphones.ge/wp-content/uploads/2024/07/s-l960-2.webp?fit=557%2C960&ssl=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MN8K17ecS2zXcFl59rp75gF2QFVh88ocHBXLngii-YOTo6UWHMWcexHUe4qOPNXSNCo&usqp=CAU"
      ],
      thumbnail: "https://zoommer.ge/_next/image?url=https%3A%2F%2Fs3.zoommer.ge%2Fzoommer-images%2Fthumbs%2F0175077_apple-watch-series-8-gps-45mm-midnight-aluminum-case-with-midnight-sport-band-mnul3-ml_550.jpeg&w=640&q=100",
      categories: ["Electronics", "Wearables"],
      description: "Stay connected and healthy with the Apple Watch Series 8.",
    },
  ];
  
  export default products;
  