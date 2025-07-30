# 🔍 Search Debounce Demo

A React application demonstrating search functionality with debouncing to optimize API calls and improve user experience.

## ✨ Features

- **Real-time Search**: Instant search input with visual feedback
- **Debounced API Calls**: 500ms delay to prevent excessive API requests
- **Product Search**: Search through products using the DummyJSON API
- **Responsive Design**: Grid layout that adapts to different screen sizes
- **Clean UI**: Modern, minimalist interface with smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd search-debounce
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗️ Project Structure

```
search-debounce/
├── src/
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── public/              # Static assets
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🔧 How It Works

### Debouncing Implementation

The application uses React's `useEffect` hook to implement debouncing:

```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    setDebounceQuery(query);
  }, 500);
  return () => clearTimeout(timer);
}, [query]);
```

This ensures that API calls are only made after the user stops typing for 500ms, significantly reducing unnecessary network requests.

### API Integration

The app fetches product data from the [DummyJSON API](https://dummyjson.com/):

- **Endpoint**: `https://dummyjson.com/products/search?q=${query}`
- **Response**: JSON object containing product array
- **Error Handling**: Graceful error handling with console logging

## 🎨 Styling

The application uses CSS Grid for responsive layout and includes:

- Custom input styling with focus states
- Card-based product display
- Responsive grid layout
- Smooth transitions and hover effects

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

**Happy coding! 🎉**
