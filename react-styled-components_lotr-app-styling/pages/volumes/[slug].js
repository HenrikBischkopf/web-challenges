import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
import ChevronLeft from "../../icons/chevron-left.svg";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";

let darkMode = false;

const StyledBody = styled.body`
  font: var(--font-body);
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: unset;
  text-decoration: none;
`;

const StyledH1 = styled.h1`
  font: normal 700 44px/48px var(--font-family);
`;

const StyledSection = styled.section`
  background-color: ${(props) => props.$color};
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  const toggleDarkMode = () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
  };

  return (
    <>
      <StyledBody darkMode={false}>
        <StyledLink href="/volumes">
          <ChevronLeft /> All Volumes
        </StyledLink>
        <StyledH1>{title}</StyledH1>
        <p>{description}</p>
        <StyledSection $color={color}>
          <ul>
            {books.map(({ ordinal, title }) => (
              <li key={title}>
                {ordinal}: <strong>{title}</strong>
              </li>
            ))}
          </ul>
          <Image
            src={cover}
            alt={`Cover image of ${title}`}
            width={140}
            height={230}
          />
        </StyledSection>
        {previousVolume ? (
          <div>
            <StyledLink href={`/volumes/${previousVolume.slug}`}>
              <ArrowLeft /> Previous Volume: {previousVolume.title}
            </StyledLink>
          </div>
        ) : null}
        {nextVolume ? (
          <div>
            <StyledLink href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} <ArrowRight />
            </StyledLink>
          </div>
        ) : null}
        <ToggleButton onClick={toggleDarkMode}>Dark/Light Mode</ToggleButton>
      </StyledBody>
    </>
  );
}
