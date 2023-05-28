

const appetizers=[
    {
        name:"Soupe aux lentillies / Daal Soup",
        description: "",
        price:4.99
    },
    {
        name:"Soupe au poulet et maïs / Chicken Corn Soup",
        description: "",
        price:4.99
    },
    {
        name:"Samoussa aux légumes / Vegetable Samosa",
        description:"2 chaussons frits, farcis avec pommes de terres, pois, et fines herbes. \n 2 Fried dumplings stuffed with potatoes, peas, and fine herbs.",
        price:1.99
    },
    {
      name:"Samosa Chat",
      description: "Samosas aux légumes avec pois chiches, yogourt, légumes, et épices. \n Vegetable samosas with chickpeas, yogurt, vegetables, and spices.",
      price:7.99
    },
    {
        name:"Oignon Bhaji / Onion Bhaji",
        description: "Oignons enrobés de farine de gram, frits avec fines herbes. \n Onions dipped in gram flour, fried with fine herbs.",
        price:4.99
    },
    {
        name:"Pakora au poulet / Chicken Pakora",
        description: "Samosas aux légumes avec pois chiches, yogourt, légumes, et épices. \n Vegetable samosas with chickpeas, yogurt, vegetables, and spices.",
        price:10.99
    },
    {
        name:"Pakora au poisson / Fish Pakora",
        description:"Poisson enrobés de farine de gram, frits avec fines herbes. \n Fish dipped in gram flour, fried with fine herbs.",
        price:12.99
    },
    {
        name:"Pakora au crevettes gréantes / King Prawn Pakora",
        description:"Crevettes géantes enrobés de farine de gram, frits avec fines herbes. \n King prawns dipped in gram flour, fried with fine herbs.",
        price:15.99
    },
    {
        name:"Papadum et chutney à la mangue / Papadum and Mango Chutney",
        description: "Mince pain croustillant à base de farine de riz, servi avec sauce aux mangues. \n Thin crispy bread made with rice flour, served with mango sauce.",
        price:2.99
    },
    {
        name:"Raita",
        description:"Yogourt mélangé avec des légumes et épices. \n Yogurt mixed with vegetables and spices.",
        price:3.99
    },
];


const salad=[
    {
        name:"Salade du chef / Chef's Salad",
        description:"Salade jardinière avec tomate, concombre, oignon rouge et vinaigre. \n Garden salad with tomatoes, cucumber, red onion, and vinegar.",
        price:5.99
    },
    {
        name:"Salade aux oignons / Onion Salad",
        description:"Oignons rouges avec coriandre, poivrons verts, chili, et vinaigre. \n Red onions with with coriander, green peppers, chili, and vinegar.",
        price:3.99
    },
    {
        name:"Salade de concombre / Cucumber Salad",
        description:"Concombre avec coriandre, poivrons verts, chili, et vinaigre. \n Cucumber with with coriander green peppers, chili, and vinegar." ,
        price:3.99
    },
    {
        name:"Achar (assortiment de cornichons / Mixed Pickles)",
        description: "Légumes marinés dans une saumure à l'huile et aux épices. \n Vegetables pickled in oil and spices.",
        price:1.99
    }
    ];

const starters=[
    {
        name:"Végétarien assorti / Assorted Vegetarian",
        description:"Pakora aux légumes, pakora paneer, et samosa aux légumes. \n Vegetable pakora, paneer pakora, and vegetable samosa.",
        price:12.99
    },
    {
        name:"Viandes assorties / Assorted Meats",
        description: "Tikka au poulet, seekh kebab (bœuf), et pakora au poulet. \n Chicken tikka, seekh kebab (beef), and chicken pakora.",
        price:13.99
    },
    {
        name:"Chili Paneer",
        description: "Fromage cottage dans une sauce épicé à l'orientale. \n Cottage cheese in a spicy Asian style sauce.",
        price:14.99
    },
    {
        name:"Chili poisson / Chili Fish",
        description:"Poisson dans une sauce épicé à l'orientale. \n Fish in a spicy Asian style sauce.",
        price: 16.99
    },
    {
        name:"Chili crevettes géantes / King Prawn Chili",
        description: "Crevettes géantes dans une sauce épicé à l'orientale. \n King prawns in a spicy Asian style sauce.",
        price:22.99
    }
];

const sandwich=[
    {
        name:"Sandwich rouleau seekh kebba / Seekh Kebab Roll Sadnwich",
        description:"",
        price:7.99
    },
    {
        name:"Sandwich rouleau au poulet tikka / Chicken Tikka Roll Sandwich",
        description: "",
        price:7.99
    }
];

