const pickles = [
  {
    name: "Amla pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 200,
        medium: 300,
        big: 400,
      },
    ],
    category: "veg",
    image: "https://raw.githubusercontent.com/bhargavsai259/webview/refs/heads/master/v/amla.jpg",  
    description: "Fresh Amla pickle",

  },
  {
    name: "Bitter gourd pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 150,
        medium: 250,
        big: 350,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/bitter.jpg?raw=true",  
    description: "Tangy Bitter gourd pickle",

  },
  {
    name: "Brinjal pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 180,
        medium: 280,
        big: 380,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/brinjal.jpg?raw=true",  
    description: "Spicy Brinjal pickle",
  },
  {
    name: "Cut Mango pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 190,
        medium: 290,
        big: 390,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/cut%20mango.jpg?raw=true",

    description: "Hot and spicy Cut Mango pickle",
  },
  {
    name: "Garlic pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 170,
        medium: 270,
        big: 370,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/garlic.jpg?raw=true",  
    description: "Flavorful Garlic pickle",
  },
  {
    name: "Ginger pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 190,
        medium: 290,
        big: 390,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/ginger.jpg?raw=true",  
    description: "Zesty Ginger pickle",

  },
  {
    name: "Gongura pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 180,
        medium: 280,
        big: 380,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/gongura.jpg?raw=true",  
    description: "Authentic Gongura pickle",
  },
  {
    name: "Maagai pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 200,
        medium: 300,
        big: 400,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/maagai.jpg?raw=true",  
    description: "Traditional Maagai pickle",
  },
  {
    name: "Red Chili pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 210,
        medium: 310,
        big: 410,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/red%20chilli.jpg?raw=true",  
    description: "Hot and spicy Red Chili pickle",
  },
  {
    name: "Tamarind pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 170,
        medium: 270,
        big: 370,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/tamarind.jpg?raw=true",  
    description: "Tangy Tamarind pickle",
  },
  {
    name: "Tomato pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 180,
        medium: 280,
        big: 380,
      },
    ],
    category: "veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/v/tomato.jpg?raw=true",  
    description: "Spicy Tomato pickle",
  },
  {
    name: "Gongura Boti Mutton Pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 300,
        medium: 400,
        big: 500,
      },
    ],
    category: "non-veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/nv/Gongura-Boti-Mutton-Pickle.jpg?raw=true",  
    description: "Authentic Gongura Boti Mutton Pickle",
  },
  {
    name: "Non-Veg Pickles Combo Pack",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 600,
        medium: 700,
        big: 800,
      },
    ],
    category: "non-veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/nv/Non_Veg_Pickles_Combo_Pack.jpg?raw=true",  
    description: "Assorted Non-Veg Pickles Combo Pack",

  },
  {
    name: "Boneless Chicken Pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 250,
        medium: 350,
        big: 450,
      },
    ],
    category: "non-veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/nv/boneless%20chicken.jpg?raw=true",  
    description: "Delicious Boneless Chicken Pickle",
  },
  {
    name: "Chicken Avakaya Pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 280,
        medium: 380,
        big: 480,
      },
    ],
    category: "non-veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/nv/chicken%20avakaya.jpg?raw=true",  
    description: "Spicy Chicken Avakaya Pickle",
  },
  {
    name: "Fish Pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 320,
        medium: 420,
        big: 520,
      },
    ],
    category: "non-veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/nv/fish.jpg?raw=true",  
    description: "Flavorful Fish Pickle",
  },
  {
    name: "Mutton Pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 350,
        medium: 450,
        big: 550,
      },
    ],
    category: "non-veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/nv/mutton.jpg?raw=true",  
    description: "Rich and Spicy Mutton Pickle",
  },
  {
    name: "Prawns Pickle",
    varients: ["small", "medium", "big"],
    prices: [
      {
        small: 300,
        medium: 400,
        big: 500,
      },
    ],
    category: "non-veg",
    image: "https://github.com/bhargavsai259/webview/blob/master/nv/prawns.jpg?raw=true",  
    description: "Tangy and Spicy Prawns Pickle",
  }
];

export default pickles;
