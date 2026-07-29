import { useEffect, useState } from "react";
import { getMatches } from "../services/matches";

export function useMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches().then(setMatches);
  }, []);

  return matches;
}