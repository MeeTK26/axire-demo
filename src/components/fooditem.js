import React, { useState, useEffect } from 'react';
import temp from './temp.json';
import './FoodItem.css';
import { Container, Button, Spinner } from 'react-bootstrap';

function FoodItemCard({ item }) {
  return (
    <div className="card food-item-card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text"><strong>Category:</strong> {item.category}</p>
        <p className="card-text"><strong>Calories:</strong> {item.calories}</p>
        <p className="card-text"><strong>Fat:</strong> {item.fat}g</p>
        <p className="card-text"><strong>Carbs:</strong> {item.carbs}g</p>
        <p className="card-text"><strong>Protein:</strong> {item.protein}g</p>
      </div>
    </div>
  );
}

function FoodItem() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setItems(temp);
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const filteredItems = items.filter(item => {
    return (filter === 'All' || item.category === filter) &&
           (search === '' || item.name.toLowerCase().includes(search.toLowerCase()));
  });

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="food-item-container gredddd">
      <h1 className="app-title">Food Items</h1>
      <div className="filter-search-container">
        <div className="filter-container">
          <label htmlFor="filter" className="filter-label">Filter by Category: </label>
          <select id="filter" value={filter} onChange={handleFilterChange} className="form-control filter-select">
            <option value="All">All</option>
            <option value="Fruit">Fruit</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Meat">Meat</option>
            <option value="Fish">Fish</option>
            <option value="Grains">Grains</option>
          </select>
        </div>
        <div className="search-container">
          <label htmlFor="search" className="search-label">Search by Name: </label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="form-control search-input"
          />
        </div>
      </div>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
          <p>Loading🤔🤔...</p>
        </div>
      ) : (
        <>
          <div className="card-container">
            {currentItems.map(item => (
              <FoodItemCard key={item.id} item={item} />
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button key={index} onClick={() => paginate(index + 1)}  variant="outline-dark">
                {index + 1}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default FoodItem;
