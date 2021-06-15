import { ChangeEvent, useState } from "react";

function useOnChange(): [string, (e: ChangeEvent<any>) => void] {
  const [value, setValue] = useState("");

  function handleOnChange(e: ChangeEvent<any>): void {
    const result = e.target.value;
    setValue(result);
  }

  return [value, handleOnChange];
}

export default useOnChange;

// test<ChangeEvent<any>, string>("", (value: ChangeEvent<any>) => {
//   return value.target.value;
// });

// function test<A, R>(init: R, proc: (value: A) => R): [R, (value: A) => void] {
//   const [value, setValue] = useState<R>(init);

//   function handleOnChange(value: A): void {
//     setValue(proc(value));
//   }

//   return [value, handleOnChange];
// }
