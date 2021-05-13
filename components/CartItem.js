import Link from "next/link";

export default function CartItem({ item, dispatch, cart }) {
  return (
    <tr>
      <td
        style={{ width: "100px", overflow: "hidden", padding: "5px 5px 5px 0" }}
      >
        <img
          src={item.images[0].url}
          alt={item.images[0].url}
          className="img-thumbnail w-100"
          style={{ minWidth: "80px", height: "80px" }}
        />
      </td>

      <td style={{ minWidth: "200px" }} className="w-50 align-middle">
        <h5 className="text-capitalize text-secondary">
          <Link href={`/product/${item._id}`}>
            <a>{item.title}</a>
          </Link>
        </h5>

        <h6 className="text-danger">${item.quantity * item.price}</h6>
        {item.inStock > 0 ? (
          <p className="mb-1 text-danger"> In Stock: {item.inStock}</p>
        ) : (
          <p className="mb-1 text-danger"> Out of Stock</p>
        )}
      </td>
      
    </tr>
  );
}
