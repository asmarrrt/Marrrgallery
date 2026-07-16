// MarrrGallery Products Database
const products = [
    {
        id: 1,
        name: "Classic Football Jersey Red",
        price: 199000,
        image: "https://images.unsplash.com/photo-1625532089255-3c4d3c3c3c3c?w=600&q=80",
        category: "Jersey Bola",
        description: "Premium quality football jersey with custom design. Perfect for team matches and training sessions. Made with breathable fabric.",
        is_best_seller: true,
        is_new_arrival: false
    },
    {
        id: 2,
        name: "Futsal Jersey Blue",
        price: 179000,
        image: "https://images.unsplash.com/photo-1590247622519-5e5e7c1d5b5c?w=600&q=80",
        category: "Jersey Futsal",
        description: "High-performance futsal jersey designed for agility and comfort. Lightweight and moisture-wicking fabric.",
        is_best_seller: true,
        is_new_arrival: false
    },
    {
        id: 3,
        name: "DTF T-Shirt Premium Black",
        price: 149000,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
        category: "Kaos DTF",
        description: "High-quality DTF printed t-shirt with vibrant colors and excellent durability. Perfect for casual wear.",
        is_best_seller: false,
        is_new_arrival: true
    },
    {
        id: 4,
        name: "Football Jersey White",
        price: 199000,
        image: "https://images.unsplash.com/photo-1578762335420-a00ae69b74d3?w=600&q=80",
        category: "Jersey Bola",
        description: "Classic white football jersey with professional printing. Comfortable and durable for intense matches.",
        is_best_seller: true,
        is_new_arrival: true
    },
    {
        id: 5,
        name: "Futsal Jersey Yellow",
        price: 179000,
        image: "https://images.unsplash.com/photo-1587280591945-e9b5e8c23a5e?w=600&q=80",
        category: "Jersey Futsal",
        description: "Bright yellow futsal jersey with excellent visibility. Great for team recognition in matches.",
        is_best_seller: false,
        is_new_arrival: false
    },
    {
        id: 6,
        name: "DTF T-Shirt White Vintage",
        price: 159000,
        image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&q=80",
        category: "Kaos DTF",
        description: "Vintage-style DTF printed t-shirt with unique designs. Premium comfort for everyday wear.",
        is_best_seller: false,
        is_new_arrival: true
    },
    {
        id: 7,
        name: "Football Jersey Green",
        price: 199000,
        image: "https://images.unsplash.com/photo-1580541831066-7a51c3c3d56b?w=600&q=80",
        category: "Jersey Bola",
        description: "Vibrant green football jersey perfect for team uniforms. High-quality fabric with excellent durability.",
        is_best_seller: true,
        is_new_arrival: false
    },
    {
        id: 8,
        name: "Futsal Jersey Green",
        price: 179000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        category: "Jersey Futsal",
        description: "Professional futsal jersey in vibrant green. Designed for optimal performance and comfort.",
        is_best_seller: false,
        is_new_arrival: false
    },
    {
        id: 9,
        name: "DTF T-Shirt Navy Blue",
        price: 149000,
        image: "https://images.unsplash.com/photo-1470084534318-c3ee12dfbd15?w=600&q=80",
        category: "Kaos DTF",
        description: "Navy blue DTF t-shirt with stunning print quality. Comfortable and long-lasting for regular wear.",
        is_best_seller: false,
        is_new_arrival: true
    },
    {
        id: 10,
        name: "Football Jersey Purple",
        price: 199000,
        image: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&q=80",
        category: "Jersey Bola",
        description: "Premium purple football jersey with professional finish. Ideal for distinctive team identity.",
        is_best_seller: true,
        is_new_arrival: true
    },
    {
        id: 11,
        name: "Futsal Jersey Orange",
        price: 179000,
        image: "https://images.unsplash.com/photo-1533295038f58-d06d00e03a86?w=600&q=80",
        category: "Jersey Futsal",
        description: "Bold orange futsal jersey with superior comfort and visibility. Perfect for dynamic playing.",
        is_best_seller: false,
        is_new_arrival: false
    },
    {
        id: 12,
        name: "DTF T-Shirt Red Classic",
        price: 159000,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        category: "Kaos DTF",
        description: "Classic red DTF t-shirt with professional printing quality. A wardrobe essential for any occasion.",
        is_best_seller: true,
        is_new_arrival: false
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('MarrrGallery Loaded - ' + products.length + ' products available');
});
