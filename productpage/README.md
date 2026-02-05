Product Catalog - React Infinite Scroll Application
A responsive React application that displays products with infinite scrolling and inline editing capabilities.

🌐 Live Demo
Deployed URL: https://product-catalog-vs-assessment.vercel.app

🚀 Quick Start
Clone the repository:

bash
git clone https://github.com/PreritNag/vs-assessment.git
cd vs-assessment
Install dependencies:

bash
npm install
Start development server:

bash
npm run dev
Open your browser:
Navigate to http://localhost:5173 (or the port shown in terminal)

📁 Project Structure
text
vs-assessment/
├── src/
│ ├── components/
│ │ ├── ProductTable.jsx # Main table component
│ │ ├── ProductRow.jsx # Individual product row with edit functionality
│ │ └── LoadingIndicator.jsx # Loading and end state component
│ ├── hooks/
│ │ └── useInfiniteScroll.js # Custom hook for infinite scroll
│ ├── services/
│ │ └── productService.js # API service layer
│ ├── styles/
│ │ ├── App.css
│ │ ├── ProductTable.css
│ │ └── ProductRow.css
│ ├── App.jsx # Main application component
│ └── main.jsx # Application entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
🛠️ Technologies Used
React 18 - Frontend library for building UI components

JavaScript (ES6+) - Primary programming language

CSS3 - Styling and responsive layout

Intersection Observer API - For implementing infinite scroll

Fetch API - For making HTTP requests to external API

Vite - Fast build tool and development server

⚙️ Configuration
No environment variables required. The application uses a public API endpoint:

Base URL: https://dummyjson.com/products

📱 Features
Infinite Scrolling - Automatically loads more products as you scroll down

Editable Product Titles - Click the edit button (✏️) to modify product names

Responsive Design - Works seamlessly on mobile, tablet, and desktop screens

Real-time Updates - Changes reflect immediately in the UI without page refresh

Error Handling - Graceful error states with retry mechanisms

Loading States - Visual feedback during data fetching operations

Keyboard Support - Use Enter to save and Escape to cancel while editing

🧪 Testing the Application
Test Infinite Scroll: Scroll down to the bottom of the table to trigger automatic loading of more products

Test Edit Functionality: Click the edit icon (✏️) next to any product name, modify the text, then save (✓) or cancel (✗)

Test Error Handling: Simulate network issues by throttling connection in browser DevTools

Test Responsiveness: Resize browser window or use device toolbar in DevTools

🔧 Build for Production
bash
npm run build
The build artifacts will be stored in the dist/ directory, ready for deployment.

🚢 Deployment
The application is deployed on Vercel. To deploy your own version:

Using Vercel:
bash
npm install -g vercel
vercel
Using Netlify:
Connect your GitHub repository to Netlify

Set build command: npm run build

Set publish directory: dist

Using GitHub Pages:
Update vite.config.js with your base URL

Run npm run build

Deploy the dist folder to GitHub Pages

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
Product data provided by DummyJSON

Icons used for edit/save/cancel buttons

React documentation and community resources for best practices

🔗 Links
GitHub Repository: https://github.com/PreritNag/vs-assessment

Live Application: https://product-catalog-vs-assessment.vercel.app