const specialties=[
    {
        name:"Nihari",
        description: "Boeuf cuit avec gingembre, garam, masala, yogourt, et beurre. \n Beef cooked with ginger, garam masala, yogurt, and butter.",
        price:12.99
    },
    {
        name:"Haleem",
        description: "Ragoût de bœuf mijoté à point avec lentilles, épices, et lines herbes. \n Slowly simmered beef stew with lentils, herbs, and spices.",
        price:12.99
    }
];

const vegetarian=[
    {
        name:"Mélanger les légumes/Mix Vegetable",
        description: "Légumes variés cuisinés aux épices orientales \n Mixed vegetables cooked with Oriental spices ",
        price:11.99
    },
    {
        name:"Channa",
        description:"Pois chiches cuits avec beurre, gingembre, all herbes, et épices. \n Chickpeas cooked with butter, ginger, garlic, herbs, and spices.",
        price:11.99
    },
    {
        name:"Daal Mash",
        description:"Lentilles noires cuites avec beurre gingembre, al, herbes, et épices. \n Black lentils cooked with butter, ginger, garlic, herbs, and spices.",
        price:11.99
    },
    {

        name:"Daal Makhani ",
        description: "Lentilles noires et haricots rouges cuits avec tomates, gingembre, cumin, et oignons. \n Black lentils and red kidney beans cooked with tomatoes, ginger, cumin, and onions.",
        price:11.99
    },
    {
        name:"Matar Paneer ",
        description: "Pois et fromage dans une sauce légèrement épicée. \n Peas and cheese cooked in a mildly spiced sauce.",
        price:12.99
    },
    {
        name:"Baingan Bharta",
        description: "Aubergine cuite avec tomates, oignons, ail, gingembre, et épices. \n Eggplant cooked with tomatoes, onions, garlic, ginger, and spices.",
        price:11.99
    },
    {
        name:"Bhindi ",
        description: "Gombo préparé avec épices et fines herbes. \n Okra cooked with herbs and spices.",
        price:11.99
    },
    {
        name:"Aloo Gobi",
        description:"Pommes de terre et chou-fleur préparés avec épices et fines herbes. \n Potatoes and cauliflower cooked with herbs and spices.,",
        price:11.99
    },
    {
        name:"Aloo Matar ",
        description: "Pommes de terre et pois préparés avec épices et fines herbes. \n Potatoes and peas cooked with herbs and spices.",
        price:11.99
    },
    {
        name:"Aloo Palak",
        description: "Pommes de terre et épinards préparés avec épices et fines herbes. \n Potatoes and spinach cooked with herbs and spices.",
        price:11.99
    },
    {
        name:"Jalfrezi végétarien / Vegetarian Jalfrezi",
        description: "Legumes assortis dans une sauce riche à base de tomates, oignons, et poivrons. \n Mixed vegetables in a rich sauce made with tomatoes, onions, and bell peppers.",
        price:11.99
    },
    {
        name:"Dum Aloo",
        description: "Met exotique de la région de Kashmir à base de pommes de terre, épices, feuilles de laurier, et cannelle. \n Exotic Kashmir dish made with potatoes, spices, bay leaves, and cinnamon.",
        price:11.99
    },
    {
        name: "Nauratan Korma",
        description: "Légumes frais du jardin cuits dans une sauce à base de yogourt. \n Garden fresh vegetables cooked in a yogurt sauce.",
        price: 11.99
    },
    {
        name:"Shahi Paneer",
        description: "Fromage blanc avec sauce crémeuse. \n Cottage cheese in a light creamy sauce.",
        price:12.99
    },
    {
        name:"Palak Paneer",
        description: "Épinards et fromage préparés avec beurre, gingembre, ail, épices, et fines herbes. \n Spinach and cheese cooked in butter with ginger, garlic, herbs, and spices.",
        price:12.99
    }
];

