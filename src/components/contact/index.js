import { Container, Col, Row, Form } from "@bootstrap";
import {
  ContactWrapper,
  ContactInfoItem,
  ContactContentWrap,
  ContactContentTitle,
  ContactInfoMethod,
  ContactInfoText,
  ContactForm
} from "@components/contact/contact.style";
import { InputField } from "@components/checkout/checkout-form.style";
import Input, { TextArea } from "@components/ui/input";
import Button from "@components/ui/button";

const Contact = (props) => {
  return (
    <ContactWrapper {...props}>
      <Container>
        <Row>
          <Col lg={4}>
            <ContactContentWrap className="h-100">
              <ContactContentTitle>Contact Info</ContactContentTitle>

              <ContactInfoItem>
                <ContactInfoMethod>Phone:</ContactInfoMethod>
                <ContactInfoText>
                  <p>
                    <a href="tel:"></a>
                  </p>
                </ContactInfoText>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactInfoMethod>E-mail:</ContactInfoMethod>
                <ContactInfoText>
                  <p>
                    <a href="mailto:">
                    </a>
                  </p>
                </ContactInfoText>
              </ContactInfoItem>

              {/* <ContactInfoItem>
                <ContactInfoMethod>Address:</ContactInfoMethod>
                <ContactInfoText>
                  <p>Address goes here,</p>
                  <p>street, Crossroad 123.</p>
                </ContactInfoText>
              </ContactInfoItem> */}
            </ContactContentWrap>
          </Col>

          <Col lg={8}>
            <ContactContentWrap mt={[30, null, null, 0]}>
              <ContactContentTitle>Get In Touch !</ContactContentTitle>

              <ContactForm>
                <Form>
                  <InputField>
                    <Row>
                      <Col md={6}>
                        <Input
                          id="firstName"
                          name="firstName"
                          label="First Name"
                        />
                      </Col>

                      <Col md={6} className="mt-3 mt-md-0">
                        <Input
                          id="lastName"
                          name="lastName"
                          label="Last Name"
                        />
                      </Col>
                    </Row>
                  </InputField>

                  <InputField>
                    <Input id="subject" name="subject" label="Subject" />
                  </InputField>

                  <InputField>
                    <TextArea
                      rows={8}
                      id="message"
                      name="message"
                      label="Message"
                    />
                  </InputField>

                  <Button
                    tag="button"
                    type="submit"
                    color="white"
                    bg="secondary"
                    hvrBg="black"
                    className="w-100"
                    fontSize="standard"
                    textTransform="uppercase"
                  >
                    Send Message
                  </Button>
                </Form>
              </ContactForm>
            </ContactContentWrap>
          </Col>
        </Row>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
