import Link from "next/link";
import Widget from "@components/ui/widget";
import NewsletterForm from "@components/newsletter";
import { Container, Col, Row, Ul, Li } from "@bootstrap";
import { WidgetWrapper, SocialIcons } from "./footer.style";
import { SiFacebook, SiTwitter, SiLinkedin, SiYoutube } from "react-icons/si";

const FooterWidget = (props) => {
  return (
    <WidgetWrapper {...props} py={[60, 60, 100]}>
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <Widget title="ABOUT US" mb={[30, null, null, 0]}>
              <p className="about-text">
                Hype Renting is a luxury and high-end clothing rental platform
                that connects our customers with our renters. We provide a
                platform for fashion collectors to rent the amazing clothes
                they have.
              </p>

              <SocialIcons mt={15}>
                <Li inline={true}>
                  <a href="https://facebook.com" target="_blank" rel="noopener">
                    <SiFacebook />
                  </a>
                </Li>
                <Li inline={true}>
                  <a href="https://twitter.com" target="_blank" rel="noopener">
                    <SiTwitter />
                  </a>
                </Li>
                <Li inline={true}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener">
                    <SiLinkedin />
                  </a>
                </Li>
                <Li inline={true}>
                  <a href="https://youtube.com" target="_blank" rel="noopener">
                    <SiYoutube />
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
