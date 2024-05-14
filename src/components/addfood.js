import React, { useState } from 'react';
import axios from 'axios';
import './FoodItemForm.css';
import { Container, Button } from 'react-bootstrap';

function FoodItemForm() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    calories: '',
    fat: '',
    carbs: '',
    protein: '',
    image: null
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    data.append('calories', formData.calories);
    data.append('fat', formData.fat);
    data.append('carbs', formData.carbs);
    data.append('protein', formData.protein);
    data.append('image', formData.image);
    console.log(data);

    try {
      await axios.post('http://localhost:5000/food/cfood', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Food item added successfully!');
    } catch (error) {
      console.error('Error adding food item:', error);
      alert('Error adding food item. Please try again.');
    }
  };

  return (
    <div className="container gredddd">
      <h2 className="heading">Add Food Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Calories:</label>
          <input type="number" name="calories" value={formData.calories} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Fat:</label>
          <input type="number" name="fat" value={formData.fat} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Carbs:</label>
          <input type="number" name="carbs" value={formData.carbs} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Protein:</label>
          <input type="number" name="protein" value={formData.protein} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" name="image" onChange={handleChange} className="form-control-file" />
        </div>
        <Button type="submit" variant='outlined-secondary'>Add Food Item</Button>
      </form>
    </div>
  );
}

export default FoodItemForm;
