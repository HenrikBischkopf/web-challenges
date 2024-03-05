import Link from "next/link";
import { introduction } from "../../lib/data";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

export default function Volumes() {
  /* const router = useRouter();
  console.log(router);
  const { slug } = router.querry; */
  const router = useRouter();

  function handleOnClick() {
    const randomVolume = getRandomElement(volumes);
    console.log(randomVolume);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  /*  function handleOnClick(event) {
    (event) => {
      function getRandomElement (volumes) {
        return volumes[Math.floor(Math.random() * volumes.length)]
      }
      router.push({`/volumes/${slug}`});
    };
  } */

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <h1>{title}</h1>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" name="random" onClick={handleOnClick}>
        Pick a random volume
      </button>
    </>
  );
}
/* return (
  <>
    <h1>The Lord of the Rings</h1>
    <p>{introduction}</p>
    <ul>
      <li>
        <Link href="/volumes/the-fellowship-of-the-ring">
          The Fellowship of the Ring
        </Link>
      </li>
      <li>
        <Link href="/volumes/the-two-towers">The Two Towers</Link>
      </li>
      <li>
        <Link href="/volumes/the-return-of-the-king">
          The Return of the King
        </Link>
      </li>
    </ul>
  </>
);*/
