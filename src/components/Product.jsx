import { useState } from "react"
import { AddToCartBtn } from "./AddToCartBtn"
import { ModelWindow } from "./ModelWindow"

export function Product({
  title,
  category,
  dimensions,
  price,
  img,
  description,
}) {
  const [openModelWindow, setOpenModelWindow] = useState(false);

  return (
    <article className="relative border-1 py-2 rounded-md border-black/30 flex flex-col gap-4">
      <img src={img} alt={title} className="max-w-64 mx-auto sm:max-w-54"/>
      <div className="flex flex-col gap-1 px-2">
        <h4 className="line-clamp-1">{title}</h4>
        <p className="line-clamp-2">{description}</p>
        <div className="flex justify-between items-center my-2">
          <p>{price}$</p>
          <button
            className="underline text-accent w-fit"
            onClick={() => setOpenModelWindow(!openModelWindow)}
          >
            more
          </button>
        </div>
        <AddToCartBtn />
      </div>

      {openModelWindow && (
        <ModelWindow
          setOpenModelWindow={setOpenModelWindow}
          dimensions={dimensions}
          title={title}
          category={category}
          price={price}
          img={img}
          description={description}
        />
      )}
    </article>
  );
}
