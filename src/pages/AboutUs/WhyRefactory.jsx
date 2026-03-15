import { useEffect, useRef, useState } from "react";
import "./WhyRefactory.css";

export default function WhyRefactory() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`why-section ${visible ? "show" : ""}`}
    >
      <h2 className="why-title">Why Refactory</h2>

      <div className="why-question">
        AI가 코드를 생성하는 시대,<br />
        우리는 그 코드를 <span>‘이해’</span>하고 있는가?
      </div>

      <div className="why-container">

        {/* 문제 */}
        <div className="problem-box">
          <div className="problem-item">⚠ AI 코드 생성량 증가</div>
          <div className="problem-item">⚠ 유지보수 난이도 상승</div>
          <div className="problem-item">⚠ 코드 품질 판단 어려움</div>
          <div className="problem-item">⚠ 기술 부채 증가</div>
        </div>

        {/* 화살표 */}
        <div className="arrow-line"></div>

        {/* 중앙 */}
        <div className="center-circle">
          RE:FACTORY
          <br />
          필요성
        </div>

        {/* 화살표 */}
        <div className="arrow-line"></div>

        {/* 솔루션 */}
        <div className="solution-box">

          <div className="solution-item">
            <h3>LLM 의미 분석</h3>
            <div className="solution-desc">
              LLM을 활용해 코드의 의미, 함수 역할, 로직 구조를 분석
            </div>
          </div>

          <div className="solution-item">
            <h3>코드 맥락 이해</h3>
            <div className="solution-desc">
              코드가 시스템 내에서 어떤 역할을 하는지 문맥 기반 분석
            </div>
          </div>

          <div className="solution-item">
            <h3>리팩토링 제안</h3>
            <div className="solution-desc">
              코드 분석 결과를 기반으로 구조 개선 및 리팩토링 제안
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}