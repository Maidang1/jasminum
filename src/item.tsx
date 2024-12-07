import { motion } from 'motion/react';
import { jasmines } from './data';
import { useNavigate } from 'react-router-dom';

export function Item({ id, single }: { id: string; single?: boolean }) {
  const { name, shortDescription, fullDescription, imageUrl } =
    jasmines.find((item) => item.id === id) ?? {};
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: 'auto' }}
        className='overlay'
      />
      <div className='card-content-container open'>
        <motion.div
          className={`card-content ${single ? 'single' : ''}`}
          layoutId={`card-container-${id}`}
        >
          <motion.div
            className='card-image-container'
            layoutId={`card-image-container-${id}`}
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <motion.div
            className='title-container'
            layoutId={`title-container-${id}`}
          >
            <h2>{name}</h2>
            <span className='category'>{shortDescription}</span>
          </motion.div>
          <motion.div
            className='content-container'
            animate
            style={{
              backgroundColor: '#FFF',
              width: '100%',
              padding: '440px 20px 20px 20px',
              minHeight: '100%',
            }}
          >
            {fullDescription}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
