import Elem from "./Elem";

export default function Jatekter(props) {
  return <>
    {props.lista.map((elem, index) => {
        return <Elem jel={elem} key={index} />;
      })}
  </>;
}
