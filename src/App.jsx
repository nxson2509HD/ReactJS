import { useState } from "react";
import componentsImg from "./assets/components.png";
import MyHeader from "./components/Header/Header.jsx";
import CoreConcept from "./components/CorceConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  return (
    <di v>
      <MyHeader />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
        </section>
        {!selectedTopic && <p>Please select a topic</p>}

        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </main>
    </di>
  );
}

export default App;
