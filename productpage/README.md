# 🛍️ Product Catalog – React Infinite Scroll Application

A responsive React application that displays products with **infinite scrolling** and **inline editing** capabilities.

## 🌐 Live Demo
🔗 **Deployed URL:**  
https://product-catalog-vs-assessment.vercel.app

---

## 🚀 Quick Start

### Clone the repository
```bash
git clone https://github.com/PreritNag/vs-assessment.git
cd vs-assessment
Install dependencies
npm install
Start development server
npm run dev
Open in browser
Navigate to:
http://localhost:5173 (or the port shown in the terminal)

📁 Project Structure
vs-assessment/
├── src/
│   ├── components/
│   │   ├── ProductTable.jsx      # Main table component
│   │   ├── ProductRow.jsx        # Individual product row with edit functionality
│   │   └── LoadingIndicator.jsx  # Loading and end state component
│   ├── hooks/
│   │   └── useInfiniteScroll.js  # Custom hook for infinite scroll
│   ├── services/
│   │   └── productService.js     # API service layer
│   ├── styles/
│   │   ├── App.css
│   │   ├── ProductTable.css
│   │   └── ProductRow.css
│   ├── App.jsx                   # Main application component
│   └── main.jsx                  # Application entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
🛠️ Technologies Used
React 18 – UI component library

JavaScript (ES6+) – Core programming language

CSS3 – Styling and responsive design

Intersection Observer API – Infinite scrolling implementation

Fetch API – HTTP requests

Vite – Fast build tool and development server

⚙️ Configuration
No environment variables are required.

Public API Used:

https://dummyjson.com/products
📱 Features
♾️ Infinite Scrolling – Automatically loads more products on scroll

✏️ Editable Product Titles – Inline editing with save/cancel actions

📱 Responsive Design – Optimized for mobile, tablet, and desktop

⚡ Real-time Updates – UI updates instantly without refresh

🚨 Error Handling – Graceful error states with retry logic

⏳ Loading States – Clear feedback during data fetching

⌨️ Keyboard Support

Enter → Save

Escape → Cancel

🧪 Testing the Application
Infinite Scroll: Scroll to the bottom of the table

Edit Feature: Click ✏️ → Edit title → ✓ Save or ✗ Cancel

Error Handling: Throttle network in browser DevTools

Responsiveness: Resize window or use device toolbar

🔧 Build for Production
npm run build
The production-ready files will be generated in the dist/ directory.

🚢 Deployment
Deploy on Vercel
npm install -g vercel
vercel
Deploy on Netlify
Connect GitHub repository

Build Command: npm run build

Publish Directory: dist

Deploy on GitHub Pages
Update vite.config.js with base URL

Run:

npm run build
Deploy the dist/ folder

🤝 Contributing
Fork the repository

Create a feature branch

git checkout -b feature/amazing-feature
Commit your changes

git commit -m "Add amazing feature"
Push to branch

git push origin feature/amazing-feature
Open a Pull Request

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
Product data from DummyJSON

Icons used for edit/save/cancel actions

React documentation & community resources

🔗 Links
GitHub Repository:
https://github.com/PreritNag/vs-assessment

Live Application:
https://product-catalog-vs-assessment.vercel.app


---

If you want, I can also:
- 🔥 Make it **ATS-friendly** for internship submissions  
- 🎯 Rewrite it specifically for **React Intern / Frontend Intern assignments**  
- ✨ Add badges (Vercel, React, MIT, etc.)

Just say the word 😄