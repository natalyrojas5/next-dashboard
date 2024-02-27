import { SimpleWidget } from '@/components'
import { WidgetsGrid } from '../../../components/Dashboard/WidgetsGrid';

export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Das',
};

const MainPage = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Información</span>
      <WidgetsGrid />
    </div>
  )
}

export default MainPage