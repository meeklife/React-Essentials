import {useState} from 'react';
import {CORE_CONCEPTS, EXAMPLES} from '../data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/Coreconcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
   function handleSelect(selectedbutton){
        setSelectedTopic(selectedbutton);
    }
  
  let tabContent = <p>Please select a tab</p>;

  if (selectedTopic){
    tabContent = (
      <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    )
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=> (<CoreConcept key={item.title} {...item}/> ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
              <TabButton isSelected={selectedTopic === 'Components'} onSelect={() => handleSelect('Components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'JSX'} onSelect={() => handleSelect('JSX')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'Props'} onSelect={() => handleSelect('Props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'State'} onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
