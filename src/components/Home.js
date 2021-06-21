const Home = () => {
  return (
    <div className="home-wrapper">
      <h1 className="main-heading">CASA Website</h1>
      <div className="home">
        <h1>Hallo Ihr Lieben!</h1>
        <h2>Hier entsteht die Internetpräsenz vom</h2>
        <h1>CASA.</h1>

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
