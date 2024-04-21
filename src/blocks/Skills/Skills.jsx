import { Wrapper } from '../Wrapper';

import styles from './Skills.module.scss';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      src: '/assets/icons/skills/html.svg',
      descr: 'HTML5',
    },
    {
      name: 'CSS',
      src: '/assets/icons/skills/css.svg',
      descr: 'CSS',
    },
    {
      name: 'JavaScript',
      src: '/assets/icons/skills/javascript.svg',
      descr: 'JavaScript',
    },
    {
      name: 'TypeScript',
      src: '/assets/icons/skills/typescript.svg',
      descr: 'TypeScript',
    },
    {
      name: 'React',
      src: '/assets/icons/skills/react.svg',
      descr: 'React',
    },
    {
      name: 'Redux',
      src: '/assets/icons/skills/redux.svg',
      descr: 'Redux',
    },
    {
      name: 'Vue',
      src: '/assets/icons/skills/vue.svg',
      descr: 'Vue',
    },
    {
      name: 'TailwindCSS',
      src: '/assets/icons/skills/tailwind.svg',
      descr: 'Tailwind CSS',
    },
  ];

  return (
    <section className={styles.skills} id='skills'>
      <Wrapper>
        <h3 className="descriptor">Список моих <span className='attractiveColor'>навыков</span> для создания удобных и красивых веб-сайтов:</h3>
        <div className={styles.skillsWrapper}>
          <div className={styles.skillsIcons}>
            {skills.map((item => (
              <span className={styles.skillBg} key={item.name}> 
                <img src={item.src} alt={item.descr} />
                <span className={styles.tooltip}>{item.descr}</span>
              </span>
            )))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
};

export { Skills };