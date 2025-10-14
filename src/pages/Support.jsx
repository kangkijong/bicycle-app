import React, { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "../styles/support.css";

export function Support() {
  const [activeTab, setActiveTab] = useState("faq");
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="support-page">
      <h1 className="support-title">고객지원</h1>

      {/* 탭 네비게이션 */}
      <div className="support-tabs">
        <button
          className={activeTab === "faq" ? "active" : ""}
          onClick={() => setActiveTab("faq")}
        >
          자주 묻는 질문
        </button>
        <button
          className={activeTab === "as" ? "active" : ""}
          onClick={() => setActiveTab("as")}
        >
          A/S 안내
        </button>
        <button
          className={activeTab === "data" ? "active" : ""}
          onClick={() => setActiveTab("data")}
        >
          자료실
        </button>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="tab-content">
        {activeTab === "faq" && <FAQ />}
        {activeTab === "as" && <ASInfo />}
        {activeTab === "data" && <Resources />}
      </div>

      {/* 고객센터 안내 */}
      <div className="support-contact">
        <p className="support-label">고객센터</p>
        <h2>02-1234-5678</h2>
        <p>평일 오전 9시 ~ 오후 6시</p>
        <p>토요일, 일요일, 공휴일 휴무</p>
        <div className="support-buttons">
          <button onClick={() => setShowChatbot(true)}>1:1 문의하기</button>
        </div>
      </div>

      {/* 챗봇 팝업 */}
      {showChatbot && (
        <div className="chatbot-popup">
          <div className="chatbot-window">
            <div className="chatbot-header">
              <h4>고객센터 챗봇</h4>
              <button
                className="close-btn"
                onClick={() => setShowChatbot(false)}
              >
                ✕
              </button>
            </div>
            <div className="chatbot-body">
              <p>안녕하세요 😊 무엇을 도와드릴까요?</p>
              <div className="chatbot-placeholder">
                (여기에 챗봇 대화 UI를 나중에 연결할 수 있습니다.)
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ✅ FAQ 섹션 (JSON 연결 버전)
function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("/data/qna.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error("❌ QNA 데이터를 불러오지 못했습니다:", err));
  }, []);

  return (
    <div className="faq-section">
      {faqs.map((item, i) => (
        <div
          key={item.qid}
          className={`faq-item ${openIndex === i ? "open" : ""}`}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        >
          <div className="faq-question">
            <FaQuestionCircle /> <span>{item.q}</span>
          </div>
          {openIndex === i && (
            <div className="faq-answer whitespace-pre-line">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ✅ A/S 안내
function ASInfo() {
  return (
    <div className="as-section">
      <h3>A/S 절차 안내</h3>
      <p>1️⃣ 구입처 또는 공식 대리점을 통해 접수해주세요.</p>
      <p>2️⃣ 접수된 제품은 검수 후 수리 또는 교체됩니다.</p>
      <p>3️⃣ 수리 완료 후 문자로 안내드립니다.</p>
    </div>
  );
}

// ✅ 자료실
function Resources() {
  return (
    <div className="data-section">
      <h3>자료실</h3>
      <ul>
        <li>🚴‍♀️ 첼로 자전거 사용설명서 (PDF)</li>
        <li>⚙️ 정품 등록 가이드</li>
        <li>🔋 전기자전거 배터리 관리 안내</li>
      </ul>
    </div>
  );
}
