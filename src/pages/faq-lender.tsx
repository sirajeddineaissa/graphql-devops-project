import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings";
import Breadcrumb from "@components/ui/breadcrumb";
import AccordionGroup2 from "@components/faq/lender";

const FAQ = () => {
  return (
    <Layout>
      <Head>
        <title>{"FAQ | " + settings?.title}</title>
        <meta name="description" content={settings?.description} />
      </Head>
      <Breadcrumb
        py={[40, 80]}
        mb={[60, null, 100]}
        pageTitle="Frequently Asked Questions❓- Lender"
      />
      <AccordionGroup2 />
    </Layout>
  );
};

export default FAQ;
