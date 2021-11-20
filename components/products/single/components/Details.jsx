import React from 'react'
import useAppState from 'state/useAppState'

export default function Details ({ product }) {
  const { state, dispatch } = useAppState()
  const [variations, setVariations] = React.useState([])
  const [itemCount, setItemCount] = React.useState(1)
  const [price, setPrice] = React.useState({main:product.price,discounted:product.discountedPrice})
  React.useEffect(() => {
    const checkPriceVariations = ()=>{
      const matchedVariations = product.priceVariations.filter(priceVariation => {
          return _(priceVariation.items).xorWith(variations,_.isEqual).isEmpty()
      })
      if(matchedVariations.length > 0){
        setPrice({main:matchedVariations[0].price,discounted:0})
      }
    }
    checkPriceVariations()
  }, [variations])
  const selectVariation = (e,title)=>{
    if(e.target.value !== 0){
      setVariations(prev => ([...prev,{[title]:e.target.value}]))
    }else{
      setVariations(prev => (prev.filter(variation => {
        return Object.keys(variation)[0] !== title
      })))
    }
  }
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        productID: product.id,
        price: price.main,
        title: product.title,
        discountedPrice: price.discounted,
        count: itemCount,
        thumbnail: product.thumbnail,
        variations
      }
    })
  }
  return (
      <div className="col-md-5">
    <h3 className="mb-3">{product.title}</h3>
    <div className="price mb-4">
      {price.discounted !== 0 &&  <>
        <del className="text-muted mr-2">
        <span className="h6">{price.main} تومان</span>
      </del>
      <span className="h5">{price.discounted} تومان</span>
      </>}
      {price.discounted == 0 && <>
        <span className="h5">{price.main} تومان</span>
      </>}
    </div>
    <p className="text-muted">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
      طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
      و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی
      نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
    </p>
    <form className="form-inline my-lg-5 mb-4">
        {product.variations.map(variation => (
                  <div className="form-group mb-4">
                  <select className="custom-select" onChange={e => {selectVariation(e,variation.title)}}>
                    <option selected value={0}>{variation.title}</option>
                  {variation.items.map(value => (
                     <option value={value.value}>{value.title}</option>
                  ))}
                  </select>
                </div>
        ))}
      <div className="form-group">
      <input
        type="number"
        className="form-control form-qty mr-2 w-25"
        placeholder={1}
        onChange={e => setItemCount(prev => prev + 1)}
      />
      <button
      onClick={addToBasket}
      type="button" className="btn btn-primary">
        <i className="fa fa-shopping-cart pr-3" />
        افزودن به سبد خرید
      </button>
      </div>
    </form>
    <div className="card border-0 font-size-14">
      <div className>
        <strong className="pr-2">تعداد:</strong> {product.stock}
      </div>
      <div className>
        <strong className="pr-2">دسته:</strong>
        <a href="#" rel="tag">
          {product.category.title}
        </a>
        .
      </div>
    </div>
  </div>
  )
}
