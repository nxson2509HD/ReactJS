export default function UserInput({ userInput, OnChange }) {
  console.log(OnChange);
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => {
              OnChange("initialInvestmentL", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => {
              OnChange("annualInvestment", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => {
              OnChange("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => {
              OnChange("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
