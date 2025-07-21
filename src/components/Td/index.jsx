import React from "react"
import { useState, useEffect } from "react";


export function Td({children}){
    return <td className="border-[2px] border-(--gray) p-[5px]">{children}</td>
}