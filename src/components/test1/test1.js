import React, { useState, useEffect, useRef } from "react";
import "./test1.css";
function Test1() {
  const container = useRef(null);
  const container1 = useRef(null);
  const viewRegion = useRef(null);
  const scrollingElRef = useRef(null);

  const [scrollPercent, setScrollPercent] = useState(0);
  const handleScroll = () => {
    console.log("container1");
    console.log(container1);
    console.log("viewRegion");
    console.log(viewRegion);
    if (container1 && container1.current && viewRegion && viewRegion.current) {
      const containerRect = container1.current.getBoundingClientRect();
      const selfRect = viewRegion.current.getBoundingClientRect();
      const offTop = containerRect.y - selfRect.y;
      const top = containerRect.y + selfRect.height / 2;
      const bottom =
        containerRect.y + containerRect.height - selfRect.height / 2;
      const selfRectOriginalY = selfRect.y + selfRect.height / 2;

      const result = (selfRectOriginalY - top) / (bottom - top);

      setScrollPercent(result);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("scrollPercent");
    console.log(scrollPercent);
  }, [scrollPercent]);

  return (
    <div className="test-app-region">
      <main className="test-main" ref={viewRegion}>
        This is sticky view.
      </main>
      <div className="test-second-region">
        <section className="test-region test-region-1" ref={container1}>
          <p>
            111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111 111111111111111111111111
          </p>
        </section>
        <section className="test-region test-region-2">
          <p>
            22222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222
            22222222222222222222222222222
          </p>
        </section>
      </div>
    </div>
  );
}
export default Test1;
