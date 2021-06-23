const Home = () => {
  return (
    <div className="home-wrapper">
      <h1 className="main-heading color-heading">CASA Website</h1>
      <div className="home">
        <h1>Hallo Ihr Lieben!</h1>
        <br />
        <h2>Hier entsteht die Internetpräsenz vom</h2>
        <br />
        <div id="logo-wrapper">
          <h1 className="logo">
            <span className="logo_clr1">C</span>
            <span className="logo_clr2">A</span>
            <span className="logo_clr3">S</span>
            <span className="logo_clr4">A</span>
          </h1>
        </div>

        <img
          className="casa-image"
          src={`${process.env.PUBLIC_URL}/casa.jpg`}
          alt="Casa von innen"
        />
      </div>
    </div>
  );
};

export default Home;
