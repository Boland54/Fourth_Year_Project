import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const LatestOrder = (props) => {
  const { loading, error, products } = props;
  return (
    <div className="card-body">
      <h4 className="card-title">All Reports</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">

<thead>
  <tr>    <td><b>User</b></td>

    <td><b>Description</b></td>
    <td><b>Latitude</b></td>
    <td><b>Longitude</b></td>
  </tr>
</thead>


            <tbody>
              {products.map((product) => (
                <tr>
                  <td>{product.user}</td>
                  <td>{product.description}</td>
                
                  <td>
                    {product.latitude}
                  </td>
                  <td>
                    {product.longitude}
                  </td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/products/${product._id}`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;
