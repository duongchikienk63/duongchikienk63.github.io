import HeaderGeneral from '~/components/Layout/HeaderProducts';
import ListItems from '~/components/Layout/Component/ListItems';
import Footer from '~/components/Layout/Component/Footer';

function Product() {
    return (
        <div>
            <HeaderGeneral product="active" freeze="&nbsp;Sản phẩm" />;
            <ListItems title="TẤT CẢ SẢN PHẨM" hide="none"/>
            <Footer />
        </div>
    );
}

export default Product;
