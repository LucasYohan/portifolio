import "./Banner.css";

function Banner({ theme }) {
  return (
    <div className={`banner-content ${theme}`}>
      <div className="banner-itens">
        <h1>Seja bem vindo ao meu portifolio</h1>
      </div>
    </div>
  );
}

export default Banner;
