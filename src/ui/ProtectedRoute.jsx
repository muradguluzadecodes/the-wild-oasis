/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, Authenticated } = useUser();

  // 2. If there is NO authenticated users, then navigate to Login page
  useEffect(
    function () {
      if (!Authenticated && !isLoading) navigate("/login");
    },
    [Authenticated, isLoading, navigate]
  );

  // 3. If is loading return spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // 4. If there is a user render the APP

  if (Authenticated) return children;
}
