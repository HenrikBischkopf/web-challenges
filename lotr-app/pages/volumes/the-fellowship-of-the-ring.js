import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function Fellowship() {
  const fellowshipVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const currentVolumeSlug = "the-fellowship-of-the-ring";
  const currentIndex = volumes.findIndex(
    (volume) => volume.slug === currentVolumeSlug
  );

  const previousVolumeSlug =
    currentIndex > 0 ? volumes[currentIndex - 1].slug : null;
  const nextVolumeSlug =
    currentIndex < volumes.length - 1 ? volumes[currentIndex + 1].slug : null;
  /* console.log(fellowshipVolume);
  console.log(previousVolumeSlug);
  console.log(nextVolumeSlug); */
  return (
    <>
      <span>
        <Link href="../volumes">&lt;- All Volumes</Link>
      </span>
      <h1>{fellowshipVolume.title} </h1>
      <p>{fellowshipVolume.description}</p>
      <h2>Books:</h2>
      <ul>
        {fellowshipVolume.books.map((book) => (
          <li key={book.ordinal}>
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <Image
        src="/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="A picture of the Fellowship"
      />
      <br></br>
      <span>
        {previousVolumeSlug ? (
          <Link href={`/volumes/${previousVolumeSlug}`}>Previous Volume</Link>
        ) : null}
        {nextVolumeSlug ? (
          <Link href={`/volumes/${nextVolumeSlug}`}>Next Volume</Link>
        ) : null}
      </span>
    </>
  );
}
