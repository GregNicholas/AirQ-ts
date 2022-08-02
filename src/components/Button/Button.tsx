import { Btn } from "./Button-styles";

interface ButtonProps {
    clickHandler: () => void,
    btnText: String,
    selected: boolean
}
export default function Button({ clickHandler, btnText, selected }: ButtonProps) {
  return (
    <Btn selected={selected} onClick={clickHandler}>
      {btnText}
    </Btn>
  );
}
