import { useEffect, useState } from "react";
import "./App.css";

import { getHealth } from "./services/api";

export default function App() {

  const [server, setServer] = useState(null);

  useEffect(() => {

    async function load() {

      try {

        const data = await getHealth();

        setServer(data);

      } catch {

        setServer({
          status: "offline"
        });

      }

    }

    load();

  }, []);

  return (

    <div className="app">

      <header className="header">

        <h1>EdgeDesk Pro</h1>

        <div className={`status ${server?.status}`}>

          {server
            ? server.status === "ok"
              ? "🟢 Online"
              : "🔴 Offline"
            : "Connessione..."}

        </div>

      </header>

      <section className="card">

        <h2>Backend</h2>

        <p><b>Applicazione:</b> {server?.app}</p>

        <p><b>Versione:</b> {server?.version}</p>

        <p><b>Ultimo controllo:</b> {server?.time}</p>

      </section>

    </div>

  );

}