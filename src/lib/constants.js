import generateId from "./generateId";

// Footer constants

const account = [
    { route: "account", content: "My Account" },
    { route: "orderhistory", content: "Order History" },
    { route: "shoppingcart", content: "Shopping Cart" },
    { route: "wishlist", content: "Wishlist" },
];

const helps = [
    { route: "contact", content: "Contact" },
    { route: "faqs", content: "Faqs" },
    { route: "terms-condition", content: "Terms & Condition" },
    { route: "privac-ypolicy", content: "Privacy Policy" }
];

const proxy = [
    { route: "about", content: "About" },
    { route: "shop", content: "Shop" },
    { route: "product", content: "Product" },
    { route: "track-order", content: "Track Order" }
];


const categories = [
    { route: "fruits-vegetables", content: "Fruits & Vegetables" },
    { route: "meat-fish", content: "Meat & Fish" },
    { route: "bread-bakery", content: "Bread & Bakery" },
    { route: "beauty-health", content: "Beauty & Health" }
];

const payment = [
    "payment-1.png",
    "payment-2.png",
    "payment-3.png",
    "payment-4.png",
    "payment-5.png",
]


// filter sidebar constants

const allCategories = [
    { id: generateId(), content: "Fresh Fruit", count: 134 },
    { id: generateId(), content: "Vegetables", count: 150 },
    { id: generateId(), content: "Cooking", count: 54 },
    { id: generateId(), content: "Snacks", count: 47 },
    { id: generateId(), content: "Beverages", count: 43 },
    { id: generateId(), content: "Beauty & Health", count: 38 },
    { id: generateId(), content: "Bread & Bakery", count: 15 },
];

const ratings = [
    { id: generateId(), rate: 5.0, content: " " },
    { id: generateId(), rate: 4.0, content: " & up" },
    { id: generateId(), rate: 3.0, content: " & up" },
    { id: generateId(), rate: 2.0, content: " & up" },
    { id: generateId(), rate: 1.0, content: " & up" },
];

const tags = [
    { id: generateId(), content: "Healthy" },
    { id: generateId(), content: "Low fat" },
    { id: generateId(), content: "Vegetarian" },
    { id: generateId(), content: "Kid foods" },
    { id: generateId(), content: "Vitamins" },
    { id: generateId(), content: "Bread" },
    { id: generateId(), content: "Meat" },
    { id: generateId(), content: "Snacks" },
    { id: generateId(), content: "Tiffin" },
    { id: generateId(), content: "Launch" },
    { id: generateId(), content: "Dinner" },
    { id: generateId(), content: "Breakfast" },
    { id: generateId(), content: "Fruit" },
];

const saleProducts = [
    { path: "/public/images/sale-1.jpg", name: "Red Capsicum", price: 32.00, oldPrice: 20.99, rate: 4 },
    { path: "/public/images/sale-2.jpg", name: "Chanise Cabbage", price: 24.00, oldPrice: 20.99, rate: 4 },
    { path: "/public/images/sale-3.jpg", name: "Green Capsium", price: 32.00, oldPrice: 20.99, rate: 4 },
]

export {
    account,
    helps,
    proxy,
    categories,
    payment,
    allCategories,
    ratings,
    tags,
    saleProducts,
}