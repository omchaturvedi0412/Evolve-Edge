import React, { useState, useEffect, useRef } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "How do I get a quote?",
    answer:
      "It's simple! Just complete our enquiry form. We will investigate your design and requirements and get back to you with a price quote and completion time.",
  },
  {
    question: "Do you work over weekends?",
    answer:
      "We need to recharge our batteries but in the case of an urgent project we can discuss and overcome the craziest deadlines.",
  },
  {
    question: "How can I contact you?",
    answer:
      "The best way to contact us is our client's area. We have developed it to make the communication process as convenient as possible. It helps us to track and centralize the information exchanged between clients and EvolvEdge. Also you can contact us via email as well: xxx@gmail.com",
  },
  {
    question: "How can I pay?",
    answer: "We accept PayPal and all major credit cards.",
  },
  {
    question: "Do you claim any rights to the final markup?",
    answer: "You bought it, you own it. We do not claim any rights.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Frequently asked Question.....";
  const titleRef = useRef(null);
  const observerRef = useRef(null);
  const intervalRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTypedText("");
          let current = 0;
          clearInterval(intervalRef.current); // clear previous
          intervalRef.current = setInterval(() => {
            setTypedText((prev) => {
              if (current < fullText.length) {
                current++;
                return fullText.slice(0, current);
              } else {
                clearInterval(intervalRef.current);
                return prev;
              }
            });
          }, 60);
        } else {
          clearInterval(intervalRef.current); // reset on exit
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observerRef.current.observe(titleRef.current);
    }

    return () => {
      if (observerRef.current && titleRef.current) {
        observerRef.current.unobserve(titleRef.current);
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div id="faq" className="faq-section">
      <h2 className="faq-title" ref={titleRef}>
        {typedText}
      </h2>
      <div className="faq-wrapper">
        {faqData.map((item, index) => (
          <div className="faq-box" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
            <div className="faq-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;