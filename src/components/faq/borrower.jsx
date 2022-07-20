import Accordion from "@components/ui/accordion";
import faqData from "@data/faq";

const AccordionGroup1 = () => {
  return (
    <section className="wrapper">
      {faqData["borrower"].map((faqItem) => (
        <Accordion title={faqItem.title}>{faqItem.description}</Accordion>
      ))}
    </section>
  );
};

export default AccordionGroup1;
