import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data: character, isLoading } = useSWR(
    "/api/random-character",
    fetcher
  );

  if (!character) {
    return;
  }

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <ul>
      <li key={character.age}>
        {`
  firstName: ${character.firstName},
  lastName: ${character.lastName},
  age: ${character.age},
  profession: ${character.profession},
  twitter: ${character.twitter},
  geohash: ${character.geohash}`}
      </li>
    </ul>
  );
}
