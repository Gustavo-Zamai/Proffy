import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem () {
  return (
        <article className="teacher-item">
          <header>
            <img src='https://avatars.githubusercontent.com/u/92702717?v=4' alt="" />
            <div>
              <strong>Gustavo</strong>
              <span>Materia</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/>
            <br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type='button'>
              <img src={whatsAppIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>

  )
}

export default TeacherItem;