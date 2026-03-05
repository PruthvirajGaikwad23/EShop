const Product = (props) => {
  const { id, title, price, images, category } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img className="card-img-top" src={images[0]} alt={title} />
        <div className="card-body">
          <h5 className="card-title text-truncate">{title}</h5>
          <p className="card-text">{category.name}</p>
          <p className="card-text">${price}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};
export default Product;
