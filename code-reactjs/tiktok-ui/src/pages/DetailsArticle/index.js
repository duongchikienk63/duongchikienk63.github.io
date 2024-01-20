import HeaderOnly from '~/components/Layout/HeaderBrand';
import Footer from '~/components/Layout/Component/Footer';

import InterestedArticle from './interestedArtilce';
import RelateArticle from './relateArticle';

function DetailsArticle() {
    return (
        <div>
            <HeaderOnly
                freeze="&nbsp;Thương hiệu"
                brand="active"
                name="/ Bài viết"
            />
            <div
                className="container"
                style={{
                    marginTop: '40px',
                    marginBottom: '85px',
                    border: '1px solid',
                    borderColor: 'transparent transparent #cdcdcd transparent',
                    paddingBottom: '30px',
                }}
            >
                <div className="row mb-2" id="list-product_item">
                    <div className="col-lg-8 pe-5 mb-4">
                        <div>
                            <img
                                src="https://aristino.com/Data/ResizeImage/images/z4844982954392_9df806acc4407a19bf7a7dfd67d7ac30x500x500x4.webp"
                                alt="anh"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <h3 style={{ margin: '10px 0', color: '#8f8f19' }}>
                                Tin tức DCK Store
                            </h3>
                            <h4
                                style={{
                                    marginBottom: '10px',
                                    fontSize: '24px',
                                }}
                            >
                                GRAN OPENING | DCK VINCOM SMART CITY
                            </h4>
                            <p>
                                Tiếp tục hành trình đồng hành cùng các quý ông
                                lịch lãm tại Thủ đô Hà Nội, DCK chính thức khai
                                trương điểm đến mới tại Vincom Smart City - Tây
                                Mỗ - Nam Từ Liêm.
                            </p>
                            <p>
                                Không gian mua sắm hiện đại, dòng sản phẩm đa
                                dạng, thiết kế lịch lãm được đầu tư chỉn chu từ
                                chất liệu đến phom dáng cùng đại tiệc khai
                                trương hấp dẫn đang chờ quý khách khám phá:
                            </p>
                            <p>
                                - ƯU ĐÃI LÊN TỚI 30% toàn bộ dòng sản phẩm: Sơ
                                mi, Quần âu, Polo, Suit, Blazer, Phụ kiện da,..
                            </p>
                            <p>
                                - TRẢI NGHIỆM DỊCH VỤ THÊU TÊN LÊN ÁO miễn phí
                                nêu bật dấu ấn cá nhân
                            </p>
                            <p>- Hàng trăm VOUCHER quà tặng lên tới 500K .</p>
                            <p>
                                &gt;&gt; Đừng bỏ lỡ cuộc hẹn thú vị với màn chào
                                sân chơi thời trang từ 28/4-03/5/2022 tại DCK
                                Vincom Smart City!
                            </p>
                            <p>-------------------------</p>
                            <p>DCK - BE THE MAN</p>
                            <p>Hotline: 0705155283</p>
                            <p>
                                Địa chỉ: Vincom Smart City - Tây Mỗ - Nam Từ
                                Liêm - Hà Nội
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h2 style={{ marginBottom: '15px' }}>XEM NHIỀU</h2>
                        <InterestedArticle />
                        <InterestedArticle />
                        <InterestedArticle />
                    </div>
                </div>
                <h2 style={{ marginBottom: '30px', fontSize: '24px' }}>
                    BÀI VIẾT LIÊN QUAN
                </h2>
                <div className="row mb-2" id="list-product_item">
                    <RelateArticle />
                    <RelateArticle />
                    <RelateArticle />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailsArticle;
