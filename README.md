# MarrrGallery - Custom Jersey Printing & DTF

A modern, fully responsive e-commerce website built with HTML, Tailwind CSS, and vanilla JavaScript.

## 🎨 Features

### Design
- **Modern & Premium**: Dark-themed design with strong contrast and smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Hover effects, fade transitions, and scale animations
- **Professional Typography**: Using Inter font from Google Fonts

### Color Palette
- **Background**: #071A2F (Dark Navy)
- **Primary Accent**: #E63946 (Red)
- **Secondary**: #1D3557 (Deep Blue)
- **Card Background**: #0F2A44
- **Light Text**: #F1FAEE

### Pages

#### 1. Home (index.html)
- Responsive navbar with logo and cart icon
- Hero section with headline and CTA
- Best Sellers section
- 3 Category cards (Jersey Bola, Jersey Futsal, Kaos DTF)
- Promotional banner
- New Arrivals section
- Footer with links
- Floating WhatsApp button

#### 2. Products (products.html)
- Product grid layout
- Category filtering
- Product cards with images and pricing
- Quick add to cart functionality
- Best seller and new arrival badges

#### 3. Product Detail (detail.html)
- Large product image
- Product information (name, price, category)
- Full product description
- Quantity controls
- Add to cart button
- Direct WhatsApp purchase option
- Related products section
- Breadcrumb navigation

#### 4. Shopping Cart (cart.html)
- Complete cart listing
- Quantity adjustment controls
- Remove item functionality
- Order summary with calculations
- Automatic free shipping logic (>Rp2.000.000)
- WhatsApp checkout integration
- Empty cart state

#### 5. 404 Page (404.html)
- Branded 404 error page
- Links to home and products

## 🛒 Cart System

### Features
- **localStorage Integration**: Cart persists across sessions
- **Real-time Updates**: Cart badge shows total items
- **Quantity Controls**: Add/remove/update product quantities
- **Price Calculations**: Automatic subtotal, shipping, and total
- **Free Shipping**: Orders over Rp2.000.000 get free shipping
- **WhatsApp Checkout**: Direct integration with WhatsApp with auto-formatted messages

### Cart Data Structure
```javascript
{
  id: 1,
  name: "Product Name",
  price: 199000,
  image: "image-url",
  category: "Category",
  description: "Description",
  quantity: 1
}
```

## 📦 Product Database

12 dummy products included:
- **Jersey Bola** (4 products)
- **Jersey Futsal** (4 products)
- **Kaos DTF** (4 products)

Each product includes:
- ID, Name, Price, Image URL
- Category, Description
- Best Seller flag
- New Arrival flag

## 🔧 JavaScript Functionality

### Key Functions
- `addToCart(productId)` - Add item to cart
- `removeFromCart(index)` - Remove item from cart
- `updateQuantity(index, quantity)` - Update item quantity
- `formatPrice(price)` - Format price to Rupiah
- `updateCartBadge()` - Update cart count display
- `checkoutWhatsApp()` - Process WhatsApp checkout
- `filterByCategory(category)` - Filter products

### localStorage Keys
- `cart` - Stores cart items as JSON

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 WhatsApp Integration

- Phone Number: +62 81234567890
- Auto-formatted message includes:
  - Product name and quantity
  - Subtotal
  - Shipping cost
  - Total amount

## ✨ Extra Features

- Smooth hover effects and transitions
- Loading animations
- Notification toasts
- Empty state handling
- Breadcrumb navigation
- Related products recommendations
- Floating WhatsApp button (sticky)
- Real-time cart updates
- Responsive grid layouts
- Professional footer with links

## 📁 File Structure

```
MarrrGallery/
├── index.html          # Home page
├── products.html       # Products listing
├── detail.html         # Product detail
├── cart.html           # Shopping cart
├── 404.html            # 404 error page
├── script.js           # JavaScript & product data
├── style.css           # Global styles
└── asmar.png           # Brand logo
```

## 🚀 Getting Started

1. Clone the repository
2. Place your `asmar.png` logo in the root directory
3. Open `index.html` in a browser
4. Start shopping!

## 💡 Customization

### Change Phone Number
Edit the phone number in checkout functions:
```javascript
const phoneNumber = '6281234567890'; // Change this
```

### Adjust Shipping Threshold
Modify the free shipping limit in `cart.html`:
```javascript
const shipping = subtotal >= 2000000 ? 0 : 50000; // Change 2000000
```

### Add More Products
Edit the `products` array in `script.js` to add new products.

## 🎯 Features Checklist

- ✅ Responsive design (mobile-first)
- ✅ Dark theme with red accents
- ✅ Smooth animations and transitions
- ✅ Full shopping cart system
- ✅ Product filtering by category
- ✅ Product detail page
- ✅ localStorage persistence
- ✅ WhatsApp integration
- ✅ Free shipping logic
- ✅ Best sellers section
- ✅ New arrivals section
- ✅ Floating WhatsApp button
- ✅ Professional footer
- ✅ 404 error page
- ✅ Real-time cart badge

## 📝 Notes

- All images use Unsplash URLs for demo purposes
- Replace with actual product images for production
- Update WhatsApp phone number with actual business number
- Customize color palette by modifying CSS variables

## 📄 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ for MarrrGallery - Custom Jersey Printing & DTF
