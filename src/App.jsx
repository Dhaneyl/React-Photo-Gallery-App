import React, { useState, useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import ImageComponent from './components/Images';
import Modal from './components/Modal';
import '../src/styles/App.css'

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

function ApiExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isFiltering, setFiltering] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); 

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  function handleInputSearch(event) {
    setSearch(event.target.value);
    setFiltering(true);
  }

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    console.log('Opening Modal');
    setShowModal(true);
    
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
    console.log('close modal');
  };

 
  const filteredData = isFiltering
    ? data.filter((item) => item.title.includes(search))
    : data;

  return (
    <div className='main-container'>
      <div className='header'>
        <h1>API Photos Example</h1>
      </div>
      <div className='search-bar'>
        <input
          className='searchInput'
          placeholder='Input something to search'
          value={search}
          onChange={handleInputSearch}
        />
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : ( filteredData.length > 0 
         ? <div className="image-container">
          { 
            filteredData.map((item) => (
            <li key={item.id} onClick={() => openModal(item.url)}>
              <ImageComponent image={item.url} text={item.title} />
            </li>
          
          ))}
        </div>
        : <div className='no-data'>
        <p>
        There's not data to show
        </p> 
        <img src='https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-1965034-1662569.png?f=webp'/>
        </div>
      )}
      {showModal && (
        <Modal imageUrl={selectedImage} alt="Full-screen-photo" onClose={closeModal} />
      )}
    </div>
  );
}

export default ApiExample;
