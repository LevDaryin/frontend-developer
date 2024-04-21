import { Wrapper } from "../Wrapper";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const projects = [
    {
      name: 'ООО "Группа правовед"',
      description: 'Сайт компании, предоставляющей юридические услуги. Расположенна в городе Ставрополь.',
      link: 'https://github.com/LevDaryin/Lawyer-group',
      imageLink: '/assets/images/portfolio/lawyer.png',
      imageAlt: 'сайт юридической компании',
    },
    {
      name: 'Салон электроэпиляции',
      description: 'Сайт салона по удалению волос на теле.',
      link: 'https://github.com/LevDaryin/ElectroDarya',
      imageLink: '/assets/images/portfolio/second.png',
      imageAlt: 'сайт салона электроэпиляции',
    },
    {
      name: 'MegaFilms',
      description: 'Сайт на котором можно посмотреть информацию о каком-либо фильме.',
      link: 'https://github.com/LevDaryin/mega-films',
      imageLink: '/assets/images/portfolio/megafilms.png',
      imageAlt: 'сайт для просмотра информации о фильмах',
    },
    {
      name: 'RunSmart',
      description: 'Сайт для подбора пульсометра.',
      link: 'https://github.com/LevDaryin/Pulse',
      imageLink: '/assets/images/portfolio/pulse.png',
      imageAlt: 'сайт для подбора пульсометра',
    },
    {
      name: 'Uber',
      description: 'Сайт компании, предоставляющей услуги такси.',
      link: 'https://github.com/LevDaryin/UBER',
      imageLink: '/assets/images/portfolio/uber.png',
      imageAlt: 'сайт такси',
    },
  ]

  return (
    <section className={styles.portfolio} id="portfolio">
      <Wrapper>
        <h3 className="descriptor">
          Моё <span className="attractiveColor">портфолио</span>:
        </h3>
        <ul className={styles.portfolioBlock}>

          {projects.map((item) => (
            <li className={styles.projectWrapper} key={item.name}>
              <img
                src={item.imageLink}
                alt={item.imageAlt}
              />
              <div className={styles.overlay}>
                <div className={styles.lable}>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <a href={item.link} className={`${styles.portfolioLink} link`}>Ссылка на github</a>
                </div>
              </div>
            </li>
          ))}

        </ul>
      </Wrapper>
    </section>
  );
};

export { Portfolio };
