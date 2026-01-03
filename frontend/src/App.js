import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api")   // <-- use YOUR backend private IP
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Azure 3 Tier Web Application</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;