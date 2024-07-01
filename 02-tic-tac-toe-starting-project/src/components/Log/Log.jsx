export default function Log({ turns }) {
  console.log(turns);
  return (
    <ol id="log">
      {turns.map((turn) =>
        Object.keys(turn).length > 0 ? (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row},{turn.square.col}
          </li>
        ) : undefined
      )}
    </ol>
  );
}
