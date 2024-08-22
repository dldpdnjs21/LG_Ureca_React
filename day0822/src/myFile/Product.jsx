// Product.jsx
import { useParams } from "react-router-dom";

function Product(props){
   const {productId} = useParams();

   return (
      <>
         {/* <h3>상품페이지</h3> */}
         <h3>{productId}번 상품페이지</h3>
      </>
   );
}

export default Product;