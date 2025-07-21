export function Tr({handler, children, userId}){
    const handlerClick = ()=> {
        handler(userId)
    }
    return (
        <tr onClick={handler && handlerClick} className="border-[2px] border-(--gray) h-[50px]">
            {children}
        </tr>
    )
}