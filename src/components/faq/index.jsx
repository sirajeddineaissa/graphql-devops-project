import Accordion from "@components/ui/accordion";
import faqData from "@data/faq";
import { Container, Row, Col } from "@bootstrap";
const AccordionGroup = () => {
  return (
    <section>
      <Container fluid className="mt-3 mt-md-5">
        <Row>
          <Col md={6}>
            {faqData["borrower"].map((faqItem) => (
              <Accordion title={faqItem.title}>{faqItem.description}</Accordion>
            ))}
          </Col>
          <Col md={6}>
            {faqData["lender"].map((faqItem) => (
              <Accordion title={faqItem.title}>{faqItem.description}</Accordion>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AccordionGroup;
