import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      {/* 좌측 로고 */}
      <div className="header-left">
        <Link to="/" className="logo">
          Bicycle-App
        </Link>
      </div>

      {/* 중앙 메뉴 */}
      <nav className="header-center">
        <ul>
          <li>
            <NavLink to="/purchase" className={({ isActive }) => isActive ? 'active' : ''}>
              자전거 구매
            </NavLink>
          </li>
          <li>
            <NavLink to="/rental" className={({ isActive }) => isActive ? 'active' : ''}>
              자전거 대여
            </NavLink>
          </li>
          <li>
            <NavLink to="/travel" className={({ isActive }) => isActive ? 'active' : ''}>
              여행지 추천
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* 우측 메뉴 */}
      <div className="header-right">
        <NavLink to="/support" className={({ isActive }) => isActive ? 'active' : ''}>
          고객센터
          {/* <i className="fa-solid fa-headset"></i> */}
        </NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
          로그인
          {/* <i className="fa-regular fa-user"></i> */}
        </NavLink>
        <button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </header>
  );
}
