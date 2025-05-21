import { ROUTES } from "../constants/routes"

export const login = async (email) => {
  return fetch(ROUTES.LOGIN, {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
