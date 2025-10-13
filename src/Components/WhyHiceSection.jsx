import React from "react";
import { Globe, Shield, Zap, TrendingUp } from "lucide-react";
import { useInView } from "./Hooks/useInView.js";
import "../Styles/WhyHiceSection.css";

const features = [
  {
    icon: Globe,
    title: "Online Application",
    description: "Apply from anywhere, anytime with our secure online portal",
  },
  {
    icon: Shield,
    title: "Secure Process",
    description: "Your data is protected with advanced encryption technology",
  },
  {
    icon: Zap,
    title: "Quick Processing",
    description: "Get admission confirmation within 48 hours of submission",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Join 5000+ successful alumni in leading companies",
  },
];

const WhyHiceSection = () => {
  const [sectionRef, isSectionVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={`why-hice-section ${
        isSectionVisible ? "visible" : "hidden"
      }`}
    >
      <div className="why-hice-container">
        <div className="why-hice-header">
          <h2>Why HICE?</h2>
          <div className="why-hice-underline"></div>
        </div>

        <div className="why-hice-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`why-hice-card ${
                  isSectionVisible ? "fade-in" : "fade-out"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="card-hover-glow"></div>

                <div className="icon-box">
                  <Icon size={40} strokeWidth={1.5} />
                  <span className="icon-glow"></span>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHiceSection;
