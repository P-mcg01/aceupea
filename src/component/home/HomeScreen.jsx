import Navbar from "../ui/Navbar";

const HomeScreen = async () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <h1>CIENCIAS DE LA EDUCACIÓN</h1>
            <h4>Rumbo a la excelencia academica</h4>

            <button>Seguir explorando</button>
          </div>
        </div>

        <div id="webgl"></div>
      </div>
    </>
  );
};

export default HomeScreen;
