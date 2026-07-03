import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SpeedTest from "../features/speedtest/SpeedTest";

function Home() {
  return (
    <>
      <Navbar />
      <SpeedTest />
      <Footer />
    </>
  );
}

export default Home;