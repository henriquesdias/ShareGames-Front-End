import { ProfileContainer } from "../styles/Container-Profile";
import useToken from "../hooks/useToken";
import picture from "../assets/default-profile.jpg";

export default function Profile() {
  const { setToken } = useToken();
  return (
    <ProfileContainer>
      <img src={picture} alt="profile picture" />
      <div
        onClick={() => {
          localStorage.removeItem("token");
          setToken("");
        }}
      >
        Sign out
      </div>
    </ProfileContainer>
  );
}
