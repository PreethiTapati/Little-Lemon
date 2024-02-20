import appe1 from "./images/menu/a_crabartichoke.png";
import appe2 from "./images/menu/a_spinachballs.png";
import appe3 from "./images/menu/a_vegannachos.png";
import main1 from "./images/menu/m_couscous.png";
import main2 from "./images/menu/m_mezze.png";
import main3 from "./images/menu/m_paella.png";
import main4 from "./images/menu/m_ratatouille.png";
import main5 from "./images/menu/m_risotto.png";
import main6 from "./images/menu/m_shakshuka.png";
import des1 from "./images/menu/d_crema_catalana.png";
import des2 from "./images/menu/d_galaktoboureko.png";
import des3 from "./images/menu/d_namoura.png";


export const menu = [
  {
    type: "appetizer",
    name: "Crab Artichoke",
    image: appe1,
    price: "$9.99",
    description: "A delectable blend of crab and artichoke, served as a delightful appetizer to kickstart your meal"
  },
  {
    type: "appetizer",
    name: "Spinach Balls",
    image: appe2,
    price: "$5.99",
    description:"Savory spinach balls that are crispy on the outside and tender on the inside, perfect for a flavorful start."
  },
  {
    type: "appetizer",
    name: "Vegan Nachos",
    image: appe3,
    price: "$7.99",
    description:"A plant-based twist on the classic nachos, featuring a medley of vegan ingredients for a guilt-free indulgence"
  },
  {
    type: "main",
    name: "Couscous",
    image: main1,
    price: "$10.99",
    description:"A light and fluffy couscous dish, paired with an assortment of flavorful ingredients to satisfy your main course cravings."
  },
  {
    type: "main",
    name: "Mezze",
    image: main2,
    price: "$10.99",
    description:"A light and fluffy couscous dish, paired with an assortment of flavorful ingredients to satisfy your main course cravings"
  },
  {
    type: "main",
    name: "Paella",
    image: main3,
    price: "$14.99",
    description:"A Spanish rice dish infused with a rich combination of seafood, meat, and aromatic spices."
  },
  {
    type: "main",
    name: "Ratatouille",
    image: main4,
    price: "$11.99",
    description:"A classic French vegetable stew featuring a colorful array of seasonal vegetables cooked to perfection."
  },
  {
    type: "main",
    name: "Risotto",
    image: main5,
    price: "$12.99",
    description:"Creamy Italian risotto, expertly prepared and infused with a variety of flavors for a comforting main dish."
  },
  {
    type: "main",
    name: "Shakshuka",
    image: main6,
    price: "$12.99",
    description:"A Middle Eastern dish consisting of poached eggs in a flavorful tomato and chili pepper sauce"
  },
  {
    type: "dessert",
    name: "Crema Catalana",
    image: des1,
    price: "$4.99",
    description:"A Spanish dessert similar to crème brûlée, featuring a smooth custard base with a caramelized sugar top"
  },
  {
    type: "dessert",
    name: "Galaktoboureko",
    image: des2,
    price: "$5.99",
    description:"A Greek pastry made with layers of phyllo dough and a sweet custard filling, topped with a honey-based syrup."
  },
  {
    type: "dessert",
    name: "Namoura",
    image: des3,
    price: "$4.99",
    description:"A traditional Middle Eastern sweet cake, often made with semolina and drizzled with a sweet syrup for a delightful dessert experience."
  },
];

export const specials = [
    {
      id: 1,
      title: "Greek salad",
      description: `The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons`,
      image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
      price: "$12.99",
    },
    {
      id: 2,
      title: "Bruschetta",
      description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
      image: "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
      price: "$ 5.99",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      description: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`,
      image: "https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg",
      price: "$ 5.00",
    },
  ];
