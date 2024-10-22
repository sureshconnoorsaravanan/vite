import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/navbar';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}


const Home: React.FC = () => {

  const [category, setCategory] = useState<string[]>([]);
  const [data, setData] = useState<Product[]>([]); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategory(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const getCategoryData = (category: string) => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => {
        console.log(response.data)
        setData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <>
      <Navbar/>
    <div className='container mt-5'>
      <div className='d-flex'>
        <h4>Select Category:</h4>
        <div>
          {category.map((item, index) => (
            <button className='btn btn-info mx-2 text-capitalize' key={index +1 } onClick={()=>getCategoryData(item)}>{item}</button>
        ))}
        </div>
      </div> 
    <div className="row mt-5">
      {data.map((product, index) => (
        <div className='col-lg-3' key={index + 1}>
          <div className="card mx-1 my-1 p-3" >
            <div className='text-center'>
              <img
                alt={product.title}
                src={product.image}
                style={{ width: '150px', height: '150px' }}
              />
            </div>
            <div className="card-body">
              <header>
              <h6 className="product-header">{product.title.slice(0, 10)}...</h6>
              </header>
              <p className="card-text">{ product.description.slice(0, 50)	}...</p>
              <button className='btn btn-warning'>Add Cart</button>
            </div>
          </div>
        </div>
      ))}
      </div>
      </div>
      </>
  );
};

export default Home;