import Head from "next/head";
import settings from "@data/settings";
import Layout from "@components/layout";
import Image from "@components/ui/image";
import { Container, Col, Row } from "@bootstrap";
import Breadcrumb from "@components/ui/breadcrumb";

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>{"About | " + settings?.title}</title>
        <meta name="description" content={settings?.description} />
      </Head>

      <Breadcrumb py={[40, 80]} mb={[60, null, 100]} pageTitle="About Us" />

      <section className="about-page-wrapper">
        {/* <Container>
          <h2>
            We want you to dress fresh and be cool 😎
          </h2>
        </Container> */}

        <Container fluid className="mt-3 mt-md-5">
          <Row>
            <Col md={6}>
              <figure>
                <Image
                  width={950}
                  height={600}
                  alt={settings?.title}
                  src="/images/about/02.jpg"
                />
              </figure>
            </Col>

            <Col md={6}>
              <figure>
                <Image
                  width={950}
                  height={600}
                  alt={settings?.title}
                  src="/images/about/01.jpg"
                />
              </figure>
            </Col>
          </Row>
        </Container>

        <Container className="mt-3 mt-md-5">
          <Row>
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="about-store">
                <h4>WHAT IS HYPE RENTING?</h4>
                <p>
                  Hype Renting is a luxury and high-end clothing rental platform
                  that connects our customers with our renters. We are designed
                  to bring sustainability and variety to our clients’ closets.
                  We help fashion lovers save their budget on buying clothing
                  and provide a platform for fashion collectors to rent the
                  amazing clothes resting in their wardrobes to people who need
                  them for certain occasions. We aim to add mobility to clothing
                  and freshness to your daily life.
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div className="about-store">
                <h4>OUR MISSION</h4>
                <p>
                  We are designed to bring sustainability and variety to our
                  clients' closets. We help fashion lovers save their budget on
                  buying clothing and provide a platform for fashion collectors
                  to rent the amazing clothes resting in their wardrobes to
                  people who need them for certain occasions. We aim to add
                  mobility to clcothing and freshness to your daily life.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default AboutPage;
