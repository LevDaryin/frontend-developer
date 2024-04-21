import { Wrapper } from '../Wrapper';
import { Social } from "../../components/Social/Social";

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.footerBlock}>
          <div className={styles.footerItem + " " + styles.social}>
            <h4 className='secondDescriptor'>Социальные сети:</h4>
            <Social />
          </div>
          <div className={styles.footerItem + " " + styles.dividerWrapper}><div className={styles.divider} /></div>
          <div className={styles.footerItem + " " + styles.links}>
            <h4 className='secondDescriptor'>Контактные данные:</h4>
            <a className='link' href='mailto:rumataeston@gmail.com'>rumataeston@gmail.com</a>
            <a className='link' href='tel:+79998827752'>+7(999) 882-77-52</a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export { Footer };
