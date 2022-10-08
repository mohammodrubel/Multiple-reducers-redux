// PRODUCTS CONSTANT 
const {createStore,combineReducers}=require('redux')

// products 
const GETPRODUCT = 'GETPRODUCT'
const ADDPRODUCTS ='ADDPRODUCTS' 
// cart 
const GETCART='GETCART'
const ADDTOCART ='ADDTOCART' 

const initialProducts = {
    products:['laptop','mobile'],
    numberOfProducts : 2
}
const initialCart = {
    cart:['shirt','pent'],
    numberOfProducts : 2
}

const getProduct= ()=>{
   return{
    type:GETPRODUCT
   }
}
const getCart= ()=>{
   return{
    type:GETCART
   }
}


const addProducts = (product)=>{
    return{
        type:ADDPRODUCTS,
        payload:product
    }
}

const addCart = (product)=>{
    return{
        type:ADDTOCART,
        payload:product
    }
}



const productsReducer = (state=initialProducts,action)=>{
    switch(action.type){
        case GETPRODUCT:
            return{
                ...state
            }
        case ADDPRODUCTS:
            return{
                products:[...state.products,action.payload],
                numberOfProducts:state.numberOfProducts + 1
            }
        default :return state
    }
}

const cartReducer = (state=initialCart,action)=>{
    switch(action.type){
        case GETCART:
            return{
                ...state
            }
        case ADDTOCART:
            return{
                cart:[...state.cart,action.payload],
                numberOfProducts:state.numberOfProducts + 1
            }
         default :return state
    }
}

const rootReducer = combineReducers({
   product:productsReducer,
   cart:cartReducer
  
   
})

// store 
const store = createStore(rootReducer)
// subscribe 
store.subscribe(()=>{
    console.log(store.getState())
})
// dispatch 
store.dispatch(getProduct())
store.dispatch(addProducts('charger'))
store.dispatch(getCart())
store.dispatch(addCart('shoes'))
