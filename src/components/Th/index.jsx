import cl from "classnames"
import React from "react"

export function Th({sortBy, handleSort, order, children}){

  const handleClick = ()=>{
    handleSort({sortBy})
  }
  
    return (
      <th className="border-[2px] border-(--gray) p-[5px] cursor-pointer" onClick={handleSort && handleClick}>
        <p className="flex justify-between">
          {children}
          {
            sortBy &&
            <svg className={cl("max-w-[20px]  duration-100", {
              'fill-(--gray)': order == "asc",
              'fill-(--gray) rotate-[180deg]': order == "desc",
              'fill-(--light-dark)': order == "not",
            })} viewBox="0 0 24 24">
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
          </svg>
          }
        </p>
      </th>
)
}