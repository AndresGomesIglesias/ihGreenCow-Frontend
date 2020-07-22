
const initState = {
  products: [],
  dataChange: '',
  sortType: '',
  sortValue: ''

};

const productReducer = (state = initState, action) => {

  switch(action.type) {
    case 'FETCH_PRODUCTS_SUCCESS': 
      return { ...state, products: action.payload };
      
    case 'HANDLE_CHANGE': 
      return { ...state, dataChange: action.payload };
  
    case 'GET_FILTER_SORT_PARAMS':
      console.log(action)
      return { 
        ...state,
        sortType: action.payload.type,
        sortValue: action.payload.value
       }

    default:
      return state;
    }
  };


export default productReducer;
