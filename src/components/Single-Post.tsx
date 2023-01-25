import { Container } from "../styles/Single-Post";
import picture from "../assets/default-profile.jpg";

export function SinglePost() {
  return (
    <Container>
      <span>
        <img src={picture} alt="" />
        <p>Sheldon</p>
      </span>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ex
        praesentium mollitia doloremque nulla! Totam tempora, dolore in odio et
        delectus mollitia sequi fuga iure, quidem beatae adipisci aliquam
        deserunt.
      </p>
    </Container>
  );
}
