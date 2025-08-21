import React, { useState } from 'react';
import './Header.css';
import Popup from './Popup_old';
import { useEffect } from 'react';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Show popup automatically once on initial load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const menuData = [
    {
      id: 1,
      name: '탑',
      subMenus: ['블라우스', '티', '셔츠', '니트']
    },
    {
      id: 2,
      name: '아우터',
      subMenus: ['자켓', '코트', '가디건', '머플러']
    },
    {
      id: 3,
      name: '팬츠',
      subMenus: ['청바지', '짧은바지', '긴바지', '레깅스']
    },
    {
      id: 4,
      name: '악세서리',
      subMenus: ['귀고리', '목걸이', '반지', '팔지']
    }
  ];

  const handleMouseEnter = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* 로고 */}
        <div className="logo">
          <div className="logo-placeholder">JUST SHOPPING</div>
        </div>

        {/* 메인 메뉴 */}
        <nav className="main-nav">
          <ul className="menu-list">
            {menuData.map((menu) => (
              <li
                key={menu.id}
                className="menu-item"
                onMouseEnter={() => handleMouseEnter(menu.id)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="menu-link">{menu.name}</span>

                {/* 서브메뉴 */}
                {activeMenu === menu.id && (
                  <ul className="submenu-list">
                    {menu.subMenus.map((subMenu, index) => (
                      <li key={index} className="submenu-item">
                        <a href="#" className="submenu-link">{subMenu}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* 쇼핑몰 이용 팝업 버튼 */}
        <button
          className="popup-btn"
          onClick={() => setShowPopup(true)}
        >
          이용안내
        </button>
      </div>
      {/* 쇼핑몰 이용 팝업창 */}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </header>
  );
};

export default Header;
