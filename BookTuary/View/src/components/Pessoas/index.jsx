import React from "react";
import Usuariophoto from "../../assets/user01.svg";
import Usuariophoto2 from "../../assets/user02.svg";

function Pessoas() {
  return (
    <div>
      <h1>Pessoas que talvez você conheça</h1>
      <div>
        <div>
          <img src={Usuariophoto2} alt="User" />
        </div>
        <div>
          <p>Leo</p>
          <p>@leo3o</p>
        </div>
        <div>
          <button>Seguir</button>
        </div>
      </div>
    </div>
  );
}

export default Pessoas;
