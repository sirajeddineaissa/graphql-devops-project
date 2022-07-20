import Accordion from "@components/ui/accordion";
import faqData from "@data/faq";

const AccordionGroup = () => {
  return (
    <section className="wrapper">
      {faqData.map((faqItem) => (
        <Accordion title={faqItem.title}>{faqItem.description}</Accordion>
      ))}
    </section>
  );
};

export default AccordionGroup;
