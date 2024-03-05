import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function King() {
  const kingVolume = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  const currentVolumeSlug = "the-return-of-the-king";
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
        <Link href="../volumes">&lt;- All Volumes</Link>
      </span>
      <h1>{kingVolume.title} </h1>
      <p>{kingVolume.description}</p>
      <h2>Books:</h2>
      <ul>
        {kingVolume.books.map((book) => (
          <li key={book.ordinal}>
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="A picture of the Return of the King"
      />
      <br></br>
      <span>
        {previousVolumeSlug ? (
          <Link href={`/volumes/${previousVolumeSlug}`}>Previous Volume</Link>
        ) : null}
        <span> </span>
        {nextVolumeSlug ? (
          <Link href={`/volumes/${nextVolumeSlug}`}>Next Volume</Link>
        ) : null}
      </span>
    </>
  );
}
