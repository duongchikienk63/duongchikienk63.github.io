function InterestedArticle() {
    return (
        <div className="col-lg-12 post-item mb-3">
            <a href="#">
                <img
                    src="https://aristino.com/Data/ResizeImage/images/z4844982954392_9df806acc4407a19bf7a7dfd67d7ac30x500x500x4.webp"
                    alt="anh"
                    style={{ width: '100%' }}
                />
                <div style={{ padding: '10px' }}>
                    <h3 style={{ color: '#8f8f19' }}>Tin tức DCK Store</h3>
                    <h4>GRAN OPENING | DCK VINCOM SMART CITY</h4>
                    <p
                        style={{
                            height: '42px',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: '2',
                        }}
                    >
                        Tiếp tục hành trình đồng hành cùng các quý ông lịch lãm
                        tại Thủ đô Hà Nội, DCK chính thức khai trương điểm đến
                        mới tại Vincom Smart City - Tây Mỗ - Nam Từ Liêm.
                    </p>
                </div>
            </a>
        </div>
    );
}

export default InterestedArticle;
