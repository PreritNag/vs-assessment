# 🛍️ Product Catalog – Frontend Assignment Submission

A responsive **React-based Product Catalog** application built as part of a **Frontend Assignment**.  
The application demonstrates infinite scrolling, inline editing, clean component architecture, and user-friendly UI interactions.

This project focuses on **performance, readability, and real-world frontend best practices**.

---

## 📌 Assignment Overview

**Objective:**  
Build a product listing interface that efficiently loads data, supports inline editing, and provides a smooth user experience across devices.

**Key Requirements Covered:**
- Infinite scrolling using browser APIs
- Editable UI elements with keyboard accessibility
- Responsive layout
- Proper loading and error handling
- Clean and modular React code

---

## 🌐 Live Demo

🔗 **Deployed Application:**  
https://product-catalog-vs-assessment.vercel.app

---

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/PreritNag/vs-assessment.git
cd vs-assessment
Install Dependencies
npm install
Start Development Server
npm run dev
Open in Browser
Visit:
http://localhost:5173 (or the port shown in the terminal)

📁 Project Structure
vs-assessment/
├── src/
│   ├── Components/
│   │   ├── ProductTable.jsx      # Main product table
│   │   ├── ProductRow.jsx        # Row-level edit functionality
│   │   ├── Loader.jsx            # Loading and end states
│   │   └── *.css                 # Component-specific styles
│   ├── hooks/
│   │   └── useInfiniteScroll.jsx # Custom infinite scroll hook
│   ├── api/
│   │   └── product.js            # API abstraction layer
│   ├── App.jsx                   # Root component
│   └── main.jsx                  # Entry point
├── public/
├── index.html
├── vite.config.js
└── README.md
🛠️ Tech Stack
React 18

JavaScript (ES6+)

CSS3

Intersection Observer API

Fetch API

Vite

⚙️ API Configuration
No environment variables are required.

Data Source:

https://dummyjson.com/products
✨ Features Implemented
♾️ Infinite Scrolling
Efficiently loads products as the user scrolls

✏️ Inline Editing
Edit product titles directly inside the UI

⌨️ Keyboard Accessibility

Enter → Save changes

Escape → Cancel editing

📱 Responsive Design
Optimized for mobile, tablet, and desktop screens

⏳ Loading & Error States
Clear feedback during API calls and failures

⚡ Instant UI Updates
No page refresh required after edits

🧪 Testing Checklist
Scroll to bottom → loads more products

Edit product title → save / cancel works correctly

Simulate slow network → loading indicators visible

Resize screen → layout remains usable

🔧 Production Build
npm run build
Build output is generated in the dist/ directory.

🚢 Deployment
Vercel – Live deployment used for submission

Netlify / GitHub Pages – Supported with standard Vite setup

📄 License
MIT License – Open source and free to use.

🙏 Acknowledgments
Product data from DummyJSON

React documentation and frontend best practices

🔗 Submission Links
GitHub Repository:
https://github.com/PreritNag/vs-assessment

Live Demo:
https://product-catalog-vs-assessment.vercel.app