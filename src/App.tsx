import { AudioButton } from './components/AudioButton/AudioButton';
import { Footer } from './components/Footer/Footer';
import { GithubCorner } from './components/GithubCorner/GithubCorner';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { VideoBackground } from './components/VideoBackground/VideoBackground';

function App() {
  return (
    <div className="relative h-dvh">
      <VideoBackground />
      <div className="relative z-10 flex flex-col h-full">
        <GithubCorner />
        <Navbar />
        <Hero />
        <AudioButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;
