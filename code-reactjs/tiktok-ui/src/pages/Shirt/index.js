import HeaderGeneral from '~/components/Layout/HeaderProducts';
import ListItems from '~/components/Layout/Component/ListItems';
import Footer from '~/components/Layout/Component/Footer';

function Shift() {
    return (
        <div>
            <HeaderGeneral product="active" freeze="&nbsp;Sản phẩm" />;
            <ListItems category='shirt' title="TẤT CẢ SẢN PHẨM" hide="none"/>
            <Footer />
        </div>
    );
}

export default Shift;