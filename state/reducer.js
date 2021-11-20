import basket from 'pages/basket'

const appReducer = (state, action) => {
  let newState = state
  switch (action.type) {
    case 'INIT_STATE':
      newState = action.payload
      break
    case 'ADD_TO_BASKET':
      newState = { ...state, basket: [...state.basket, { ...action.payload }] }
      break
    case 'UPDATE_BASKET_ITEM_COUNT':
      newState = {
        ...state,
        basket: state.basket.map(item => {
          if (item.productID === action.payload.productID) {
            return { ...item, count: action.payload.count }
          }
          return item
        })
      }
      break
    case 'REMOVE_BASKET_ITEM':
      newState = {
        ...state,
        basket: state.basket.filter(item => item.productID !== action.payload.productID)
      }
      break
    case 'UPDATE_COUPON':
      newState = { ...state, coupon: { ...action.payload } }
      break
    case 'SET_CURRENT_USER':
      newState = { ...state, user: action.payload.user }
      break
    case 'ADD_ADDRESS':
      newState = { ...state, user: {...state.user,address:[...state.user.address,{...action.payload.address}]} }
      break
    case 'UPDATE_DELIVERY_ADDRESS':
      newState = {...state,delivery_address:action.payload.address}
      break 
      case 'UPDATE_PAYMENT_METHOD':
        newState = {...state,payment_method:action.payload.method}
        break 
      case 'EMPTY_BASKET':
        newState = {...state,basket:[],coupon: {
          code: '',
          percent: 0
        },
        delivery_address:null,
        payment_method:null}

        break    
        case 'LOGOUT':
          newState = {...state,basket:[],coupon: {
            code: '',
            percent: 0
          },
          delivery_address:null,
          payment_method:null,
          user:{}
        }
  
          break 
  }
  localStorage.setItem('state', JSON.stringify(newState))
  return newState
}
export default appReducer
