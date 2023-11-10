const Hero = () => {
  const back = "./equipment/back.jpeg";

  const backgroundImageStyle = {
    paddingTop: 150,
    background: `url(${back}) center/cover no-repeat`,
    height: "100vh",
  };

  return <div style={backgroundImageStyle}></div>;
};

export default Hero;