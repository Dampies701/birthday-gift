import React, { useState } from 'react';
import './App.css';

// Tulip images for decorations
const tulipImages = [
  'https://images.unsplash.com/photo-1588535270370-d7fcd2b82fd5',
  'https://images.unsplash.com/photo-1660224503555-f9093f5deae2',
  'https://images.unsplash.com/photo-1660224503542-1133339c0d1c',
  'https://images.pexels.com/photos/287705/pexels-photo-287705.jpeg',
  'https://images.pexels.com/photos/5734338/pexels-photo-5734338.jpeg'
];

// Romantic placeholder images for slideshow
const slideshowImages = [
  'https://images.pexels.com/photos/32439850/pexels-photo-32439850.jpeg',
  'https://images.pexels.com/photos/4830990/pexels-photo-4830990.jpeg',
  'https://images.pexels.com/photos/32325971/pexels-photo-32325971.jpeg',
  'https://images.unsplash.com/photo-1471530090166-fbe1875839c4',
  'https://images.unsplash.com/reserve/165aTVpzTXGMXu1azUdy_IMG_8468.JPG',
  'https://images.unsplash.com/photo-1541385496969-a3edfa5a94ed',
  'https://images.pexels.com/photos/32421600/pexels-photo-32421600.jpeg',
  'https://images.pexels.com/photos/32404924/pexels-photo-32404924.jpeg',
  'https://images.pexels.com/photos/32412444/pexels-photo-32412444.jpeg',
  'https://images.unsplash.com/photo-1472608127515-7a7e160c6ab9',
  'https://images.unsplash.com/photo-1541581870022-09b9a4e61f90',
  'https://images.unsplash.com/photo-1609564842155-98a072fc88b1',
  'https://images.pexels.com/photos/27936622/pexels-photo-27936622.jpeg',
  'https://images.pexels.com/photos/3217513/pexels-photo-3217513.jpeg',
  'https://images.unsplash.com/photo-1591867192864-fed3a1622179',
  'https://images.unsplash.com/photo-1666885181287-004f7ccfc0ae',
  'https://images.unsplash.com/photo-1562337394-37e3adcb9ff5',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
  'https://images.unsplash.com/photo-1494774157365-9e04c6720e47',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70'
];

