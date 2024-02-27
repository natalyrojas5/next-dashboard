"use client";

import { useAppSelector } from '@/store'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5';


export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count)
  return (
    <div className='flex flex-wrap p-2 items-center justify-center'>
      <SimpleWidget
        label={`${count}`}
        title="Contador"
        subTitle='Productos agregados'
        href={"/dashboard/counter"}
        icon={<IoCartOutline size={50} className="text-blue-500" />}
      />
    </div>
  )
}
