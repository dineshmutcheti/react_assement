import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <label>Description</label>
        <input type="text" />
        <br />
        <label>Amount</label>
        <input type="text" />
        <br />
        <label>Date</label>
        <input type="date" />
      </form>
    </div>
  );
}
