'use client';

import { CartCounter } from "@/shopping-cart/index.";


export default function CounterPage() {

 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <span className="text-6xl font-bold">Productos en el carrito</span>
      <CartCounter value={0} />
    </div>
  );
}