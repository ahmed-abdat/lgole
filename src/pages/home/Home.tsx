import "./home.css";
import Header from "@/layout/Header";
import Hero from "@/layout/Hero";
import {InputForm} from "@/layout/Form";
function Home() {
  return (
    <main className="main">
      <Header />
      <section className="px-2">
      <InputForm />
      </section>
      <Hero />
    </main>
  );
}

export default Home;
