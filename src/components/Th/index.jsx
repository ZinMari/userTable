import cl from "classnames";

export function Th({ sortBy, handleSort, order, isResize, children }) {
  const classResize = "min-w-[50px] overflow-hidden resize-x";
  const handleClick = () => {
    handleSort({ sortBy });
  };

  return (
    <th
      className="border-[2px] border-(--gray) p-[5px] cursor-pointer h-[50px]"
      onClick={handleSort && handleClick}
    >
      <p
        className={cl(
          "flex justify-between min-w-[100%] min-h-[100%] items-center",
          isResize && classResize
        )}
      >
        {children}
        {sortBy && (
          <svg
            className={cl("max-w-[20px]  duration-100", {
              "fill-(--gray)": order == "asc",
              "fill-(--gray) rotate-[180deg]": order == "desc",
              "fill-(--light-dark)": order == "not",
            })}
            viewBox="0 0 24 24"
          >
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
          </svg>
        )}
      </p>
    </th>
  );
}
