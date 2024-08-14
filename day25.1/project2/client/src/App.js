import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemservices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [currentItem, setCurrentItem] = useState({ empid: '', username: '', age: '', email: '', address: '', salary: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddItem = async () => {
    try {
      const response = await addItem(newItem);
      setItems([...items, response.data]);
      setNewItem({ empid: '', username: '', age: '', email: '', address: '', salary: '' });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleUpdateItem = async (id) => {
    try {
      const response = await updateItem(id, currentItem);
      setItems(items.map(item => (item._id === id ? response.data : item)));
      setEditingItem(null);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({
      ...prevState,
      [name]: value
    }));
    setCurrentItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
    <div>
      <h1 style={{textAlign:'center'}}>CRUD Operations</h1>
      <h2 style={{textAlign:'center'}}>Add New Item</h2>
      <input
        type="number"
        name="empid"
        value={newItem.empid}
        onChange={handleChange}
        placeholder="Enter empid"
      />
      <input
        type="text"
        name="username"
        value={newItem.username}
        onChange={handleChange}
        placeholder="Enter username"
      />
      <input
        type="number"
        name="age"
        value={newItem.age}
        onChange={handleChange}
        placeholder="Enter age"
      />
      <input
        type="email"
        name="email"
        value={newItem.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <input
        type="text"
        name="address"
        value={newItem.address}
        onChange={handleChange}
        placeholder="Enter address"
      />
      <input
        type="number"
        name="salary"
        value={newItem.salary}
        onChange={handleChange}
        placeholder="Enter salary"
      />
      <button onClick={handleAddItem}>Add</button>

      <h2 style={{textAlign:'center'}}>Items List</h2>
     <table
  style={{
    borderCollapse: 'collapse', 
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: '2px',
    backgroundColor: 'pink',
    marginLeft: '170px',
    width: '70%' // Optional: Adjust table width if needed
  }}
>
  <thead>
    <tr style={{ backgroundColor: 'red' }}>
      <th style={{ border: '1px solid black', padding: '8px' }}>Empid</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Username</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Address</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Salary</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
    </tr>
  </thead>
  <tbody style={{ backgroundColor: 'white', color: 'navy' }}>
    {items.map(item => (
      <tr key={item._id}>
        {editingItem === item._id ? (
          <>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <input type="number" name="empid" value={currentItem.empid} onChange={handleEditChange} />
            </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <input type="text" name="username" value={currentItem.username} onChange={handleEditChange} />
            </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <input type="number" name="age" value={currentItem.age} onChange={handleEditChange} />
            </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <input type="email" name="email" value={currentItem.email} onChange={handleEditChange} />
            </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <input type="text" name="address" value={currentItem.address} onChange={handleEditChange} />
            </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <input type="number" name="salary" value={currentItem.salary} onChange={handleEditChange} />
            </td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <button onClick={() => handleUpdateItem(item._id)}>Save</button>
              <button onClick={() => setEditingItem(null)}>Cancel</button>
            </td>
          </>
        ) : (
          <>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.empid}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.username}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.age}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.address}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.salary}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>
              <button onClick={() => { setEditingItem(item._id); setCurrentItem(item); }}>Edit</button>
              <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
            </td>
          </>
        )}
      </tr>
    ))}
  </tbody>
</table>

    </div>
      <div className="container-fluid p-5 my-5" style={{ background: 'black' }}>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{ background: 'black' }}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ background: 'black' }}>
          <div className="d-none d-lg-block">
            <span>Get connected with us on our social networks:</span>
          </div>
        </section>

        <section style={{ background: 'white' }}>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img
                  src="https://www.bytexl.com/assets/images/logo.png"
                  alt="ByteXL Logo"
                  style={{ width: '100px', height: 'auto' }}
                />
                <p>© 2021 Copyright:
                  <a className="text-reset fw-bold" href="https://mdbootstrap.com/">BYTEXL.com</a>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5 className="text-uppercase fw-bold mb-4" style={{ color: 'orange' }}>sales@bytexl.in</h5>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <i className="fa fa-linkedin-square rounded-circle" aria-hidden="true" style={{ fontSize: '25px' }}></i>&nbsp;
                    <i className="fa fa-twitter rounded-circle" aria-hidden="true" style={{ fontSize: '25px' }}></i>&nbsp;
                    <i className="fa fa-facebook-official rounded-circle" aria-hidden="true" style={{ fontSize: '25px' }}></i>&nbsp;
                    <i className="fa fa-instagram rounded-circle" aria-hidden="true" style={{ fontSize: '25px' }}></i>&nbsp;
                  </small>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'orange' }}>
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Home</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Platform</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Careers</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Blogs</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'orange' }}>HEADQUARTERS</h6>
                <p style={{ color: 'grey' }}>
                  KP2 Associates Inc.,<br />
                  4400 State HWY 121,<br />
                  Suite # 300-0088,<br />
                  Lewisville, TX 75056 USA
                </p>
                <p style={{ color: 'white' }}>,dsdcsd,,</p>
                <p style={{ color: 'grey' }}>
                  <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'orange' }}>REGISTERED OFFICE</h6>
                  KP2 Associates Inc.,<br />
                  4400 State HWY 121,<br />
                  Suite # 300-0088,<br />
                  Lewisville, TX 75056 USA
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ background: 'white' }}>
          <p style={{ textAlign: 'center', color: 'black' }}>Designed by SASHIPAVAN</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default App;