import Link from "next/link";
import Widget from "@components/ui/widget";
import NewsletterForm from "@components/newsletter";
import { Container, Col, Row, Ul, Li } from "@bootstrap";
import { WidgetWrapper, SocialIcons } from "./footer.style";
import { SiInstagram } from "react-icons/si";

const FooterWidget = (props) => {
  return (
    <WidgetWrapper {...props} py={[60, 60, 100]}>
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <Widget title="ABOUT US" mb={[30, null, null, 0]}>
              <p className="about-text">
                Hype Renting wants you to dress fresh and be cool 😎
              </p>

              <SocialIcons mt={15}>
                <Li inline={true}>
                  <a
                    href="https://www.instagram.com/hype_renting"
                    target="_blank"
                    rel="noopener"
                  >
                    <SiInstagram />
                  </a>
                </Li>
              </SocialIcons>
            </Widget>
          </Col>

          <Col sm={6} lg={3}>
            <Widget title="INFORMATION" mb={[30, null, null, 0]}>
              <Ul className="widget-list">
                <Li>
                  <Link href="/">About Us</Link>
                </Li>
                <Li>
                  <Link href="/">Tracking Order</Link>
                </Li>
                <Li>
                  <Link href="/">Privacy & Policy</Link>
                </Li>
                <Li>
                  <Link href="/">Terms & Conditions</Link>
                </Li>
              </Ul>
            </Widget>
          </Col>

          <Col sm={6} lg={2}>
            <Widget title="MY ACCOUNT" mb={[30, null, null, 0]}>
              <Ul className="widget-list">
                <Li>
                  <Link href="/signin">Login</Link>
                </Li>
                <Li>
                  <Link href="/cart">My Cart</Link>
                </Li>
                <Li>
                  <Link href="/wishlist">Wishlist</Link>
                </Li>
                <Li>
                  <Link href="/compare">Compare</Link>
                </Li>
                <Li>
                  <Link href="/signin">My Account</Link>
                </Li>
              </Ul>
            </Widget>
          </Col>

          <Col sm={6} lg={3}>
            <Widget title="NEWSLETTER">
              <NewsletterForm />
            </Widget>
          </Col>
        </Row>
      </Container>
    </WidgetWrapper>
  );
};

export default FooterWidget;
