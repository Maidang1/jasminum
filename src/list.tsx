import { jasmines } from './data';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

function Card({
  id,
  name,
  shortDescription,
  theme,
}: {
  id: string;
  name: string;
  shortDescription: string;
  theme: string;
}) {
  return (
    <li className={`card ${theme}`}>
      <div className='card-content-container'>
        <motion.div className='card-content' layoutId={`card-container-${id}`}>
          <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
            style={{
              backgroundImage: `url(https://cn.bing.com/th?id=OHR.ArraialdoCabo_ZH-CN6202620711_UHD.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: 420,
            }}
          />
          <motion.div
            className='title-container'
            layoutId={`title-container-${id}`}
          >
            <h2>{name}</h2>
            <span className='category'>{shortDescription}</span>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ id }: { id?: string }) {
  return (
    <ul className={`card-list ${id ? 'single' : ''}`}>
      {jasmines.map((card) => (
        <Card key={card.id} {...card} theme='' />
      ))}
    </ul>
  );
}
