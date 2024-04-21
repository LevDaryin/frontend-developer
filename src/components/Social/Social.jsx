import styles from './Social.module.scss';

const Social = () => {
  return (
    <ul className={styles.social}>
      <li>
        <a href="https://t.me/lio_987">
          <img
            src="/assets/icons/social/telegram.svg"
            alt="teleram logo"
          />
        </a>
      </li>
      <li>
        <a href="https://vk.com/garusplk">
          <img src="/assets/icons/social/vk.svg" alt="vk logo" />
        </a>
      </li>
      <li>
        <a href="https://github.com/LevDaryin">
          <img
            src="/assets/icons/social/github.svg"
            alt="github logo"
          />
        </a>
      </li>
    </ul>
  );
};

export { Social };