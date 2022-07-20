import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings";
import Breadcrumb from "@components/ui/breadcrumb";
import AccordionGroup from "@components/faq";

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
        pageTitle="Frequently Asked Questions❓"
      />
      <AccordionGroup />
    </Layout>
  );
};

export default FAQ;
