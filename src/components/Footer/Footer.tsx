import React from "react";

import { Container } from "./footer.styles";

export default function Footer() {
  const github = "http://github.com/luisdourado33";

  return (
    <Container>
      Desenvolvido por{" "}
      <a href={github}>
        <strong>Luís Dourado</strong>
      </a>
    </Container>
  );
}
