
import React , {useState} from "react";
import Tabs from "./Tabs";

function App() {
  const tabs = [
    { title: "Tab 1", content: "Content 1" },
    { title: "Tab 2", content: "Content 2" },
    { title: "Tab 3", content: "Content 3" }
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;