import React from "react";

const TopTotal = (props) => {
  const { orders, products } = props;
  let totalSale = 0;
  if (orders) {
    orders.map((order) =>
      order.isPaid === true ? (totalSale = totalSale + order.totalPrice) : null
    );
  }
  return (
    <div className="row">


      <div className="col-lg-15">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-warning">
              <i className="text-warning fas fa-shopping-basket"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Products</h6>
              {products ? <span>{products.length}</span> : <span>0</span>}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
