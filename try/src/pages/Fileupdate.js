import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";

const Update = () => {
  const [ProductItems, setProductItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5500/getdata`)
      .then((res) => res.json())
      .then((data) => setProductItems(data))
      .catch((error) => {
        console.error('Fetch error:', error);
        toast.error('Failed to load data');
      });
  }, []);

const DeleteItems = (id) => {
    fetch(`http://localhost:5500/delepop/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error('Deleted successfully');
        setProductItems((prevProductItems) =>
          prevProductItems.filter((Item) => Item._id !== id)
        );
      })
      .catch((error) => {
        console.error('Delete error:', error);
        toast.error('Failed to delete item');
      });
  };

  return (
    <div className='card table2'>
      <div className='card-body'>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Roll no</th>
              <th>Student name</th>
              <th>Father name</th>
              <th>Date of birth</th>
              <th>Mobile no</th>
              <th>Email id</th>
              <th>password</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Course</th>
              <th>City</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {ProductItems?.map((Item) => (
              <tr key={Item._id}>
                <td>{Item.rollno}</td>
                {/* <td><img src={Item.stdno} alt=''/></td> */}
                <td>{Item.stdno}</td>
                <td>{Item.fathername}</td>
                <td>{Item.dateofbirth}</td>
                <td>{Item.mobileno}</td>      
                 <td>{Item.email}</td>
                 <td>{Item.password}</td>
                  <td>{Item.gender}</td>
                   <td>{Item.Department}</td>
                    <td>{Item.crs}</td>
                    <td>{Item.cty}</td>
                    <td>{Item.address}</td>
                <td>{Item.quantity}</td>
                <td>
                  <button
                    className='table3'
                    onClick={() => DeleteItems(Item._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${Item._id}`}>
                    <button>
                      <FiEdit />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Update;




