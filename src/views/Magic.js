import React from "react";
import { Container } from "reactstrap";
import MagicWidget from "../components/MagicWidget";

import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const MagicComponent = () => {
  return (
    <Container className="mb-5">
      <MagicWidget />
    </Container>
  );
};

export default withAuthenticationRequired(MagicComponent, {
  onRedirecting: () => <Loading />,
});
