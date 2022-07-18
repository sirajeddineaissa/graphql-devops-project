import { Container, Col, Row, Form } from "@bootstrap";
import {
  ContactMap,
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
        <ContactMap mb={60}>
          <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=13th%20Street%2047%20W%2013th%20St,%20New%20York,%20NY%2010011,%20USA+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
        </ContactMap>

        <Row>
          <Col lg={4}>
            <ContactContentWrap className="h-100">
              <ContactContentTitle>Contact Info</ContactContentTitle>

              <ContactInfoItem>
                <ContactInfoMethod>Phone:</ContactInfoMethod>
                <ContactInfoText>
                  <p>
                    <a href="tel:+16315593591">+1 631-559-3591</a>
                  </p>
                </ContactInfoText>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactInfoMethod>E-mail:</ContactInfoMethod>
                <ContactInfoText>
                  <p>
                    <a href="mailto:hyperenting@gmail.com">hyperenting@gmail.com</a>
                  </p>
                </ContactInfoText>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactInfoMethod>Address:</ContactInfoMethod>
                <ContactInfoText>
                  <p>Address goes here,</p>
                  <p>street, Crossroad 123.</p>
                </ContactInfoText>
              </ContactInfoItem>
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
                    bg="primary"
                    hvrBg="secondary"
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
