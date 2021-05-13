import { useRecoilState, useRecoilValue } from "recoil";
import { charState, nameState } from "./states";

function Display(): JSX.Element {
  const charName = useRecoilValue(charState);
  const [name] = useRecoilState(nameState);

  return (
    <>
      <p>My name is {name}</p>
      <p>My name has {charName} characters</p>
    </>
  );
}

export default Display;
