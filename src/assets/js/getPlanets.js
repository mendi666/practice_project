export default async function getPlanets(
  url = "https://swapi.dev/api/planets/"
) {
  let request = await fetch(url);
  return await request.json();
}