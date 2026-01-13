import Header from "@/components/commons/Header/Header";
import Footer from "@/components/commons/Footer/Footer";
import HomePage from "@/components/pages/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
