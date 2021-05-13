import { useRecoilState } from "recoil";
import { nameState } from "./states";

function Input(): JSX.Element {
  const [name, setName] = useRecoilState(nameState);

  return (
    <>
      <p> Enter your name</p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
}

export default Input;
