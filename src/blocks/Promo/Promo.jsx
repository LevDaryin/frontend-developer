import { Wrapper } from '../Wrapper';
import { Button } from '../../ui/Button';

import styles from './Promo.module.scss';

const Promo = () => {
  return (
    <section className={styles.promo} id='promo'>
      <Wrapper>
        <div className={styles.block}>
          <h2 className={styles.secondHeader}>Меня зовут <span className='attractiveColor'>Лев</span></h2>
          <h1 className={styles.firstHeader}>Я <span className='attractiveColor'>frontend</span>-разработчик из Москвы</h1>
          <div className={styles.buttonsBlock}>
            <Button type={'fill'} href={'#portfolio'}>Портфолио</Button>
            <Button type={'stroke'} href={'#about'}>Обо мне</Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export { Promo };