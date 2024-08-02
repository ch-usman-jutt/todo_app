const BASE_URL = "http://127.0.0.1:8000";

export async function getTodos() {
  const data = await fetch(`${BASE_URL}/list`);
  const response = await data.json();
  return response || [];
}

export async function signUp(email, password) {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response;
}

export async function login(username, password) {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      username: username,
      password: password,
    }).toString(),
  });

  return await response.json();
}
