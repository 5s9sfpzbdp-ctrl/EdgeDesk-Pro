import { Api } from "./api";

export async function getMatches() {
  try {
    return await Api.matches();
  } catch (e) {
    console.error(e);
    return [];
  }
}