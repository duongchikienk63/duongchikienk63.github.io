import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      <img
        className={cx("background")}
        src="https://statics.vinpearl.com/du-lich-ha-noi-4-ngay-3-dem-1_1681407076.jpg"
        alt="background"
      ></img>
      <div
      className={cx('container')}
      style={{
        height: '1000px',
        
      }}>
        <h2>Nổi Bật</h2>
        
      </div>
    </div>
  );
}

export default Home;
