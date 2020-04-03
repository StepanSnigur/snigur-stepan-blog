import React from 'react'
import Layout from '../components/Layout/layout'
import '../page-styles/about-page.css'

const AboutPage = () => {
  return (
    <Layout isRedirectToMainPage={true}>
      <div className="about-page">
        <h1>Обо мне</h1>
        <p>Здравствуйте, меня зовут Степан Снигур. Я front-end developer, работаю в этой сфере с 2018 года</p>
        <p>Работаю на фриланс-биржах, но планирую устроиться в web-студию. Пищу в основном на React в связке с Redux, но также мне нравится Vue.js</p>
        <p>В свободное время я изучаю новые технологии, практикуюсь в английском языке и занимаюсь активными видами спорта</p>
        <p><a href="https://snigur-stepan.site/">Мой сайт-визитка</a> и <a href="https://github.com/StepanSnigur">профиль на Github</a></p>
        <p>Лучший способом связаться со мной - моя почта <a href="mailto:snigur-stepan@mail.ru">snigur-stepan@mail.ru</a></p>
      </div>
    </Layout>
  )
}

export default AboutPage;
