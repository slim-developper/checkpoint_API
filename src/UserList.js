import React, { useEffect, useState } from "react";
import axios from "axios";
import './UserList.css';

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
        <h1> List of Names</h1>
      <table className="container">
      <tr>
        <th> name</th> 
        <th>username</th>
        <th>PhoneNumber     </th>
          </tr>


        {data.map(item => (
         
          <tr>
<td>{item.name}</td>
<td>{item.username}</td>
<td>{item.phone}</td>
          </tr>

        
        ))}
      </table>
    </div>
  );
}
