import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQAccordion.css';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}
        >
          <button
            className="faq-item__header"
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            aria-expanded={openIndex === i}
          >
            <span className="faq-item__question">{item.question}</span>
            <ChevronDown size={20} className="faq-item__icon" />
          </button>
          <div className="faq-item__body">
            <div className="faq-item__answer">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
