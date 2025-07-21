import { useRef } from "react"
import { Button } from "../Button";

export function FilterForm({handleFilter}){
    const inputRef = useRef(null);
    const selectRef = useRef(null);
    const formRef = useRef(null);

    const handlerChange = (event) => {
        event.preventDefault();
        const value = inputRef.current.value.trim();
        
        handleFilter({
            field: selectRef.current.value, 
            value: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        })
    }

    const handleReset = () => {
        formRef.current.reset();
        handleFilter({
            field: null, 
            value: null
        })
    }

    return (
        <form 
            ref={formRef}
            className="flex items-center gap-[20px] p-[10px] bg-(--dark) max-sm:flex-wrap"
        >
            <svg className="w-[20px] fill-(--gray)" viewBox="0 0 24 24">
                <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z">
                </path>
            </svg>
            <select 
                ref={selectRef}
                onChange={handlerChange} 
                name="key" 
                className="rounded-lg border border-(--gray) p-[10px] cursor-pointer hover:text-(--blue) max-sm:w-[calc(100%-40px)]"
            >
                <option value="lastName">Фамилия</option>
                <option value="firstName">Имя</option>
            </select>
            <input
                ref={inputRef}
                onChange={handlerChange} 
                className="min-w-[130px] p-[5px] bg-(--gray) rounded-lg border border-transparent hover:border-(--light) max-sm:w-[calc(100%-55px)]"
                type="text"
                name="value"
            />
            <Button handleClick={handleReset}/>
    </form>
  )
}