import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import "@/styles/globals.css";
// comment change to test PR
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