const balties=[
    {
        name:"Balti au poulet / Chicken Balti",
        description:" ",
        price:13.99
    },
    {
        name:"Balti à l'agneau / Lamb Balti",
        description: "",
        price:14.99
    },
    {
        name:"Balti à l'agneau / Lamb Balti",
        description: "",
        price:14.99
    },
    {
        name:"Balti aux crevettes géantes / King Prawn Balti",
        description: "",
        price:21.99
    },
    {
        name:"Balti Wicked",
        description: "Tikka au poulet cuit avec jus de citron frais, chili vert, ail, et sauce aux tomates. \n Chicken tikka cooked with fresh lemon juice, green chili, garlic, and tomato sauce.",
        price:15.99
    },
    {
        name:"Balti Shish Kebab",
        description: "Seekh kebab (bœuf) cuit au four d'argile avec notre sauce spéciale. \n Seekh kebab (beef) cooked in the tandoor with our special sauce.",
        price:14.99
    },
    {
        name:"Balti spécial du chef / Chef's Special Balti",
        description:"Crevettes géantes et tikka au poulet cuit avec jus de citron frais, oignons, et chili vert. \n King prawns and chicken tikka cooked with fresh lemon juice, onions, and green chili.",
        price:18.99
    }
];


const fish=[
    {
        name:"Poisson lahori / Lahori Fish (Bassa)",
        description:"Poisson entier désossé, sans peau cuit au four d’argile. \n Whole fish, boneless, and skinless cooked in tandoor.",
        price:15.99
    },
    {
        name:"Cari au poisson / Fish Curry (Bassa)",
        description: "Bassa frais cuit avec fines herbes, épices, et feuilles de can. \n Fresh bassa cooked with herbs, spices, and curry leaves.",
        price:13.99
    },
    {
        name:"Poisson Jalfrezi/Fish Jalfrazi",
        description: "",
        price:13.99
    },
    {
        name:"Poisson et riz / Fish and Rice",
        description: "",
        price:13.99
    },
    {
        name:"Fish N Chips",
        description: "",
        price:13.99
    },
    {
        name:"Poisson chili / Chili Fish",
        description: "",
        price:16.99
    },
    {
        name:"King crevettes chili / King Prawn Chilli",
        description: "",
        price:22.99
    }
];


const chinese=[
    {
        name:"Riz frit au poulet / Chicken Fried Rice",
        description:"",
        price:13.99
    },
    {
        name:"Poulet chili / Chicken Chili",
        description:"",
        price:13.99
    },
    {
        name:"Riz frit au légumes / Vegetable Fried Rice",
        description:"",
        price:12.99
    },
    {
        name:"Riz frit avec crevettes / Shrimp Fried Rice",
        description:"",
        price:17.99
    },
    {
        name:"Riz frit avec poisson / Fish Fried Rice",
        description:"",
        price:14.99
    },
    {
        name:"Riz frit avec bœuf / Beef Fried Rice",
        description:"",
        price:13.99
    },
    {
        name:"Riz sauté à l'agneau / Lamb Fried Rice",
        description:"",
        price:13.99
    }
];

const tandoori=[
    {
        name:"Poulet tandoori / Chicken tandoori",
        description:"Poulet mariné au yaourt et aux épices et cuit au four tandoor \n Chicken marinated in yogurt and spices and cooked in a tandoor oven",
        size:[
            {quantity:"Entier / Whole", price:22.99},
            {quantity:"Demi / Half", price:12.99},
            {quantity: "Cuisse / Leg",price:7.99},
            {quantity: "Poitrine / Breast",price:8.99}]
    },
    {
        name:"Tikka au poulet / Tandoori Chicken Tikka",
        description: "Poulet désossé, mariné au yogourt, et épices, cuit au four tandoor. \n Boneless chicken marinated in yogurt and spices, cooked in a tandoor oven.",
        price: 16.99
    },
    {
        name: "Tandoori au crevettes géantes / King Prawn Tandoori",
        description: "Crevettes géantes et seekh kbab cuits au four tandoor. \n King prawns marinated in yogurt and spices and cooked in a tandoor oven.",
        price:25.99
    },
    {
        name:"Tandoori assorti (pour 2) / Mixed Tandoori (for 2)",
        description: "Poulet, crevettes géantes, et seekh kebab cuits au four. \n Chicken, king prawn, and seekh kebab cooked in a tandoor oven.",
        price:29.99
    },
    {
        name:"Plateau tandoori mixte / Mixed Tandoori Platter",
        description: "Bœuf, poulet, poisson avec riz, salade, et pain naan. \n Beef, chicken, fish with rice, salad, and naan bread.",
        price:29.99
    },
    {
        name:"Seekh Kebab (Poulet / Chicken)",
        description: "Poulet assaisonné avec des épices et fines herbes, cuit au four tandoor. \n Chicken seasoned with herbs and spices, cooked in a tandoor oven.",
        price:11.99
    },
    {
        name:"Seekh Kebab (Bœuf / Beef)",
        description: "Bœuf assaisonné avec des épices et fines herbes, cuit au four tandoor. \n Beef seasoned with herbs and spices, cooked in a tandoor oven.",
        price:11.99
    }
];

