import useToken from "../hooks/useToken";

interface PrivateComponentProps {
  children: JSX.Element;
}

export default function PrivateComponent({ children }: PrivateComponentProps) {
  const { token } = useToken();
  return <>{token ? children : <></>}</>;
}
