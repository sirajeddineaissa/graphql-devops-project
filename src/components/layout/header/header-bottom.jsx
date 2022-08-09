import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { useIsLoggedIn } from "@hooks";
import Logo from "@components/ui/logo";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "@bootstrap";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getCartProductsQuantity } from "@utils/product";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownToggleButton
} from "@components/ui/dropdown/dropdwon.style";
import {
  ActionItem,
  CartItemCount,
  HeaderAction,
  HeaderActionBtn,
  HeaderBottomWrap
} from "@components/layout/header/header.style";

const HeaderBottom = ({
  onConfigHandler,
  onMiniCartHandler,
  onSearchBoxHandler,
  onMobileNavHandler
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const cartQuantity = getCartProductsQuantity(shoppingCart);
  const isLoggedIn = useIsLoggedIn();

  return (
    <HeaderBottomWrap>
      <Container>
        <Row className="align-items-center">
          <Col xs={3} lg={3} className="d-lg-none">
            <HeaderActionBtn onClick={() => onMobileNavHandler()}>
              <AiOutlineMenu />
            </HeaderActionBtn>
          </Col>

          <Col xs={5} lg={3} className="text-center text-lg-left">
            <Logo
              className="logo--desktop"
              src="/images/logo/logo.png"
              height={60}
            />

            <Logo
              width={120}
              height={40}
              className="logo--mobile"
              src="/images/logo/logo.png"
            />
          </Col>

          <Col xs={4} lg={3} className="d-lg-none text-right">
            <HeaderAction>
              <ActionItem>
                <HeaderActionBtn onClick={() => onSearchBoxHandler()}>
                  <IoSearchOutline />
                </HeaderActionBtn>
              </ActionItem>

              {/* <ActionItem>
                <HeaderActionBtn onClick={() => onConfigHandler()}>
                  <AiOutlineSetting />
                </HeaderActionBtn>
              </ActionItem> */}
            </HeaderAction>
          </Col>

          <Col xs={8} lg={9} className="d-none d-lg-block">
            <HeaderAction>
              <ActionItem>
                <HeaderActionBtn onClick={() => onSearchBoxHandler()}>
                  <IoSearchOutline />
                </HeaderActionBtn>
              </ActionItem>

              <ActionItem>
                <DropdownToggleButton
                  color="#000"
                  className="header-action-btn"
                  onClick={() => setIsDropdownOpen((prevState) => !prevState)}
                >
                  <IoPersonOutline />
                </DropdownToggleButton>
                <DropdownMenu
                  align="center"
                  className={isDropdownOpen ? "show" : "hide"}
                >
                  {isLoggedIn ? (
                    <li>
                      <Link href="/account">My Account</Link>
                    </li>
                  ) : (
                    <>
                      <li>
                        <Link href="/signin">Sign in</Link>
                      </li>
                      <li>
                        <Link href="/signup">Sign up</Link>
                      </li>
                    </>
                  )}
                  <li>
                    <Link href="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link href="/wishlist">Wishlist</Link>
                  </li>

                  {isLoggedIn && (
                    <li>
                      <Link href="/logout">Logout</Link>
                    </li>
                  )}
                </DropdownMenu>
              </ActionItem>

              <ActionItem>
                <HeaderActionBtn
                  className="pr-1"
                  onClick={() => onMiniCartHandler()}
                >
                  <HiOutlineShoppingBag />
                  <CartItemCount>{cartQuantity}</CartItemCount>
                </HeaderActionBtn>
              </ActionItem>
            </HeaderAction>
          </Col>
        </Row>
      </Container>
    </HeaderBottomWrap>
  );
};

HeaderBottom.propTypes = {
  onConfigHandler: PropTypes.func.isRequired,
  onMiniCartHandler: PropTypes.func.isRequired,
  onSearchBoxHandler: PropTypes.func.isRequired,
  onMobileNavHandler: PropTypes.func.isRequired
};

export default HeaderBottom;
