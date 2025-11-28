export type Product = {
  id: string;
  name: string;
  price: number; // INR
  shortDescription: string;
  description: string;
  age: string;
  image: string;
  category?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "balancing-cat",
    name: "Balancing Cat",
    price: 850,
    shortDescription: "Stack colorful, uniquely-shaped wooden blocks on a smiling cat base.",
    description: "Challenge yourself with Balancing Cat! Strategically stack various colorful, uniquely shaped wooden blocks on a smiling cat base. Develop fine motor skills, spatial reasoning, and problem-solving, all while having endless creative fun.",
    age: "3+",
    image: "/products/balancing-cat.jpg"
  },
  {
    id: "indian-nesting-dolls",
    name: "Indian Nesting Dolls (set of 5)",
    price: 400,
    shortDescription: "Handcrafted, colorful wooden nesting dolls (set of 5).",
    description: "This set of five handcrafted, colorful, uniquely painted wooden nesting dolls provides endless creative fun. Develop fine motor skills, spatial reasoning, and problem-solving. A beautiful piece for play and home décor.",
    age: "3+",
    image: "/products/indian-nesting-dolls.jpg"
  },
  {
    id: "ladybug-yoyo",
    name: "Ladybug Yo-Yo",
    price: 120,
    shortDescription: "Handcrafted wooden yo-yo with a ladybug design.",
    description: "Discover classic fun with a charming twist! This handcrafted wooden yo-yo features an adorable ladybug design. Develop hand-eye coordination, fine motor skills, and patience. Smooth, durable design suitable for beginners and experienced players.",
    age: "6+",
    image: "/products/ladybug-yoyo.jpg"
  },
  {
    id: "giraffe-pull-toy",
    name: "Giraffe Pull Toy",
    price: 300,
    shortDescription: "Wooden giraffe pull toy for toddlers with vibrant paint.",
    description: "Introduce your child to their first safari with our adorable Wooden Giraffe Pull Toy! Handcrafted with vibrant colors and a friendly face, it encourages walking, enhances coordination, and sparks imaginative play.",
    age: "18 months+",
    image: "/products/giraffe-pull-toy.jpg"
  },
  {
    id: "container-train",
    name: "Handcrafted Container Train",
    price: 850,
    shortDescription: "Wooden train with three removable containers and folk-art paint.",
    description: "Experience a joyful journey with this handcrafted wooden train! Expertly painted with intricate Indian folk art, it features three removable containers with lids—perfect for storing treasures or enhancing imaginative play.",
    age: "3+",
    image: "/products/container-train.jpg"
  },
  {
    id: "peacock-rattle",
    name: "Peacock Rattle",
    price: 120,
    shortDescription: "Handpainted peacock rattle sized for little hands.",
    description: "Handcrafted Peacock Rattle, expertly painted with vibrant Indian motifs. Produces a soft, soothing sound and is perfectly sized for little hands—stimulates senses and celebrates heritage.",
    age: "3+ months",
    image: "/products/peacock-rattle.jpg"
  },
  {
    id: "dinosaur-pull-toy",
    name: "Wooden Dinosaur Pull Toy",
    price: 300,
    shortDescription: "Vibrant green wooden dinosaur pull toy for toddlers.",
    description: "Embark on prehistoric adventures with this handcrafted wooden Dinosaur Pull Toy. Durable and delightfully detailed; pulling promotes gross motor skills and imaginative play.",
    age: "18 months+",
    image: "/products/dinosaur-pull-toy.jpg"
  },
  {
    id: "stacking-rings",
    name: "Stacking Rings",
    price: 250,
    shortDescription: "Classic stacking toy with brightly colored rings and smiling top.",
    description: "Sort, stack, and learn! This classic handcrafted wooden toy features multiple brightly colored rings and a cheerful smiling top piece—perfect for fine motor skill development and size sequencing.",
    age: "12 months+",
    image: "/products/stacking-rings.jpg"
  },
  {
    id: "wooden-dog-push-toy",
    name: "Wooden Dog Push Toy",
    price: 300,
    shortDescription: "Friendly wooden dog push toy to encourage crawling/walking.",
    description: "Meet your child's playful companion! This charming wooden dog push toy is beautifully crafted with smooth edges and a friendly design—ideal for little hands learning to grasp and push.",
    age: "12 months+",
    image: "/products/wooden-dog-push-toy.jpg"
  },
  {
    id: "crocodile-push-toy",
    name: "Crocodile Push Toy",
    price: 350,
    shortDescription: "Handcrafted wooden crocodile with smooth-rolling wheels.",
    description: "Embark on wild adventures with this charming Wood Crocodile! Handcrafted from child-safe, eco-friendly wood, its smooth-rolling wheels encourage pushing and imaginative storytelling.",
    age: "12 months+",
    image: "/products/crocodile-push-toy.jpg"
  },
  {
    id: "duck-push-toy",
    name: "Wooden Duck Push Toy",
    price: 300,
    shortDescription: "Smooth-rolling wooden duck crafted for little hands.",
    description: "Embark on happy adventures with this charming wooden duck! Crafted from child-safe, eco-friendly wood with smooth-rolling wheels—perfect to develop motor skills and imaginative fun.",
    age: "12 months+",
    image: "/products/wooden-duck-push-toy.jpg"
  },
  {
    id: "speedter-gt",
    name: "Speedter GT Push Along (Bee Car)",
    price: 350,
    shortDescription: "Classic wooden car with vibrant finish and bee design.",
    description: "Ignite imagination with this classic wooden car! Crafted from child-safe wood and featuring smooth-rolling wheels and a fun bee design. Inspires racing adventures and fine motor skill development.",
    age: "12 months+",
    image: "/products/speedter-gt-bee-car.jpg"
  },
  {
    id: "classic-rainbow-arches",
    name: "Stacking Rainbow / Rainbow Arches",
    price: 400,
    shortDescription: "Wooden rainbow arches for stacking and creative play.",
    description: "Unlock creativity with this classic stacking rainbow toy! A spectrum of vibrant wooden arches inspires imaginative play, spatial reasoning and color recognition—craftsmanship from child-safe wood.",
    age: "12 months+",
    image: "/products/rainbow-arches.jpg"
  },
  {
    id: "natural-push-toy",
    name: "Natural Wooden Push Toy (first toy)",
    price: 300,
    shortDescription: "Minimal natural wooden push toy for infants.",
    description: "A charming, handcrafted natural wooden push toy with smooth curves and simple design. Perfectly sized for little hands to grasp and explore—encourages early motor skills and crawling.",
    age: "6+ months",
    image: "/products/natural-push-toy.jpg"
  },
  {
    id: "tirupati-idol-set",
    name: "Handcrafted Tirupati Balaji Idol Set",
    price: 800,
    shortDescription: "Hand-painted wooden idol set of Lord Tirupati Balaji and companions.",
    description: "Experience divine craftsmanship with a handcrafted wooden idol set featuring Lord Tirupati Balaji and divine companions. Meticulously hand-painted with folk art details for home puja or decor.",
    age: "Decorative / All ages",
    image: "/products/tirupati-idol-set.jpg"
  },
  {
    id: "rajasthani-hand-mirror",
    name: "Rajasthani Hand Mirror (Folk Art)",
    price: 250,
    shortDescription: "Hand-painted wooden hand mirror with elephant motifs and vibrant colors.",
    description: "Experience the opulent elegance of Rajasthan with this handcrafted wooden hand mirror featuring intricate hand-painted folk art—beautiful as daily use or decorative accent.",
    age: "Decorative",
    image: "/products/rajasthani-hand-mirror.jpg"
  },
  {
    id: "heritage-bronze-wall-hanging",
    name: "Heritage Bronze Wall Hanging",
    price: 450,
    shortDescription: "Metal/bronze style artisan wall hangings with cultural motifs.",
    description: "Adorn your space with 'Heritage Bronze' wall hangings—intricate designs of elephants and divine figures handcrafted by master artisans. A soulful addition to any room.",
    age: "Decorative",
    image: "/products/heritage-bronze-wall-hanging.jpg"
  },
  {
    id: "artisan-nesting-trays",
    name: "Artisan Nesting Trays (hand-carved)",
    price: 1200,
    shortDescription: "Hand-carved wooden nesting trays with leaf patterns and scalloped edges.",
    description: "Elevate home décor with hand-carved wooden nesting trays—delicate leaf patterns and scalloped edges that blend rustic elegance with practical versatility.",
    age: "Decorative",
    image: "/products/artisan-nesting-trays.jpg"
  },
  {
    id: "celestial-harmony-ganesha",
    name: "Celestial Harmony — Ganesha on Peacock (Brass/Idol)",
    price: 750,
    shortDescription: "Handcrafted brass idol: Lord Ganesha seated on a peacock.",
    description: "Discover 'Celestial Harmony'—a handcrafted brass idol of Lord Ganesha seated on a majestic peacock. A testament to artisan craft, divine symbolism and timeless artistry.",
    age: "Decorative / All ages",
    image: "/products/celestial-harmony-ganesha.jpg"
  },
  {
    id: "wooden-krishna-idol",
    name: "Handcrafted Wooden Krishna Idol",
    price: 350,
    shortDescription: "Handcrafted wooden idol representing Lord Krishna.",
    description: "A beautiful handcrafted wooden idol of Lord Krishna—an expression of Divine Serenity and cultural heritage, suitable for home altars or as a thoughtful gift.",
    age: "Decorative",
    image: "/products/wooden-krishna-idol.jpg"
  },
  {
    id: "bamboo-pendant-light",
    name: "Organic Glow — Bamboo Pendant Light",
    price: 460,
    shortDescription: "Handcrafted bamboo pendant light for warm ambient lighting.",
    description: "Illuminate your home with the 'Organic Glow' bamboo pendant light—uniquely designed from natural bamboo to cast soft, ambient light and add rustic charm.",
    age: "Home decor / Electrical",
    image: "/products/bamboo-pendant-light.jpg"
  },
  {
    id: "traditional-echoes-idol",
    name: "Traditional Echoes — Musical Wooden Idol",
    price: 300,
    shortDescription: "Handcrafted wooden idol celebrating musical heritage.",
    description: "Experience the rhythm and artistry with this handcrafted wooden idol—a homage to India's musical heritage that brings melody and soulful decor into your home.",
    age: "Decorative",
    image: "/products/traditional-echoes-idol.jpg"
  },
  {
    id: "organic-hanging-planter",
    name: "Organic Hanging Planter (macrame + coconut shell)",
    price: 180,
    shortDescription: "Handwoven macrame hanger with coconut shell planter.",
    description: "Elevate living spaces with an Organic Hanging Planter: handwoven macrame hanger cradling a sustainably sourced coconut shell pot—perfect for succulents or herbs.",
    age: "Home decor",
    image: "/products/organic-hanging-planter.jpg"
  }
];
