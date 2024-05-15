import Table from "./components/table";

export default function App() {
  return (
    <Table
      col1={["item1", "item2", "item3"]}
      col2={[1, 2, 3]}
      col1Header={"Name"}
      col2Header={"Age"}
    />
  );
}
