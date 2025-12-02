import React from "react";
import "./Testimonial.css";
import testimonials from "../data/testimonials";

export default function Testimonial() {
  // duplicate list for perfect infinite scroll
  const repeated = [...testimonials, ...testimonials];

  return (
    <div className="testimonial-section">
      <h1 className="testimonial-title">Hear it from them</h1>

      <div className="testimonial-marquee">
        <div className="marquee-track">

          {repeated.map((t, index) => {
            const isOdd = index % 2 === 0; // odd visually

            return (
              <div key={index} className="testimonial-card">

                {/* ODD CARD → TOP PROFILE ONLY */}
                {isOdd && (
                  <>
                    <div className="profile">
                      <div
                        className="avatar"
                        style={{ background: t.avatarColor }}
                      ></div>

                      <div>
                        <h3>{t.name}</h3>
                        <p>{t.designation}</p>
                      </div>
                    </div>

                    <hr className="divider" />
                  </>
                )}

                {/* REVIEW TEXT */}
                <p className="testimonial-text">{t.text}</p>

                {/* EVEN CARD → BOTTOM PROFILE ONLY */}
                {!isOdd && (
                  <>
                    <hr className="divider bottom-divider" />

                    <div className="profile bottom-profile">
                      <div
                        className="avatar"
                        style={{ background: t.avatarColor }}
                      ></div>

                      <div>
                        <h3>{t.name}</h3>
                        <p>{t.designation}</p>
                      </div>
                    </div>
                  </>
                )}

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
