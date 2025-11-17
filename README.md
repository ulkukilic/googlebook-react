# Google Books Search App

A React application for searching books using the Google Books API.

## Features

- 🔍 Book search
- 📚 Display book information (title, author, cover image)
- 🎨 Responsive design with Bootstrap 5

## Installation

```bash
npm install
npm install bootstrap-icons
npm start
```

## Technologies Used

- React 18
- Bootstrap 5
- Bootstrap Icons
- Google Books API

## Project Structure

```
src/
├── Components/
│   ├── Books/
│   │   ├── HomePage.jsx       # Book list
│   │   └── SearchBook.jsx     # API calls
│   └── Layouts/
│       ├── Header.jsx         # Search bar
│       └── Footer.jsx         # Footer
├── App.js
└── index.js
```

## How It Works

1. Enter a book name or author in the search bar
2. Press Enter or click the search icon
3. Results will load automatically

## API

Using Google Books API:
```
https://www.googleapis.com/books/v1/volumes?q=
```

**API Response Structure:**
```json
{
  "items": [
    {
      "volumeInfo": {
        "title": "Book Title",
        "authors": ["Author Name"],
        "imageLinks": {
          "thumbnail": "image_url"
        }
      }
    }
  ]
}
```



---

Made with React ❤️
