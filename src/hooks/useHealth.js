import { useEffect, useState } from "react";
import { Api } from "../services/api";

export function useHealth() {

  const [status, setStatus] = useState("...");

  useEffect(() => {

    Api.health()
      .then(r => {
        setStatus(r.ok ? "Online" : "Offline");
      })
      .catch(() => {
        setStatus("Offline");
      });

  }, []);

  return status;

}