const naan=[
    {
        name:"Naan",
        description:"Pain frais au levain. \n Freshly based leavened bread.",
        price:1.99
    },
    {
        name:"Kulcha Naan",
        description: "Pain frais au levain avec graines de sésames et beurre. \n Freshly baked leavened bread with sesame seeds and butter.",
        price:2.99
    },
    {
        name:"Naan au coriandre / Coriander Naan",
        description: "Pain frais au levain avec coriandre. \n Freshly baked leavened bread with coriander.",
        price:2.99
    },
    {
        name:"Naan à l'ail / Garlic Naan",
        description: "Pain frais au levain avec ail moulu à l'intérieur. \n Freshly baked leavened bread with crushed garlic inside.",
        price:2.99
    },
    {
        name:"Naan aux oignons / Onion Naan",
        description: "Pain frais au levain avec oignons. \n Freshly baked leavened bread with onions.",
        price:4.99
    },
    {
        name:"Aloo Parata",
        description: "Pain frais au levain avec pommes de terres et coriandre. \n Freshly baked leavened bread with potatoes and coriander.",
        price:4.99
    },
    {
        name:"Paneer Naan",
        description: "Pain frais au levain avec fromage. \n Freshly baked leavened bread with cheese.",
        price:4.99
    },
    {
        name:"Keema Naan",
        description: "Pain frais au levain avec poulet ou bœuf keema. \n Freshly baked leavened bread with chicken or beef keema.",
        price:5.99
    },
    {
        name:"Roti",
        description: "Pain plat indien au blé entier. \n Indian whole wheat flat bread.",
        price:2.49
    },
    {
        name:"Tanddori Lacha Paratha",
        description: "Pain piat indien au blé entier. \n Indian whole wheat flat bread.",
        price:3.99
    }
];

const rice=[
    {
        name:"Biryani à l'agneau / Lamb Biryani",
        description:"Agneau et riz basmati cuits à perfection avec ail, gingembre, cardamome, et safran. \n Lamb and basmati rice cooked to perfection with garlic, cardamon, and saffron.",
        price:14.99
    },
    {
        name:"Biryani au boeuf/Beef Biryani",
        description: "Bœuf et riz basmati cuits à perfection avec ail, gingembre, cardamome, et safran. \n Beef and basmati rice cooked to perfection with garlic, cardamon, and saffron.",
        price:14.99
    },
    {
        name:"Biryani au poulet / Chicken Biryani",
        description: "Poulet et riz basmati, cuit à la perfection avec ail, gingembre, cardamome, et safran. \n Chicken and basmati rice cooked to perfection with garlic,ginger, cardamon, and saffron.",
        price:13.99
    },
    {
        name:"Poisson Biryani/Fish Biryani",
        description: "",
        price:13.99
    },
    {
        name:"Biryani végétarien / Vegetarian Biryani ",
        description: "Légumes et riz basmati cuits à perfection avec ail, gingembre, cardamome, et safran. \n Vegetables and basmati rice cooked to perfection with garlic, cardamon, and saffron.",
        price:11.99
    },
    {
        name:"Biryani aux crevette géantes / King Prawn Biryani",
        description: "Crevettes géantes et riz basmati cuits à perfection avec ail, gingembre, cardamome, et safran. \n King prawn and basmati rice cooked to perfection with garlic, cardamon, and saffron.",
        price:19.99
    },
    {
        name:"Riz basmati / Basmati Rice",
        description: "",
        price:4.99
    },
    {
        name:"Riz frit au poulet / Chicken Fried Rice",
        description: "Morceaux poulet avec riz basmati à grains longs, blanc d'œufs, et sauce soya. \n Pieces of chicken infused with lang grain basmati rice, egg whites, and soya sauce.",
        price:13.99
    },
    {
        name:"Matar Pulao (Pois / Peas)",
        description: "Pois cuits avec riz basmati épices aromatiques et fines herbes. \n Peas cooked in basmati rice with aromatic spices and herbs.",
        price:8.99
    },
    {
        name:"Riz à l'ail / Garlic Rice",
        description: "Riz basmati avec ail. \n Basmati rice infused with garlic.",
        price:7.99
    }
];

const dessert=[
    {
        name:"Gulab Jamun",
        description:"Boulettes de lait trempés dans un syrop à l'eau de rose avec arachides. \n Milk balls soaked in rosewater syrup with sliced peanuts.",
        price:3.99
    },
    {
        name:"Ras Malai",
        description: "Galettes de fromage trempées à la crème et garnies de noix. \n Cheese patties drenched in rich cream and topped with nuts.",
        price: 3.99
    }
];

