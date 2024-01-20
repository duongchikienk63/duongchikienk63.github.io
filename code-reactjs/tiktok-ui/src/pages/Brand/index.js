import HeaderOnly from '~/components/Layout/HeaderBrand';
import Footer from '~/components/Layout/Component/Footer';
import BrandArticle from '~/components/Layout/Component/BrandArticle';

function Brand() {
    return (
        <div>
            <HeaderOnly freeze="&nbsp;Thương hiệu" brand="active" />;
            <BrandArticle />
            <Footer />
        </div>
    );
}

export default Brand;
