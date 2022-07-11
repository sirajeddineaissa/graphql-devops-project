import Head from "next/head";
import Layout from "@components/layout";
import settings from "@data/settings.json";
import LatestBlog from "@components/blog/posts";
import Promotions from "@components/promotions";
import Categories from "@components/categories";
import sliderData from "@data/slider/home-1.json";
import {ProductsTab} from "@components/product/feed";
import {SliderOne as Slider} from "@components/slider";
import {client, blogsQuery, productsQuery, collectionsQuery} from "@graphql";

const Home = ({blogs, products, collections}) => {
    return (
        <Layout>
            <Head>
                <title>{settings?.title}</title>
                <meta name="description" content={settings?.description}/>
            </Head>

            <Slider animate={true} data={sliderData}/>

            <Categories categories={collections}/>

            <ProductsTab products={products} limit={8}/>

            <Promotions/>

            <LatestBlog posts={blogs} pt={[60, 60, 100]}/>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const blogsData = await client(blogsQuery(4)),
        blogs = blogsData?.blogs?.edges[0]?.node?.articles?.edges,
        productsData = await client(productsQuery(50)),
        products = productsData?.products?.edges,
        collectionsData = await client(collectionsQuery(5)),
        collections = collectionsData?.collections?.edges;

    return {
        props: {
            blogs,
            products,
            collections,
        },
        revalidate: 60,
    };
};

export default Home;
