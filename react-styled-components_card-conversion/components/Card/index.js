import styled from "styled-components";

const CardWrapper = styled.div`
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.25rem;
`;

const CardDescription = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
`;

export default function Card() {
  return (
    <CardWrapper>
      <CardTitle>Homer Simpson</CardTitle>
      <CardDescription>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan The
        Tracey Ullman Show short Good Night on April 19, 1987.
      </CardDescription>
    </CardWrapper>
  );
}

{
  /* <div className="card">
      <h3 className="card__title">Homer Simpson</h3>
      <p className="card__description">
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </p>
    </div> */
}
