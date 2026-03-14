// Components
import { Header } from '@/app/components/Header';
import { Introduction } from '@/app/components/Introduction';
import { Footer } from '@/app/components/Footer';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col font-google-sans">
      <Header />

      <main className="flex flex-1 flex-col items-center px-6">
        <Introduction />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
