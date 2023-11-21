type ButtonProps = {title: string; count: number; onclick:()=>void}

const Button = ({title, onclick, count}:ButtonProps) => {
  return (
    <>
    <input type="button" value={title} onClick={onclick} />
    </>
  )
}
export default Button; 