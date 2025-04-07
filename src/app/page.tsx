

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

import Main from "@/app/components/main";
import Portfolio from "@/app/components/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black px-4 py-6">
      <header className="fixed top-0 left-0 w-full z-50">
          <Header />
        </header>
      <div className="opacity-0 h-[10lvh]"/>
        

      <Main />
      <Portfolio />

      <footer className="flex self-center justify-center w-full pt-14">
        <Footer />
      </footer>
    </div>
  );
}
