'use client';

import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';
import { useAppSelector } from '../../store';
import { useAppDispatch } from '../../store/index';
import { useEffect } from 'react';

interface Props {
  value: number;
}

export interface CounterReponse {
  method: string;
  count: number;
}

const getApiCounter = async () => {
  const data = await fetch("/api/counter").then((response) => response.json());
  return data
}

export const CartCounter = ({ value }: Props) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  /*
    useEffect(() => {
      dispatch(initCounterState(value));
    }, [dispatch, value])
  */

  useEffect(() => {
    getApiCounter()
      .then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  )
}
