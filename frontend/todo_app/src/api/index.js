const BASE_URL="http://127.0.0.1:8000"

export async function getTodos() {
  const data = await fetch(`${BASE_URL}/list`);
  const response = await data.json();
  return response || []
}
