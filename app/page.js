
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "CPA Certified Tax Services in Canada | Eva Tax Solutions",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}