function PhotoSlideshow() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [messages, setMessages] = useState(Array(20).fill(''));

  const handlePhotoClick = () => {
    setShowMessage(!showMessage);
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % slideshowImages.length);
    setShowMessage(false);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
    setShowMessage(false);
  };

  const updateMessage = (index, message) => {
    const newMessages = [...messages];
    newMessages[index] = message;
    setMessages(newMessages);
  };

  return (
    <div className="photo-slideshow-container">
      <h2 className="section-title">Our Beautiful Memories</h2>
      <div className="slideshow-wrapper">
        <div className="photo-container" onClick={handlePhotoClick}>
          <img 
            src={slideshowImages[currentPhoto]} 
            alt={`Memory ${currentPhoto + 1}`}
            className="slideshow-photo"
          />
          {showMessage && (
            <div className="hidden-message-overlay">
              <div className="hidden-message-box">
                <textarea
                  placeholder="Enter your sweet message here..."
                  value={messages[currentPhoto]}
                  onChange={(e) => updateMessage(currentPhoto, e.target.value)}
                  className="message-textarea"
                />
              </div>
            </div>
          )}
          <div className="photo-click-hint">
            {!showMessage ? 'Click to reveal message' : 'Click to hide message'}
          </div>
        </div>
        
        <div className="slideshow-controls">
          <button onClick={prevPhoto} className="nav-button">
            <img src={tulipImages[1]} alt="Previous" className="tulip-nav-icon" />
            Previous
          </button>
          <span className="photo-counter">{currentPhoto + 1} / {slideshowImages.length}</span>
          <button onClick={nextPhoto} className="nav-button">
            Next
            <img src={tulipImages[1]} alt="Next" className="tulip-nav-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

function LettersSection({ letters, setLetters }) {
  const updateLetter = (index, content) => {
    const newLetters = [...letters];
    newLetters[index] = content;
    setLetters(newLetters);
  };

  return (
    <div className="content-section">
      <h2 className="section-title">Letters from My Heart</h2>
      <div className="letters-grid">
        {letters.map((letter, index) => (
          <div key={index} className="letter-card">
            <h3 className="letter-title">Letter {index + 1}</h3>
            <textarea
              placeholder="Write your heartfelt letter here..."
              value={letter}
              onChange={(e) => updateLetter(index, e.target.value)}
              className="letter-textarea"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PoemsSection({ poems, setPoems }) {
  const updatePoem = (index, content) => {
    const newPoems = [...poems];
    newPoems[index] = content;
    setPoems(newPoems);
  };

  return (
    <div className="content-section">
      <h2 className="section-title">Poetry for You</h2>
      <div className="poems-grid">
        {poems.map((poem, index) => (
          <div key={index} className="poem-card">
            <h3 className="poem-title">Poem {index + 1}</h3>
            <textarea
              placeholder="Share your beautiful poem here..."
              value={poem}
              onChange={(e) => updatePoem(index, e.target.value)}
              className="poem-textarea"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function VirtualGarden() {
  const [flowers, setFlowers] = useState([]);
  const [waterLevel, setWaterLevel] = useState(100);

  const plantFlower = () => {
    if (waterLevel >= 10) {
      const newFlower = {
        id: Date.now(),
        x: Math.random() * 300,
        y: Math.random() * 200,
        growth: 0,
        type: Math.floor(Math.random() * 3)
      };
      setFlowers([...flowers, newFlower]);
      setWaterLevel(prev => prev - 10);
    }
  };

  const waterFlowers = () => {
    setFlowers(flowers.map(flower => ({
      ...flower,
      growth: Math.min(flower.growth + 20, 100)
    })));
    setWaterLevel(prev => Math.max(prev - 5, 0));
  };

  const refillWater = () => {
    setWaterLevel(100);
  };

  return (
    <div className="garden-game">
      <h3 className="game-title">Tulip Garden for You</h3>
      <div className="garden-controls">
        <button onClick={plantFlower} disabled={waterLevel < 10} className="garden-button">
          Plant Tulip 🌱
        </button>
        <button onClick={waterFlowers} disabled={waterLevel < 5} className="garden-button">
          Water Garden 💧
        </button>
        <button onClick={refillWater} className="garden-button">
          Refill Water 🚰
        </button>
        <div className="water-meter">Water: {waterLevel}%</div>
      </div>
      <div className="garden-plot">
        {flowers.map(flower => (
          <div
            key={flower.id}
            className="flower"
            style={{
              left: flower.x,
              top: flower.y,
              transform: `scale(${flower.growth / 100})`,
              opacity: flower.growth / 100
            }}
          >
            🌷
          </div>
        ))}
      </div>
    </div>
  );
}

function WordPuzzle() {
  const words = ['LOVE', 'HEART', 'TULIP', 'KISS', 'HUG', 'SMILE', 'JOY', 'DREAM'];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [scrambledWord, setScrambledWord] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);

  React.useEffect(() => {
    scrambleWord();
  }, [currentWord]);

  const scrambleWord = () => {
    const scrambled = currentWord.split('').sort(() => Math.random() - 0.5).join('');
    setScrambledWord(scrambled);
  };

  const checkAnswer = () => {
    if (userGuess.toUpperCase() === currentWord) {
      setScore(score + 1);
      setUserGuess('');
      const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
      setCurrentWord(words[nextIndex]);
    }
  };

  return (
    <div className="word-puzzle">
      <h3 className="game-title">Love Word Puzzle</h3>
      <div className="puzzle-content">
        <div className="scrambled-word">{scrambledWord}</div>
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Unscramble the word..."
          className="puzzle-input"
        />
        <button onClick={checkAnswer} className="puzzle-button">Check</button>
        <div className="puzzle-score">Score: {score}</div>
      </div>
    </div>
  );
}

function BalloonPop() {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);

  const createBalloon = () => {
    const newBalloon = {
      id: Date.now(),
      x: Math.random() * 400,
      y: 300,
      color: ['💜', '💖', '💝', '💕'][Math.floor(Math.random() * 4)]
    };
    setBalloons([...balloons, newBalloon]);
  };

  const popBalloon = (id) => {
    setBalloons(balloons.filter(balloon => balloon.id !== id));
    setScore(score + 1);
  };

  React.useEffect(() => {
    const interval = setInterval(createBalloon, 2000);
    return () => clearInterval(interval);
  }, [balloons]);

  React.useEffect(() => {
    const moveInterval = setInterval(() => {
      setBalloons(prev => prev.map(balloon => ({
        ...balloon,
        y: balloon.y - 2
      })).filter(balloon => balloon.y > -50));
    }, 50);
    return () => clearInterval(moveInterval);
  }, []);

  return (
    <div className="balloon-pop">
      <h3 className="game-title">Pop the Love Balloons</h3>
      <div className="balloon-score">Score: {score}</div>
      <div className="balloon-game-area">
        {balloons.map(balloon => (
          <div
            key={balloon.id}
            className="balloon"
            style={{ left: balloon.x, top: balloon.y }}
            onClick={() => popBalloon(balloon.id)}
          >
            {balloon.color}
          </div>
        ))}
      </div>
    </div>
  );
}

function GamesSection() {
  const [activeGame, setActiveGame] = useState('garden');

  return (
    <div className="content-section">
      <h2 className="section-title">Games to Play Together</h2>
      <div className="game-selector">
        <button 
          onClick={() => setActiveGame('garden')} 
          className={`game-tab ${activeGame === 'garden' ? 'active' : ''}`}
        >
          🌷 Garden
        </button>
        <button 
          onClick={() => setActiveGame('puzzle')} 
          className={`game-tab ${activeGame === 'puzzle' ? 'active' : ''}`}
        >
          🧩 Puzzle
        </button>
        <button 
          onClick={() => setActiveGame('balloons')} 
          className={`game-tab ${activeGame === 'balloons' ? 'active' : ''}`}
        >
          🎈 Balloons
        </button>
      </div>
      <div className="game-container">
        {activeGame === 'garden' && <VirtualGarden />}
        {activeGame === 'puzzle' && <WordPuzzle />}
        {activeGame === 'balloons' && <BalloonPop />}
      </div>
    </div>
  );
}

function TulipDivider() {
  return (
    <div className="tulip-divider">
      <img src={tulipImages[0]} alt="Tulip divider" className="divider-tulip" />
      <div className="divider-line"></div>
      <img src={tulipImages[2]} alt="Tulip divider" className="divider-tulip" />
    </div>
  );
}

function App() {
  const [currentSection, setCurrentSection] = useState('slideshow');
  
  // Persistent state for letters and poems
  const [letters, setLetters] = useState(['', '', '', '']);
  const [poems, setPoems] = useState(['', '', '']);

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="main-title">Happy 20th Birthday, My Love! 💜</h1>
        <p className="subtitle">A special place filled with love, just for you</p>
        
        <nav className="main-nav">
          <button 
            onClick={() => setCurrentSection('slideshow')} 
            className={`nav-item ${currentSection === 'slideshow' ? 'active' : ''}`}
          >
            <img src={tulipImages[1]} alt="Photos" className="nav-tulip" />
            Our Memories
          </button>
          <button 
            onClick={() => setCurrentSection('letters')} 
            className={`nav-item ${currentSection === 'letters' ? 'active' : ''}`}
          >
            <img src={tulipImages[2]} alt="Letters" className="nav-tulip" />
            Love Letters
          </button>
          <button 
            onClick={() => setCurrentSection('poems')} 
            className={`nav-item ${currentSection === 'poems' ? 'active' : ''}`}
          >
            <img src={tulipImages[3]} alt="Poems" className="nav-tulip" />
            Poetry
          </button>
          <button 
            onClick={() => setCurrentSection('games')} 
            className={`nav-item ${currentSection === 'games' ? 'active' : ''}`}
          >
            <img src={tulipImages[4]} alt="Games" className="nav-tulip" />
            Fun Games
          </button>
        </nav>
      </header>

      <main className="main-content">
        {currentSection === 'slideshow' && <PhotoSlideshow />}
        {currentSection === 'letters' && (
          <>
            <TulipDivider />
            <LettersSection letters={letters} setLetters={setLetters} />
          </>
        )}
        {currentSection === 'poems' && (
          <>
            <TulipDivider />
            <PoemsSection poems={poems} setPoems={setPoems} />
          </>
        )}
        {currentSection === 'games' && (
          <>
            <TulipDivider />
            <GamesSection />
          </>
        )}
      </main>

      <footer className="app-footer">
        <p className="footer-text">Made with endless love for you 💜 June 15th, 2025</p>
      </footer>
    </div>
  );
}

export default App;