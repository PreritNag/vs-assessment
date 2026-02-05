# 🛍️ Product Catalog – Frontend Assignment Submission

A responsive **React-based Product Catalog** application built as part of a **Frontend Assignment**.  
The application demonstrates **infinite scrolling**, **inline editing**, and a **clean component-based architecture**.

This project focuses on **performance**, **readability**, and **real-world frontend best practices**.

---

## 📌 Assignment Overview

### Objective
Build a product listing interface that efficiently loads data, supports inline editing, and delivers a smooth user experience across devices.

### Key Requirements Covered
- Infinite scrolling using browser APIs
- Editable UI elements with keyboard accessibility
- Responsive layout
- Proper loading and error handling
- Clean and modular React code

---

## 🌐 Live Demo

🔗 **Deployed Application**  
https://product-catalog-vs-assessment.vercel.app

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/PreritNag/vs-assessment.git
cd vs-assessment
```
## 📦 Installation & Setup

### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Start the Development Server
```bash
npm run dev
```
### 4️⃣ Open in Browser
Visit:
http://localhost:5173 (or the port shown in the terminal)

## 📁 Project Structure
```bash
vs-assessment/
├── src/
│   ├── Components/
│   │   ├── ProductTable.css      # Table styling
│   │   ├── ProductTable.jsx      # Main product table
│   │   ├── ProductRow.jsx        # Individual product row with edit logic
│   │   ├── Loader.css            # Loader styles
│   │   └── Loader.jsx            # Loading / end-state component
│   ├── hooks/
│   │   └── useInfiniteScroll.jsx # Custom hook for infinite scrolling
│   ├── api/
│   │   └── product.js            # API service layer
│   ├── App.css
│   ├── App.jsx                   # Root component
│   └── main.jsx                  # Application entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
## 🛠️ Tech Stack

| Technology | Purpose |
|----------|---------|
| **React 18** | Frontend library for building UI components |
| **JavaScript (ES6+)** | Primary programming language |
| **CSS3** | Styling and responsive layout |
| **Intersection Observer API** | Implementing infinite scrolling |
| **Fetch API** | Making HTTP requests to external APIs |
| **Vite** | Fast build tool and development server |

## ⚙️ API Configuration
No environment variables are required.

## Data Source
https://dummyjson.com/products

## ✨ Features Implemented
### ♾️ Infinite Scrolling
Efficiently loads more products as the user scrolls.

### ✏️ Inline Editing
Edit product titles directly inside the UI.

### ⌨️ Keyboard Accessibility
Enter → Save changes
Escape → Cancel editing

### 📱 Responsive Design
Optimized for mobile, tablet, and desktop screens.
⏳ Loading & Error States
Clear feedback during API calls and failures.

### ⚡ Instant UI Updates
Changes reflect immediately without page reload.

## 🧪 Testing Checklist

| Test Scenario | Expected Behavior |
|--------------|-------------------|
| **Scroll to the bottom** | Loads more products automatically |
| **Edit product title** | Save / cancel actions work correctly |
| **Simulate slow network** | Loading indicators are visible |
| **Resize screen** | Layout remains responsive and usable |

## 🔧 Production Build
``` bash
npm run build
```
## 🚀 Deployment

- **Vercel** – Live deployment used for submission  
- **Netlify / GitHub Pages** – Supported with standard Vite setup  

---

## 📄 License

MIT License – Open source and free to use.

---

## 🙏 Acknowledgments

- Product data provided by **DummyJSON**
- React documentation and frontend best practices

---

## 🔗 Submission Links

- **GitHub Repository**  
  https://github.com/PreritNag/vs-assessment

- **Live Demo**  
  https://product-catalog-vs-assessment.vercel.app

