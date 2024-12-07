import { AnimatePresence } from 'motion/react';
import { Item } from './item';
import { List } from './list';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function Store() {
  const { id } = useParams();

  return (
    <div className='home'>
      <List id={id} />
      <AnimatePresence>
        {id && <Item id={id} key={id} single />}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/:id' element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}
