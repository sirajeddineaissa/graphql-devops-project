import Accordion from "@components/ui/accordion";
import faqData from "@data/faq";

const AccordionGroup2 = () => {
  return (
    <section className="wrapper">
      {faqData["lender"].map((faqItem) => (
        <Accordion title={faqItem.title}>{faqItem.description}</Accordion>
      ))}
    </section>
  );
};

export default AccordionGroup2;
