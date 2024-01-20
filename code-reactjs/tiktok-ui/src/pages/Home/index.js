import DefaultLayout from '~/components/Layout/DefaultLayout';
import Footer from '~/components/Layout/Component/Footer';
import ListProduct from '~/components/Layout/Component/ListProduct';
import Banner from '~/components/Layout/Component/ListProduct/Banner';

function Home() {
    return (

        <div>
            <DefaultLayout />
            <ListProduct name="DANH MỤC NỔI BẬT" />
            <Banner />
            <ListProduct name="SẢN PHẨM MỚI" />
            <Banner />
            <Footer />
        </div>
    );
}

export default Home;
