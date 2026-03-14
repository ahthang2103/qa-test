// Components
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col font-google-sans">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center px-6">
        {/* Add your content here */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
