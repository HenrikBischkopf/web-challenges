import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function Towers() {
  const towersVolume = volumes.find(({ slug }) => slug === "the-two-towers");
  const currentVolumeSlug = "the-two-towers";
  const currentIndex = volumes.findIndex(
    (volume) => volume.slug === currentVolumeSlug
  );

  const previousVolumeSlug =
    currentIndex > 0 ? volumes[currentIndex - 1].slug : null;
  const nextVolumeSlug =
    currentIndex < volumes.length - 1 ? volumes[currentIndex + 1].slug : null;
  return (
    <>
      <span>
        <Link href="../volumes">All Volumes</Link>
      </span>
      <h1>{towersVolume.title} </h1>
      <p>{towersVolume.description}</p>
      <h2>Books:</h2>
      <ul>
        {towersVolume.books.map((book) => (
          <li key={book.ordinal}>
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/the-two-towers.png"
        height={230}
        width={140}
        alt="A picture of the Towers"
      />
      <br></br>
      <span>
        {previousVolumeSlug ? (
          <Link href={`/volumes/${previousVolumeSlug}`}>Previous Volume</Link>
        ) : null}
        &nbsp;&nbsp;
        {nextVolumeSlug ? (
          <Link href={`/volumes/${nextVolumeSlug}`}>Next Volume</Link>
        ) : null}
      </span>
    </>
  );
}
