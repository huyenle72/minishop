import { memo } from "react";
import "./style.scss";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { formatter } from "../../../../utils/fomater";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  huyenle@gmail.com
                </li>
                <li>Mien phi ship hang don tu {formatter(200000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <BsFacebook />
                </li>
                <li>
                  <BsInstagram />
                </li>
                <li>
                  <BsLinkedin />
                </li>
                <li>
                  <BsTwitter />
                </li>
                <li>
                  <AiOutlineUserAdd />
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header__logo">
              <h1>Minishop</h1>
            </div>
          </div>
          <div className="col-xl-6">Menus</div>
          <div className="col-xl-3">
            <div className="header__cart">
              <div className="header__cart_price">
                <span>{formatter(1000000)}</span>
              </div>
              <ul>
                <li>
                  <link href="#">
                    <FaShoppingCart />
                    <span>5</span>
                  </link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);
