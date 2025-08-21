import React, { useState, useEffect } from 'react';
import './Slide.css';

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: './img1.jpg',
      text: '새로운 컬렉션을 만나보세요',
      description: '트렌디한 패션 아이템으로 스타일을 완성하세요'
    },
    {
      id: 2,
      image: './img2.jpg',
      text: '특별한 할인 혜택',
      description: '한정 시간 특가로 만나는 특별한 기회'
    },
    {
      id: 3,
      image: './img3.jpg',
      text: '고품질 패션 브랜드',
      description: '품질과 스타일을 모두 만족하는 선택'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slide-container">
      <div className="slide-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <div className="slide-image">
              <img src={slide.image} alt={`Slide ${slide.id}`} />
            </div>
            <div className="slide-content">
              <h2 className="slide-title">{slide.text}</h2>
              <p className="slide-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* 인디케이터 */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
