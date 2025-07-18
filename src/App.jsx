import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const fetchData = (field, order) => {
    let url = "https://dummyjson.com/users";

    if (field) {
      url += `?sortBy=${field}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((result) => setUsers(result.users));
  };

  useEffect(() => {
    fetchData(sortField, sortOrder);
  }, [sortField, sortOrder]);

  console.log(users);

  // сортировки по полям ФИО, возрасту, полу и номеру телефона

  const handleSort = (field) => {
    let order = null;

    if (sortField !== field || !sortOrder || sortOrder === null) {
      order = "asc";
    } else if (sortOrder === "asc") {
      order = "desc";
    } else if (sortOrder === "desc") {
      order = null; // без сортировки
      field = null;
    }

    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div>
      <h1>Таблица пользователей</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th onClick={() => handleSort("lastName")}>Фамилия</th>
            <th onClick={() => handleSort("firstName")}>Имя</th>
            <th onClick={() => handleSort("maidenName")}>Отчество</th>
            <th onClick={() => handleSort("age")}>Возраст</th>
            <th onClick={() => handleSort("gender")}>Пол</th>
            <th onClick={() => handleSort("phone")}>Номер телефона</th>
            <th>Email</th>
            <th>Страна</th>
            <th>Город</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.address.country}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
