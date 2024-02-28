import './App.css'
import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';


function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    generoMusical: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nombre.trim().length < 3 || formData.nombre.trim()[0] === ' ') {
      setError('Por favor, ingresa un nombre con más de 3 caracteres.');
      return;
    }

    if (formData.generoMusical.trim().length < 6) {
      setError('Por favor, ingresa un género musical con más de 6 caracteres.');
      return;
    }

   
    setError('');
  };

  return (
    <div>
      <Form
        handleChange={handleChange} 
        formData={formData} 
        handleSubmit={handleSubmit} 
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!error && formData.nombre && formData.generoMusical && (
        <Card nombre={formData.nombre} generoMusical={formData.generoMusical} />
      )}
    </div>
  );
}


export default App;

