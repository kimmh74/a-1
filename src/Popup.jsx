import React from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h3>{title || '쇼핑몰 이용안내'}</h3>
          <button 
            className="popup-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="popup-body">
          {children ? (
            children
          ) : (
            <>
              <div className="popup-section">
                <h4>🛒 주문 및 결제</h4>
                <ul>
                  <li>장바구니에 상품을 담고 주문하세요</li>
                  <li>신용카드, 계좌이체, 간편결제 가능</li>
                  <li>주문 후 24시간 내 결제 완료 필요</li>
                </ul>
              </div>
              <div className="popup-section">
                <h4>🚚 배송 안내</h4>
                <ul>
                  <li>주문 완료 후 1-2일 내 출고</li>
                  <li>배송 기간: 2-3일 (도서산간 제외)</li>
                  <li>30,000원 이상 구매 시 무료배송</li>
                </ul>
              </div>
              <div className="popup-section">
                <h4>↩️ 교환 및 반품</h4>
                <ul>
                  <li>상품 수령 후 7일 이내 신청 가능</li>
                  <li>단순 변심 시 배송비 고객 부담</li>
                  <li>상품 하자 시 무료 교환/반품</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="popup-footer">
          <button 
            className="popup-confirm"
            onClick={onClose}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
