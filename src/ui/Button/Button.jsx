import styles from './Button.module.scss';

const Button = ({children, type, href}) => {
  const buttonClass = (type === 'fill') ? styles.fillButton : styles.strokeButton;

  return (
    <a className={styles.button + ' ' + buttonClass} href={href}>
      <span className={styles.buttonText}>{children}</span>
    </a>
  );
};

export { Button };