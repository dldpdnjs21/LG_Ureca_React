// Main.jsx
import { Link } from "react-router-dom";

function Main(props){
   return (
      <>
         <h3>메인페이지</h3>
         <ul>
            <li><Link to="/product/1">1번상품</Link></li>
            <li><Link to="/product/2">2번상품</Link></li>
            {/* <li><Link to="/pro/3">3번상품</Link></li> */}
            <li><Link to="/product/3">3번상품</Link></li>
         </ul>
      </>
   );
}

export default Main;