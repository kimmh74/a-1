import React from 'react';
import './Contents.css';
import icon1 from './assets/gallery/icon1.jpg';
import icon2 from './assets/gallery/icon2.jpg';
import icon3 from './assets/gallery/icon3.jpg';

const Contents = () => {
  const notices = [
    { id: 1, title: '신상품 입고 안내', date: '2024.01.15' },
    { id: 2, title: '배송 일정 변경 안내', date: '2024.01.14' },
    { id: 3, title: '시스템 점검 안내', date: '2024.01.13' },
    { id: 4, title: '이벤트 당첨자 발표', date: '2024.01.12' }
  ];

  const galleryItems = [
    { id: 1, image: icon1, title: '봄 컬렉션' },
    { id: 2, image: icon2, title: '여름 컬렉션' },
    { id: 3, image: icon3, title: '가을 컬렉션' },
    { id: 4, image: icon1, title: '겨울 컬렉션' }
  ];

  const quickLinks = [
    { id: 1, title: '회원가입', icon: '👤', link: '/signup' },
    { id: 2, title: '로그인', icon: '🔑', link: '/login' },
    { id: 3, title: '장바구니', icon: '🛒', link: '/cart' },
    { id: 4, title: '주문조회', icon: '📋', link: '/orders' },
    { id: 5, title: '고객센터', icon: '📞', link: '/support' },
    { id: 6, title: 'FAQ', icon: '❓', link: '/faq' }
  ];

  return (
    <div className="contents-container">
      <div className="contents-wrapper">
        {/* 첫 번째 섹션: 공지사항/갤러리 */}
        <div className="content-section">
          <div className="notice-section">
            <h3 className="section-title">공지사항</h3>
            <ul className="notice-list">
              {notices.map((notice) => (
                <li key={notice.id} className="notice-item">
                  <span className="notice-title">{notice.title}</span>
                  <span className="notice-date">{notice.date}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="gallery-section">
            <h3 className="section-title">갤러리</h3>
            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <div key={item.id} className="gallery-item">
                  <div className="gallery-image-placeholder">
                    {item.title}
                  </div>
                  <p className="gallery-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 두 번째 섹션: 배너 */}
        <div className="content-section">
          <div className="banner-section">
            <h3 className="section-title">특별한 혜택</h3>
            <div className="banner-content">
              <div className="banner-image-placeholder">
                <h4>신규 회원</h4>
                <p>첫 구매 시</p>
                <strong>20% 할인</strong>
                <button className="banner-btn">자세히 보기</button>
              </div>
            </div>
          </div>
        </div>

        {/* 세 번째 섹션: 바로가기 */}
        <div className="content-section">
          <div className="quick-link-section">
            <h3 className="section-title">바로가기</h3>
            <div className="quick-link-grid">
              {quickLinks.map((link) => (
                <a key={link.id} href={link.link} className="quick-link-item">
                  <span className="quick-link-icon">{link.icon}</span>
                  <span className="quick-link-title">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
