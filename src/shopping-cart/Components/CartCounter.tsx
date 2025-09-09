import React from 'react'
import { useState } from "react";

interface Props {
    value?: number;
}

export const CartCounter = ({ value = 0}:Props) => {

  const [count, setCount] = useState(value);
  return (
    <>
        <span className="text-8xl mt-4">{ count }</span>
        <div className="mt-6">
            <button onClick={ () => setCount( count + 1 ) } className="px-4 py-2 bg-blue-500 text-white rounded mr-2">+1</button>
            <button onClick={ () => setCount( count - 1 ) } className="px-4 py-2 bg-red-500 text-white rounded">-1</button>
        </div>
    </>
  )
}
