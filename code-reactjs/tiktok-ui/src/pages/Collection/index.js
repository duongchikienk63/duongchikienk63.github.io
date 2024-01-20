import HeaderGeneral from '~/components/Layout/HeaderProducts';
import Footer from '~/components/Layout/Component/Footer';
import ListItems from '~/components/Layout/Component/ListItems';

function Collection() {
    return (
        <div>
            <HeaderGeneral collection="active" freeze="&nbsp;Bộ sưu tập"/>
            <ListItems title="XUÂN HÈ"/>
            <Footer />
        </div>
    );
}

export default Collection;
