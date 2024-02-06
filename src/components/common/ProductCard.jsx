import "./ProductCard.css"

export const ProductCard = ({producto,img,precio}) => {
  return (
    <div >
        <h3>{producto}</h3>
        <img src={img} alt={producto} />
        <h4>{precio}</h4>
    </div>
  )
}
