import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {  searchProducts, getFilterSortParams } from "../../../src/redux/actions/productActions";

const ShopSearch = ({  SearchInHeaderBar }) => {

  const search = useSelector(state => state.productData.dataChange.search);
  const dispatch = useDispatch();

  const handleOnKeyUp = e => {
    e.preventDefault();
    if (e.key === 'Enter') {
      dispatch(getFilterSortParams("search", search));
    }
  }

  const handleClick = event => {
    event.preventDefault();
    dispatch(getFilterSortParams("search", search));
  }

  return (
    <div className="sidebar-widget">
      <h4> </h4>
      <h4 className="pro-sidebar-title">Search </h4>
      <div className={`${SearchInHeaderBar === true ? "" : 'pro-sidebar-search mb-50 mt-25'}`} >
        <form className="pro-sidebar-search-form" action="#">
          <input type="text" placeholder="Search here..." 
            onChange={(e => dispatch(searchProducts({ [e.target.name]: e.target.value })))}
            onKeyUp={e => handleOnKeyUp(e)}
            name='search'
            value={search}
          />
          <button className="button-search" onClick={event => handleClick(event)}>
            <i className="pe-7s-search"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
