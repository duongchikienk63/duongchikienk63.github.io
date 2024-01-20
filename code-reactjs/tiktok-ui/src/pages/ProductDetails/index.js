import Footer from '~/components/Layout/Component/Footer';
import HeaderOnly from '~/components/Layout/HeaderBrand';
import Details from '~/components/Layout/Component/Details';

function ProductDetails() {
    return (
        <div>
            <HeaderOnly freeze="&nbsp;Sản phẩm"  back="/product" name="/ Chi tiết sản phẩm"/>
            <Details/>
            <Footer />
        </div>
    );
}

export default ProductDetails;
