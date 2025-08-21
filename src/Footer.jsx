import React from 'react';
import './Footer.css';

const Footer = () => {
  const snsLinks = [
    { id: 1, name: 'Facebook', icon: '📘', link: 'https://facebook.com' },
    { id: 2, name: 'Instagram', icon: '📷', link: 'https://instagram.com' },
    { id: 3, name: 'Twitter', icon: '🐦', link: 'https://twitter.com' },
    { id: 4, name: 'YouTube', icon: '📺', link: 'https://youtube.com' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Logo */}
        <div className="footer-logo">
          <div className="footer-logo-text">JUST쇼핑몰</div>
          <p className="footer-slogan">당신의 스타일을 완성하는 패션 쇼핑몰</p>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p className="copyright-text">
            <br/><br/>
            © 2025 MY JUST쇼핑몰
            <br/>All rights reserved.
          </p>
          <p className="company-info">
           
          </p>
        </div>

        {/* SNS */}
        <div className="footer-sns">
          <h4 className="sns-title"></h4>
          <div className="sns-links">
            {snsLinks.map((sns) => (
              <a
                key={sns.id}
                href={sns.link}
                target="_blank"
                rel="noopener noreferrer"
                className="sns-link"
              >
                <span className="sns-icon">{sns.icon}</span>
                <span className="sns-name">{sns.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
