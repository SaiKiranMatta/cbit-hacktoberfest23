import { useState } from 'react';

const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${index === activeIndex ? 'active' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="faq-question">{faq.question}</div>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
