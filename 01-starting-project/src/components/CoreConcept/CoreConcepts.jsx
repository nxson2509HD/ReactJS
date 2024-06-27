import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";
import Section from "../Section/Section.jsx";
export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Time to get started!">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
}
