import styles from '../styles/skills.module.css';


function Skill({ title, subTitle }) {
  return (
    <div className={styles['skill-wrapper']}>
      <div className={styles['skill-list-tile']}>
        <span className={styles['skill-title']}>{title}</span>
        <span className={styles['skill-leading']}>{subTitle}</span>
      </div>
    </div>
  );
}

export default function Skills() {
  const skills = [
    {
      title: 'Frontend - Flutter, ReactJs',
      subTitle: 'For the past six months, I&apos;ve been developing a web app with flutter.'
    },
    {
      title: 'Backend - Laravel, ExpressJs',
      subTitle: 'This website is built using Laravel, I know it is overkill for a website like this but I plan on adding blog functionality for myself and users as well.'
    },
    {
      title: 'MySQL, MongoDB, Firebase Realtime Database',
      subTitle: 'I&apos;ve extensively worked with MySQL database.'
    },
    {
      title: 'Materialize, Bootstrap, Tailwindcss',
      subTitle: 'This is the first time I&apos;ve used tailwindcss, let me know how I&apos;m doing ;)'
    },
  ];

  return  (
    <section id="work" className="section-main">
      <div className="text-lg md:text-xl lg:font-semibold md:w-3/4 xl:w-2/4 mx-auto leading-8">
        <div className="experience">
          I have been working as a Full Stack Web Developer for just over two years now.
          I primarily use Javascript, Dart and PHP but picking up a
          new framework isn&apos;t a problem. I&apos;m comfortable developing on frontend or
          backend as well as setting up or managing infrastructure. Here are some of the
          technologies I have experience working with.
        </div>

        <div className={styles.skills}>
          {
            skills.map(skill => (
              <Skill 
                key={skill.title}
                title={skill.title} 
                subTitle={skill.subTitle} 
              />
            ))
          }
        </div>
      </div>

      <div className="get-in-touch flex flex-col items-center">
        <a href="#contact">
          <svg className="get-in-touch-icon chevron-double-down w-10 animate-bounce text-green-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
        </a>
        <p className="text-xl font-semibold">Get in touch</p>
      </div>
    </section>
  );
}