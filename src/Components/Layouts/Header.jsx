import { useState } from "react";

export default function Header({ searchQuery, setSearchQuery }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      setSearchQuery(searchQuery);
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white text-start" href="/HomePage">Books</a>
        <div className="ms-auto">
        <form onSubmit={handleSubmit}>
        <input type="text"className="form-control me-2" placeholder="Search books..." value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} style={{ width: "200px", marginTop: "20px" }}/>
          <button className="btn btn-outline-light" type="submit" style={{ marginLeft: '210px' , marginTop: '-65px' }}>
            <i className="bi bi-search"></i>
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}
