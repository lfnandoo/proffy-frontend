import React from "react";
import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/64756114?s=460&u=9a6e9ca86ae006756b38815a79ed5a23b08eb168&v=4"
          alt="Luiz Fernando"
        />
        <div>
          <strong>Luiz Fernando</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
        voluptatibus consequatur. Facere officia recusandae similique sit
        ducimus dolorum atque, veniam quaerat repellat, nesciunt error explicabo
        doloribus animi amet, qui illo.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
