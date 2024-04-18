import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles);

function Header() {
  const [bgColor, setBgColor] = useState("transparent");
  const [color, setColor] = useState("white");
  const [bdColor, setBdColor] = useState("transparent");

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 60) {
      setBgColor("white");
      setBdColor("transparent transparent black transparent");
      setColor("black");
    } else {
      setBgColor("transparent");
      setBdColor("transparent");
      setColor("white");
    }
  });

  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: bdColor,
      }}
      className={cx("header")}
    >
      <div className={cx("header-menu")}>
        <p>
          <Link style={{ color: color }} to="/">
            Trang Chủ
          </Link>
        </p>
        <p>
          <Link style={{ color: color }} to="/culturalHistory">Lịch Sử - Văn Hoá</Link>
        </p>
        <p>
          <Link style={{ color: color }} to="/cuisine">Ẩm Thực</Link>
        </p>
        <p>
          <Link style={{ color: color }} to="/entertainment">Giải Trí</Link>
        </p>
        <p>
          <Link style={{ color: color }} to="/touristInformation">Thông Tin Du Lịch</Link>
        </p>
      </div>
      <div>
        <p style={{ color: color }} className={cx("login")}>Đăng Nhập</p>
      </div>
    </div>
  );
}

export default Header;
