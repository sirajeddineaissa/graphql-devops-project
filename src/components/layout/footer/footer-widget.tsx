import Link from "next/link";
import Widget from "@components/ui/widget";
import NewsletterForm from "@components/newsletter";
import { Container, Col, Row, Ul, Li } from "@bootstrap";
import { WidgetWrapper, SocialIcons } from "./footer.style";
import { SiFacebook, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

const FooterWidget = (props) => {
  return (
    <WidgetWrapper {...props} py={[60, 60, 100]}>
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <Widget title="ABOUT US" mb={[30, null, null, 0]}>
              <p className="about-text">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>

              <SocialIcons mt={15}>
                <Li inline={true}>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    <SiFacebook />
                  </a>
                </Li>
                <Li inline={true}>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    <SiInstagram />
                  </a>
                </Li>
                <Li inline={true}>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    <SiLinkedin />
                  </a>
                </Li>
                <Li inline={true}>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    <SiWhatsapp />
                  </a>
                </Li>
              </SocialIcons>
            </Widget>
          </Col>

          <Col sm={6} lg={3}>
            <Widget title="INFORMATION" mb={[30, null, null, 0]}>
              <Ul className="widget-list">
                <Li>
                  <Link href="/about">About Us</Link>
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
                  <Link href="/cart">My Cart</Link>
                </Li>
                <Li>
                  <Link href="/wishlist">Wishlist</Link>
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
