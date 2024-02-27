import { CartCounter } from '@/shopping-cart/components';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Un simple contador',
}


const CountPage = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  )
}

export default CountPage