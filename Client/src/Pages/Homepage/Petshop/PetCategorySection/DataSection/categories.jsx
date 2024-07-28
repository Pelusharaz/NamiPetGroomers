const categories = {
  Dog: [
    {
      name: 'Dog Food & Treats',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMgyRoX0M9Se04eSDuvu0rvCy-czVTWootA&s',
      subcategory: [
        'Dog Treats',
        'Puppy Food',
        'Dry Dog Food',
        'Wet Dog Food'
      ]
    },
    {
      name: 'Collars, Leashes & Harnesses',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8OkXOvLJV_eKyZsvxRJq5m1aD0pp79QMLA&s',
      subcategory: [
        'Dog Collars',
        'Dog ID Tags',
        'Dog Harnesses',
        'Dog Leashes',
        'Dog Muzzles'
      ]
    },
    {
      name: 'Dog Toys',
      img: 'https://m.media-amazon.com/images/I/81AT+nV0BpL._AC_SL1500_.jpg',
      subcategory: [
        'Dog Fetch Toys',
        'Dog Interactive Toys',
        'Dog Plush Toys',
        'Dog Rope & Tug Toys',
        'Dog Chew Toys'
      ]
    },
    {
      name: 'Bowls & Feeders',
      img: 'https://m.media-amazon.com/images/I/71EeQMpFkHL._AC_UF1000,1000_QL80_.jpg',
      subcategory: [
        'Dog Feeders',
        'Dog Bowls',
        'Bottles & Waterers'
      ]
    },
    {
      name: 'Carriers & Travel Accessories',
      img: 'https://m.media-amazon.com/images/I/81WCoVqCCWL.jpg',
      subcategory: [
        'Dog Strollers',
        'Dog Carriers, Bags & Crates',
        'Car Travel Accessories'
      ]
    },
    {
      name: 'Clothing and Accessories',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9-3e54TQUNwBALgFiHlpJH7qi-pHE-uogg&s',
      subcategory: [
        'Dog Life Jackets & Swim Suits',
        'Dog Coats & Jackets',
        'Dog Dresses',
        'Shirts & Tops',
        'Dog Boots & Shoes',
        'Ties'
      ]
    },
    {
      name: 'Kennels, Gates, Crates',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOfTIDZLW1l8TmFKIYiRooyI8ELVnOhxbnQ&s',
      subcategory: [
        'Dog Gates',
        'Dog Pens',
        'Dog Crates & Kennels'
      ]
    },
    {
      name: 'Beds & Furniture',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVXOvZhf4XRTJe_ybKkc90JXbjpNj84T3ww&s',
      subcategory: [
        'Dog Beds'
      ]
    },
    {
      name: 'Dog Grooming & Cleaning Supplies',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW600Twdpw9EIdywWjZlbQAbVnYOKpLZ7XZg&s',
      subcategory: [
        'Hair Clippers & Grooming Kits',
        'Dog Eye Wipes and Tear Stain Wipes',
        'Ear Care & Cleaning',
        'Dog Brushes & Combs',
        'Dog Shampoos & Conditioners',
        'Perfumes, Colognes & Deodorizing Sprays',
        'Dog Paw & Nail Care',
        'Dog Hair Removal & Lint Rollers'
      ]
    },
    {
      name: 'Dog Potty & Waste',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXgehb1J_6KO6lVjreMXjV5eqlgpEMW4Aew&s',
      subcategory: [
        'Poop Bags & Scoopers',
        'Dog Potty Pee Pads & Diapers',
        'Potty Training'
      ]
    },
    {
      name: 'Dog Training & Behaviour',
      img: 'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6abdcc802019b76acc80b81f7efe615e.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp',
      subcategory: [
        'Dog GPS Trackers',
        'Dog Repellents & Deterrents',
        'Professional Dog Training Supplies',
        'Bark Control & Remote Training',
        'Dog Potty Training Aids'
      ]
    },
    {
      name: 'Dog Healthcare Supplies',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TRumjFuIbxyG1vUVmhPRlXH7iTD4CzaSbA&s',
      subcategory: [
        'Dog Skin & Coat Care',
        'Dog Bone and Joint Care',
        'Ear & Eye Care',
        'Anxiety & Calming',
        'Dog First Aid & Recovery Supplies',
        'Dog Dewormers',
        'Dog Vitamins & Supplements',
        'Dog Dental Care',
        'Dog Flea and Tick'
      ]
    }
  ],
  Cat: [
    {
      name: 'Cat Food & Treats',
      img: 'https://i0.wp.com/petstore.co.ke/wp-content/uploads/2024/06/SPECTRUM-GUSTO-SOUP-FOR-CAT-WITH-CHICKEN-AND-CARROT-50GR.png?resize=300%2C300&ssl=1',
      subcategory: [
        'Dry Cat Food',
        'Wet Cat Food',
        'Kitten Food',
        'Cat Treats'
      ]
    },
    {
      name: 'Cat Toys',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzY2hc-dKGCvWq_3ylQNzqyGEircrbYYf8A&s',
      subcategory: ['N/A']
    },
    {
      name: 'Litter and Accessories',
      img: 'https://m.media-amazon.com/images/I/71VRkAjSfFL.jpg',
      subcategory: [
        'Litter Box Deodorizers',
        'Cat Litter',
        'Litter Boxes',
        'Litter Mats',
        'Litter Box Accessories'
      ]
    },
    {
      name: 'Cat Collars, Leashes, Tags',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5iXfkrFwfrQQNULCXM0Dy5EQ5XRg_4YcUw&s',
      subcategory: [
        'Cat Collars',
        'Cat Harnesses',
        'Cat ID Tags'
      ]
    },
    {
      name: 'Cat Bowls and Feeders',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNP81g44kFRAh7sVCBtyie8GY3XtPYh1FiA&s',
      subcategory: [
        'Cat Feeders',
        'Cat Bowls',
        'Cat Water Fountains & Waterers'
      ]
    },
    {
      name: 'Cat Grooming',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaILUX87RvaxNWbhKFiaBasx8CkWVBOs5zg&s',
      subcategory: [
        'Cat Eye Care',
        'Cat Nail Clippers',
        'Trimmers & Grinders',
        'Cat Hair Clippers & Trimmers',
        'Deodorants, Perfumes & Sprays',
        'Cat Brushes & Combs',
        'Cat Shampoos & Conditioners'
      ]
    },
    {
      name: 'Clothes & Apparel',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAILMzV15v32JSKx1mWl-xKYLRzDwy7gOxg&s',
      subcategory: [
        'Cat Costumes',
        'Shirts',
        'Ties'
      ]
    },
    {
      name: 'Trees, Scratchers & Houses',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGDm2j6ytZD6CJmfo2kXXWEMQM0N9WBx9Cw&s',
      subcategory: [
        'Cat Scratching Posts',
        'Cat Scratchers',
        'Cat Trees & Condos'
      ]
    },
    {
      name: 'Carriers and Travel',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsFJa60UPm2Z10cHaalOUvnmwGXYXe2RUfPQ&s',
      subcategory: [
        'Cat Strollers'
      ]
    },
    {
      name: 'Cat Crates, Pens & Gates',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvo_E4-q135IyNBuTYvDeDWycFLrXRQJriw&s',
      subcategory: ['N/A']
    },
    {
      name: 'Training & Cleaning',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpRiQo25ECdMgmVASAp98pB0Kncsf-RtCJ0g&s',
      subcategory: [
        'Cat GPS Trackers',
        'Repellents & Training Aids',
        'Cat Hair Removal & Lint Rollers'
      ]
    },
    {
      name: 'Cat Healthcare Supplies',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9HzTkqzeAC5zas5DcFuIJZ9hOi_u7uUmQA&s',
      subcategory: [
        'Anxiety & Calming Care',
        'Cat First Aid & Recovery Supplies',
        'Cat Vitamins & Supplements',
        'Ear & Eye Care',
        'Dental Care',
        'Cat Dewormers',
        'Flea & Tick'
      ]
    }
  ],
  FishAndAquaticPets: [
    {
      name: 'Fish Feeders',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnPRrTaWjSVAzkmyclRJG17SAtaSh0tV6Pw&s',
      subcategory: ['N/A']
    },
    {
      name: 'Fish Tank Pumps & Filters',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEVSBrb6yCou3nUZQ5QnL-PU-padcKGsFLg&s',
      subcategory: ['N/A']
    },
    {
      name: 'Fish Tanks & Aquariums',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzPvhXqHVAwhdFYsh_X07_CWxjl-tp1A0gg&s',
      subcategory: ['N/A']
    },
    {
      name: 'Lighting & Heating',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCj6YoIjTmIBWM31wsMqkSDpDjXxtsAffS0A&s',
      subcategory: ['N/A']
    },
    {
      name: 'Aquarium Maintenance & Water Care',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sx_FGwO7WB0zHZvu5E8ZYuhLx3dR3eBeCA&s',
      subcategory: ['N/A']
    },
    {
      name: 'Aquarium Decorations',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBlP5QerAtS5d3myOHRkWal-Wlcs6cWBMkg&s',
      subcategory: ['N/A']
    }
  ],
  Birds: [
    {
      name: 'Bird Food & Treats',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRgI9C0b1l9y7Rwwyg94ev2AUPbPUtASFdA&s',
      subcategory: [
        'Pellets',
        'Seeds',
        'Treats'
      ]
    },
    {
      name: 'Bird Cages & Stands',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ssWxsNb_WP9Yi9XTPHhpY4QpQ-tEgzmOVQ&s',
      subcategory: [
        'Bird Cages',
        'Bird Stands'
      ]
    },
    {
      name: 'Bird Feeders & Waterers',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vOjmEfL9ZVIqyknKKt_mHxTPLZVgE39jzg&s',
      subcategory: [
        'Bird Feeders',
        'Bird Waterers'
      ]
    },
    {
      name: 'Bird Perches & Toys',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVH70z-3JcJuE8blavdnmLFTO1s7UPIutiFA&s',
      subcategory: [
        'Bird Perches',
        'Bird Toys'
      ]
    },
    {
      name: 'Bird Pharmacy & Healthcare',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8RHihShciye56kRGbgZVuSTnDS4qxbiXfA&s',
      subcategory: [
        'Bird Vitamins',
        'Bird Supplements',
        'Bird Medicines'
      ]
    }
  ],
  Horse: [
    {
      name: 'Horse Feed',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhwSCvKceKVLSeCgUCvWrsywZNb47Ss4YHg&s',  // you can replace this with a representative image for Horse Feed
      subcategory: [
        'Pellets',
        'Supplements'
      ]
    },
    {
      name: 'Horse Tack & Saddlery',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkuigggUelFvG5diEMcq1SdNLS1fi0D0lIQ&s',  // you can replace this with a representative image for Horse Tack & Saddlery
      subcategory: [
        'Saddle Pads',
        'Saddle Bags',
        'Saddle Covers',
        'Boots & Wraps',
        'Fly Masks',
        'Fly Sheets'
      ]
    },
    {
      name: 'Horse Grooming Supplies',
      img: 'https://m.media-amazon.com/images/I/71Q8QTdZPgL.jpg',  // you can replace this with a representative image for Horse Grooming Supplies
      subcategory: [
        'Fly Sprays',
        'Hair Polishes',
        'Detanglers',
        'Saddle Soaps',
        'Coat Conditioners',
        'Grooming Kits',
        'Brushes',
        'Curry Combs',
        'Rakes',
        'Hoof Care',
        'Combs',
        'Sweat Scrapers',
        'Conditioners',
        'Shampoos'
      ]
    },
    {
      name: 'Horse Healthcare Supplies',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqvu12OdE7na0lrZOUn9BXLCL8BP-ZkEzJA&s',  // you can replace this with a representative image for Horse Healthcare Supplies
      subcategory: [
        'Supplements',
        'Electrolytes',
        'Liniments',
        'Farrier Tools'
      ]
    }
  ],
  SmallAnimals: [
    {
      name: 'Guinea-pig-shop',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIS-o6FW087WmxIFdai2-kC95FiVeiB7Tyuw&s',
      subcategory: ['N/A']
    },
    {
      name: 'Hamster Shop',
      img: 'https://as1.ftcdn.net/v2/jpg/03/30/82/86/1000_F_330828622_sRfhiWp8xyWmHsw1Trv9JeUBYoLfk0UT.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Rabbit-shop',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQws_LDaElj_EAiAkE6avoDfXPNXSwwuLBMgA&s',
      subcategory: ['N/A']
    }
  ],
  PetParentsShop: [
    {
      name: 'Signs, Stickers & Decals',
      img: 'https://example.com/signs_stickers_decals.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Birthday Shop',
      img: 'https://example.com/birthday_shop.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Gifts for Pet Parents',
      img: 'https://example.com/gifts_for_pet_parents.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Pet Memorials & Keepsakes',
      img: 'https://example.com/pet_memorials.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Clothing & Accessories for Pet Parents',
      img: 'https://example.com/clothing_accessories.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Fur Removers and Cleaners',
      img: 'https://example.com/fur_removers.jpg',
      subcategory: ['N/A']
    },
    {
      name: 'Jewelry',
      img: 'https://example.com/jewelry.jpg',
      subcategory: ['N/A']
    }
  ]
};

export default categories;
