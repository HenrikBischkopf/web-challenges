import Link from "next/link";
import { introduction } from "../resources/lib/data";
import { volumes } from "../resources/lib/data";
import Fellowship from "./volumes/the-fellowship-of-the-ring";

export default function Volumes() {
  return (
    <div>
      <ul>
        <h1>Lord of the Rings</h1>

        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <h2>
          <li>
            <Link href="/volumes/the-fellowship-of-the-ring">
              The Fellowship of the Ring
            </Link>
          </li>
        </h2>
        <h2>
          <li>
            <Link href="/volumes/the-two-towers">The Two Towers</Link>
          </li>
        </h2>
        <h2>
          <li>
            <Link href="/volumes/the-return-of-the-king">
              The Return of the King
            </Link>
          </li>
        </h2>
      </ul>
    </div>
  );
}
