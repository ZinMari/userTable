import cl from "classnames"

export function Button({className, handleClick}){
    return (
        <button 
            onClick={handleClick} 
            type="button" 
            className={cl(className, "p-[5px] w-[35px] h-[35px] rounded-full cursor-pointer hover:bg-(--gray) transition-colors")}
        >
            <svg className="fill-(--blue)" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                </path>
            </svg>
        </button>
    )
}