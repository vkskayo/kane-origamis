import { useState } from "react";
import "./App.css";
import { GiPaperCrane } from "react-icons/gi";
import { GiGuitar } from "react-icons/gi";

const imgSize = {
  width: 200,
  height: 186,
};

function App() {
  return (
    <div className="App">
      <div className="p-5 first-section vw-100 d-flex justify-content-around">
        <div className="col-md-4 col-0 d-md-flex d-none justify-content-lg-center justify-content-start align-items-start">
          <img
            className="rounded"
            style={imgSize}
            src="https://i.pinimg.com/originals/af/6d/8c/af6d8c88ba2a5f96fa58b3d4a3d7016b.jpg"
          />
        </div>

        <div className="d-flex justify-content-center flex-column align-items-center col-12 col-md-4 mx-auto">
          <h1 className="text-light">KaneOrigamis</h1>
          <GiPaperCrane color={"white"} size={100} />
          <p className="text-white fs-5">
            Sejam bem vindos ao meu espaço de criação. Sou um mero estudante do
            ensino médio e venho anonimamente fazer um apelo para que me ajudem
            a alcançar um objetivo.
          </p>
        </div>
        <div className="col-md-4 col-0 d-md-flex d-none justify-content-lg-center justify-content-end align-items-end">
          <img
            className="rounded"
            style={imgSize}
            src="https://www.educlub.com.br/wp-content/uploads/2022/05/urso-de-papel-realista.jpg"
          />
        </div>
      </div>
      <div className="p-5 second-section vw-100">
        <div className="d-flex justify-content-center flex-column align-items-center col-12 col-md-4 mx-auto">
          <h1 className="text-light">História</h1>
          <p className="text-white fs-5">
            Recentemente, uma velha guitarra entrou em voga no mercado novamente
            após um integrante de uma banda musical que eu gosto incitar sua
            circulação.
          </p>
        </div>
      </div>
      <div className="p-5 third-section vw-100">
        <div className="d-flex justify-content-center flex-column align-items-center col-12 col-md-4 mx-auto gap-2">
          <h1 className="text-light">Objetivo</h1>
          <p className="text-white fs-5">
            Eu desejo comprar esta guitarra, entretanto, possuo apenas 300
            dólares e atualmente seu custo gira em torno de 500 dólares.
          </p>
          <div className="d-flex gap-4">
            <div className="bar">
              <div className="progress-bar"></div>
            </div>
            <GiGuitar size={40} />
          </div>
        </div>
      </div>
      <div className="p-5 fourth-section vw-100">
        <h1 className="text-light">Hobbie</h1>
        <GiPaperCrane color={"white"} size={100} />
      </div>
      <div className="p-5 fifth-section vw-100">
        <h1 className="text-light">Origami</h1>
        <GiPaperCrane color={"white"} size={100} />
      </div>
      <div className="p-5 sixth-section vw-100 ">
        <h1 className="text-light">Origami</h1>
        <GiPaperCrane color={"white"} size={100} />
      </div>
    </div>
  );
}

export default App;
