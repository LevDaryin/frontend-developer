import { Wrapper } from "../Wrapper";
import { Social } from "../../components/Social/Social";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <Wrapper>
        <div className={styles.block}>
          <div className={styles.description}>
            <h3 className="descriptor">
              Немного <span className="attractiveColor">обо мне</span>:
            </h3>
            <p className={styles.text}>
              Моё имя <span className="attractiveColor">Лев</span>, мне{" "}
              <span className="attractiveColor">20</span> лет. И я{" "}
              <span className="attractiveColor">Frontend-разработчик</span>,
              живущий в <span className="attractiveColor">Москве</span>. Эта
              профессия мне по душе. Я часто практикуюсь и постоянно совершенствую
              свои навыки.
            </p>
          </div>
          <img
            className={styles.photo}
            src="/assets/images/my-photo.jpg"
            alt="My photo"
          />
          <div className={styles.socialBlock}>
            <h3 className="descriptor">Найти меня можно тут:</h3>
            <Social />
          </div>
        </div>
      </Wrapper>
    </section>     
  );
};

export { About };
