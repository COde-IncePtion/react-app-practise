import React, { useEffect, useReducer, useState } from 'react';

export default function CountryCapitalGame({ data }) {
  const [currentSelection, setCurrentSelection] = useState([]);
  const [currentNumberOfButtons, setCurrentNumberOfButtons] = useState(Object.entries(data).length * 2);

  const [buttonsInfo, setButtonsInfo] = useState({});
  const [buttonsOrder, setButtonsOrder] = useState([]);

  useEffect(() => {
    // generating the random order
    let countriesAndCapitals = Object.entries(data).reduce((entry1, entry2) => entry1.concat(entry2));

    countriesAndCapitals.sort(() => (Math.random() > 0.5 ? 1 : -1));

    setButtonsOrder(countriesAndCapitals);

    const buttonsInfoMap = new Map();

    countriesAndCapitals.forEach(entry =>
      buttonsInfoMap.set(entry, { label: entry, backgroundColor: '', isVisible: true })
    );

    setButtonsInfo(buttonsInfoMap);

  }, []);

  const handleButtonClick = e => {

    const clickedButton = e.target.name;

    const buttonInfo = buttonsInfo.get(clickedButton);

    buttonsInfo.set(clickedButton, { ...buttonInfo, backgroundColor: 'blue' });

    if(currentSelection.length === 2){
      let button1 = currentSelection[0];
      let button2 = currentSelection[1];
      let buttonInfo1 = buttonsInfo.get(button1);
      let buttonInfo2 = buttonsInfo.get(button2);

      buttonsInfo.set(button1, { ...buttonInfo1, backgroundColor: '' });
      buttonsInfo.set(button2, { ...buttonInfo2, backgroundColor: '' });
      setCurrentSelection([clickedButton]);
    }
    else
    setCurrentSelection(prev => prev.concat([clickedButton]));

    if (currentSelection.length === 1) {
      let button1 = currentSelection[0];
      let button2 = clickedButton;

      if (data[button1] === button2 || data[button2] === button1) {
        let buttonInfo1 = buttonsInfo.get(button1);
        let buttonInfo2 = buttonsInfo.get(button2);

        buttonsInfo.set(button1, { ...buttonInfo1, isVisible: false });
        buttonsInfo.set(button2, { ...buttonInfo2, isVisible: false });
        // setButtonsInfo(new Map(buttonsInfo));
        setCurrentNumberOfButtons(prev=>prev-2);

      } else {
        let buttonInfo1 = buttonsInfo.get(button1);
        let buttonInfo2 = buttonsInfo.get(button2);

        buttonsInfo.set(button1, { ...buttonInfo1, backgroundColor: 'red' });
        buttonsInfo.set(button2, { ...buttonInfo2, backgroundColor: 'red' });

        // setButtonsInfo(new Map(buttonsInfo));
      }
    }
  };

  return (
    <div>
      <h1>Your game component</h1>
      {currentNumberOfButtons === 0 ? (
        <p>congratulation</p>
      ) : (
        <>
          <div>Main buttons render view</div>
          <div>
            {buttonsOrder.map(button => {
              const buttonInfo = buttonsInfo.get(button);
              if (!buttonInfo.isVisible) return <></>;

              return (
                <button
                  style={{ marginLeft: '8px', border: '1px solid red', backgroundColor: buttonInfo.backgroundColor }}
                  key={button}
                  onClick={handleButtonClick}
                  name={button}
                >
                  {button}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

/*

const data = { Germany: 'Berlin', Azerbaijan: 'Baku', India: "Delhi" };

 */
