import { useEffect } from "react";

export default function SearchBooks({ searchQuery, setBooks }) {
  const api = "https://www.googleapis.com/books/v1/volumes?q=";

  useEffect(() => {
    async function fetchData() {
      if (!searchQuery.trim()) return;

      const response = await fetch(api + searchQuery);
      const data = await response.json();

      setBooks(data.items || []);
    }

    fetchData();
  }, [searchQuery]);

  return null;  // ekrana herhangi bir sey basmiyoruz
}
