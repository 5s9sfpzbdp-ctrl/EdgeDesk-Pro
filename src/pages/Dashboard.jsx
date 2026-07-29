export default function Dashboard() {

  const stats = [
    {
      title: "Partite Oggi",
      value: "--",
      color: "#3b82f6"
    },
    {
      title: "Value Bet",
      value: "--",
      color: "#22c55e"
    },
    {
      title: "Pronostici AI",
      value: "--",
      color: "#f59e0b"
    },
    {
      title: "ROI",
      value: "--",
      color: "#ef4444"
    }
  ];

  return (
    <>

      <h1 className="title">
        Dashboard
      </h1>

      <p className="subtitle">
        Benvenuto in EdgeDesk Pro
      </p>

      <div className="grid">

        {stats.map((card) => (

          <div
            className="card"
            key={card.title}
          >

            <div
              style={{
                color: "#94a3b8",
                fontSize: 15
              }}
            >
              {card.title}
            </div>

            <div
              className="stat"
              style={{
                color: card.color
              }}
            >
              {card.value}
            </div>

          </div>

        ))}

      </div>

      <div
        className="card"
        style={{
          marginTop:30
        }}
      >

        <h2>
          Ultime analisi
        </h2>

        <br/>

        <p style={{color:"#94a3b8"}}>
          Nessuna analisi disponibile.
        </p>

      </div>

    </>
  );

}