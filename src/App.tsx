import './App.css';
import { useState } from 'react';
import { TextField } from '@mui/material';
import mistletoe from './assets/mistletoe.png';

function App() {
  const [chosenAnimal, setChosenAnimal] = useState<
    'chicken' | 'sheep' | 'pig' | ''
  >('');
  const [disableChosenAnimal, setDisableChosenAnimal] = useState(false);
  const [mamaPig, setMamaPig] = useState('');
  const [disableMamaPig, setDisableMamaPig] = useState(false);
  const [minAnswer, setMinAnswer] = useState('');
  const [disableMinAnswer, setDisableMinAnswer] = useState(false);
  const [phoneticAnswer, setPhoneticAnswer] = useState('');
  const [disablePhoneticAnswer, setDisablePhoneticAnswer] = useState(false);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flexDirection: 'row',
        }}
      >
        <img src={mistletoe} alt="Holly" className="holly mirror" />
        <h1>Merry Christmas!</h1>
        <img src={mistletoe} alt="Holly" className="holly" />
      </div>
      <p>Pick an animal</p>
      <button
        onClick={() => setChosenAnimal('chicken')}
        disabled={disableChosenAnimal}
      >
        Chicken
      </button>
      <button
        onClick={() => setChosenAnimal('sheep')}
        disabled={disableChosenAnimal}
      >
        Sheep
      </button>
      <button
        onClick={() => {
          setChosenAnimal('pig');
          setDisableChosenAnimal(true);
        }}
        disabled={disableChosenAnimal}
      >
        Pig
      </button>
      <br />
      {chosenAnimal === 'chicken' && (
        <span>Cluck Cluck, better next time luck!</span>
      )}
      {chosenAnimal === 'sheep' && <span>Baaaad guess, but don't stress</span>}
      {chosenAnimal === 'pig' && (
        <span>
          Winner winner,{' '}
          {phoneticAnswer === 'salmon' ? (
            <span style={{ color: 'salmon', fontWeight: 'bold' }}>SALMON</span>
          ) : (
            'oink oink'
          )}
          &nbsp;dinner
        </span>
      )}
      {chosenAnimal === 'pig' && (
        <>
          <p>What is a mama pig called?</p>
          <TextField
            value={mamaPig}
            onChange={(e) => {
              setMamaPig(e.target.value);
              if (e.target.value.toLowerCase() === 'sow') {
                setDisableMamaPig(true);
              }
            }}
            disabled={disableMamaPig}
          />
          {mamaPig.toLowerCase() === 'sow' && (
            <>
              <p>What is the opposite of max?</p>
              <TextField
                value={minAnswer}
                onChange={(e) => {
                  setMinAnswer(e.target.value);
                  if (e.target.value.toLowerCase() === 'min') {
                    setDisableMinAnswer(true);
                  }
                }}
                disabled={disableMinAnswer}
              />
              {minAnswer.toLowerCase() === 'min' && (
                <>
                  <p>Put those words together phonetically</p>
                  <TextField
                    value={phoneticAnswer}
                    onChange={(e) => {
                      setPhoneticAnswer(e.target.value);
                      if (e.target.value.toLowerCase() === 'salmon') {
                        setDisablePhoneticAnswer(true);
                      }
                    }}
                    disabled={disablePhoneticAnswer}
                  />
                  <br />
                  {phoneticAnswer.toLowerCase() === 'salmon' && (
                    <span>
                      (They didn't have any decent &nbsp;
                      <span style={{ color: 'salmon', fontWeight: 'bold' }}>
                        SALMON
                      </span>
                      &nbsp; at the store, but here's a &nbsp;
                      <span style={{ color: 'salmon', fontWeight: 'bold' }}>
                        SALMON
                      </span>
                      &nbsp; dinner you winner winner! )
                    </span>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
