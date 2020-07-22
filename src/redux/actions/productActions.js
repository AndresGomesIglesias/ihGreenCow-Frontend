export const FETCH_PRODUCTS_SUCCESS   = "FETCH_PRODUCTS_SUCCESS";
export const SEARCH_PRODUCTS_SUCCESS  = "SEARCH_PRODUCTS_SUCCESS";
export const HANDLE_CHANGE            = "HANDLE_CHANGE";
export const GET_FILTER_SORT_PARAMS   = "GET_FILTER_SORT_PARAMS";

// fetch products
const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};


// fetch products
export const searchProducts = event => {
  return {
    type: HANDLE_CHANGE,
    payload: event
  }
};

export const getFilterSortParams = (type, value) => {
  return {
    type: GET_FILTER_SORT_PARAMS,
    payload: {
      type,
      value
    }
  }
};
