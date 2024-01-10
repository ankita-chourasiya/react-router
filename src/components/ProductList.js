import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductList() {
  const location = useLocation();
  const apiData = location.state.apiData;

  return (
    <>
      <h1>Product List</h1>
      <Link to="/create_post"><button>Create New Post</button></Link>
      <br />
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((dataObj) => (
            <tr key={dataObj.id}>
              <td>{dataObj.userId}</td>
              <td>{dataObj.id}</td>
              <td>{dataObj.title}</td>
              <td>{dataObj.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductList;
