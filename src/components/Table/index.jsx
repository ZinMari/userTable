import React from "react"
import { useState, useEffect } from "react";
import { Th } from "../Th";
import { Tr } from "../Tr";
import { Td } from "../Td";
import { FilterForm } from "../FilterForm";
import { Modal } from "../Modal";


export function Table(){
  const [users, setUsers] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("not");
  const [filterField, setFilterField] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [idUser, setIdUser] = useState(null);

  const fetchData = (field, order, currentPage, filter, filterValue) => {
    let url = "https://dummyjson.com/users";
    const limit = `&limit=5&skip=${currentPage}`

    if(filter && filterValue) {
      url += `/filter?key=${filter}&value=${filterValue}${limit}`
    } else {
      url += `?limit=5&skip=${currentPage}`
    }   

    if (field) {
      url += `&sortBy=${field}`;
    }

    if (order) {
      url += `&order=${order}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((result) => setUsers(result.users));
  };

  useEffect(() => {
    fetchData(sortField, sortOrder, currentPage, filterField, filterValue);
  }, [sortField, sortOrder, currentPage, filterField, filterValue]);

  const handleSort = ({sortBy}) => {
    let order;

    if(sortBy === sortField){
      if(sortOrder === 'asc'){
        order = "desc";
      } else if (sortOrder === 'desc') {
        sortBy=null;
        order="not";
      }
    } else {
      order = "asc"
    }

    setSortOrder(order);
    setSortField(sortBy);
  };

  const handleFilter = ({field, value}) => {
    setFilterField(field)
    setFilterValue(value)
  }

  const handleNext = ()=>{
    setCurrentPage(currentPage=> currentPage+=5);
  }

  const handlePrev = ()=>{
    setCurrentPage(currentPage=> currentPage-=5);
  }

  const handlerGetUserId = (userId) => {
    setIdUser(userId)
  }

  const handlerCloseModal = () => {
    setIdUser(null)
  }

  const columns = [
    {
      title: "Фамилия",
      sortField: "lastName",
    },
    {
      title: "Имя",
      sortField: "firstName"
    },
    {
      title: "Отчество",
      sortField: "maidenName"
    },
    {
      title: "Возраст",
      sortField: "age",
    },
    {
      title: "Пол",
      sortField: "gender",
    },
    {
      title: "Номер телефона",
      sortField: "phone",
    },
    {
      title: "Email",
    },
    {
      title: "Страна",
    },
    {
      title: "Город",
    },
  ]

  return (
    <div className="flex-row p-[50px] bg-(--light-dark)">
      <FilterForm handleFilter={handleFilter}/>
      <div className="w-full overflow-auto p">
        <table className="p-[10px] min-w-[1300px] bg-(--dark)" cellPadding="5" cellSpacing="0">
          <thead>
            <Tr>
              {columns.map(item => (
                <Th
                  order={item.sortField === sortField && sortOrder}
                  handleSort={item.sortField && handleSort} 
                  sortBy={item.sortField}
                  key={item.title+item.sortField}
                >
                  {item.title}
                </Th>
              ))}
            </Tr>
          </thead>
          <tbody>
              {users.map((user, index) => (
                <Tr handler={handlerGetUserId} key={index} userId={user.id}>
                  <Td>{user.lastName}</Td>
                  <Td>{user.firstName}</Td>
                  <Td>{user.maidenName}</Td>
                  <Td>{user.age}</Td>
                  <Td>{user.gender}</Td>
                  <Td>{user.phone}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.address.country}</Td>
                  <Td>{user.address.city}</Td>
                </Tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-x-[20px] p-[10px] text-2xl font-bold  bg-(--dark)">
          <span>{`${currentPage === 0 ? 1 : currentPage}-${currentPage+5}`}</span>
          <button className="cursor-pointer disabled:cursor-not-allowed" disabled = {currentPage === 0} onClick={handlePrev}>prev</button>
          <button className="cursor-pointer disabled:cursor-not-allowed" disabled = {users.length < 5} onClick={handleNext}>next</button>
      </div>
      {idUser && <Modal handlerClose={handlerCloseModal} data={users.find(user => user.id === idUser)}/>}
    </div>
  )
}