const beverages=[
    {
        name:"Lassi à la mangue / Mango Lassi",
        description:"À base de lait et de yogourt. / Made with milk and yogurt.",
        price:4.99
    },
    {
        name:"Lassi sucré / Sweet Lassi",
        description: "Avec sucre. À base de lait et de yogourt. / With sugar. Made with milk and yogurt.",
        price:4.99
    },
    {
        name:"Lait fouetté à la mangue / Mango Milk Shake",
        description: "",
        price:4.99
    },
    {
        name:"Boissons gazeuses / Soft Drinks",
        description: "",
        price:1.99
    },
    {
        name:"Chai",
        description: "Thé au lait / Milk Tea",
        price:2.99
    }
];

const main_dishes=[
    {
        name: "Pakora au poisson/Butter Chicken ",
        description:"Poulet désossé cuit dans une sauce tomate crémeuse/Boneless chicken cooked in a creamy tomato sauce. ",
        veg:false,
        price:13.99
    },
    {
        name:"Poulet Désossé/Chicken Boneless",
        description:"",
        veg:false,
        price:13.99
    },
    {
        name:"Boeuf Désossé/Beef Boneless",
        description:"",
        veg:false,
        price:14.99
    },
    {
        name:"Agneau Désossé/Lamb Boneless",
        description:"",
        veg:false,
        price:14.99
    },
    {
        name:"Poisson Jalfrezi/Fish Jalfrazi",
        description: "",
        veg:false,
        price:13.99
    },


];

const special=[
    {
        name:"Menu Special #1",
        description: "Pour 2 personnes/For 2 Person",
        contents:["Oignon Bhaji ou Samosa/Onion Bhaji or Samosa (2)","Poulet au beurre/Butter chicken","Cari d\'agneau/Lamb curry",
            "Riz Basmiti/Basmati rice (2)","Pains naan/Naan breads (2)","Salade et Raita/Salad and Raita"],
        price: 39.99
    },
    {
        name:"Menu Special #2",
        description:"Pour 2 personnes/For 2 Person",
        contents: ["Pakora Vegetarienne or Samosa/ Vegetarian Pakora or Samosa (2)","Agneau ou boeuf korma/Lamb or beef korma","Poulet desosse Tikka/Boneless Chicken Tikka",
        "Biryani boeuf ou poulet/Beef or Chicken Biryani","Pains naan/Naan breads (2)","Salade et Raita/Salad and Raita"],
        price:39.99
    },
    {
        name:"Menu Special #3",
        description: "",
        contents:["Papadam et  oignons Bhaji ou Samosa/Papadam and Onion Bhaji or Samosa","Poulet Korma/Chicken Korma","Cavettes Biryani/Shrimp Biryani","Pains naan/Naan breads (2)","Salade et Raita/Salad and Raita"],
        price:41.99

    }
];


let display=[appetizers,salad,starters,sandwich,specialties,vegetarian,balties,fish,chinese,tandoori,naan,rice,beverages];


console.log(display[0]);

const dropdowns1=document.querySelectorAll('.dropdown');

let container=document.getElementById('menu1');





dropdowns1.forEach(dropdown =>{
    const selected=dropdown.querySelectorAll('.selected');
    const options =dropdown.querySelectorAll('.menu li');
    updateMenu(options);

    options.forEach( option=>{
        option.addEventListener('click',()=>{
            updateMenu(options);
        })
    })
})



function updateMenu(options){

    let c=0;
    let str;
    let t=false;

    options.forEach( option=> {
        c++

        if(option.classList.contains('active')){;
            t=true;
            str=option.innerText;
        }
        if(t){
            c--
        }
    })


    if(document.getElementById('menu')!=null)
    {
        let menu = document.getElementById("menu");
        menu.remove();
    }

    let menu=document.createElement("article");
    menu.id="menu";

    let x1=display[c];

    for(let i=0;i<x1.length;i++){

        let name=document.createElement('p');
        name.className='name';
        let price=document.createElement('p');
        price.className='price';
        let description = document.createElement('p');
        description.className='description';
        let dish=document.createElement("div")
        dish.id='dish';

        name.innerText=x1[i].name;
        price.innerText=x1[i].price;
        description.innerText=x1[i].description;

        dish.appendChild(name);
        dish.appendChild(price);
        dish.appendChild(description);

        menu.appendChild(dish);

        container.appendChild(menu);
    }
}

