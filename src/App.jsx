import { useState } from "react";
import "./App.css";
import { GiPaperCrane } from "react-icons/gi";
import { GiGuitar, GiDinosaurRex } from "react-icons/gi";
import { AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { FaHandPeace, FaPatreon, FaDog } from "react-icons/fa";
import { BsFlower1 } from "react-icons/bs";
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
          <h1 className="">KaneOrigamis</h1>
          <GiPaperCrane color={"gray"} size={150} />
          <p className=" fs-5">
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
          <h1 className="">História</h1>
          <p className=" fs-5">
            Recentemente, uma velha guitarra entrou em voga no mercado novamente
            após um integrante de uma banda musical que eu gosto incitar sua
            circulação.
          </p>
        </div>
      </div>
      <div className="p-5 third-section vw-100">
        <div className="d-flex justify-content-center flex-column align-items-center col-12 col-md-4 mx-auto gap-2">
          <h1 className="">Objetivo</h1>
          <p className=" fs-5">
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
        <div className="d-flex justify-content-center flex-column align-items-center col-12 col-md-4 mx-auto">
          <h1 className="">Hobbie</h1>
          <p className=" fs-5">
            Para alcançar meu objetivo estou disposto a compartilhar um hobbie
            meu convosco, os origamis.
          </p>
        </div>
      </div>
      <div className="p-5 fifth-section vw-100">
        <h1 className="">Origami</h1>
        <GiPaperCrane color={"white"} size={100} />
      </div>
      <div className="p-5 sixth-section vw-100 ">
        <h1 className="">Origami</h1>
        <GiPaperCrane color={"white"} size={100} />
      </div>
      <footer className="col-12 d-flex justify-content-around flex-column flex-md-row align-items-center align-items-md-start p-5 gap-5">
        <div className="d-flex flex-column justify-content-center align-items-center my-5 my-md-0">
          <h4 className="mb-4">Social Media</h4>
          <AiFillInstagram size={40} />
          <AiFillFacebook size={40} />
          <AiFillYoutube size={40} />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-5 my-md-0">
          <h4 className="mb-4">Support me</h4>
          <FaPatreon size={40} />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center my-5 my-md-0">
          <h4 className="mb-4">My origamis</h4>
          <FaDog size={40} />
          <BsFlower1 className="my-3" size={40} />
          <GiDinosaurRex size={40} />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-md-0 my-5">
          <FaHandPeace size={70} />
          <h2>Paz!</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
