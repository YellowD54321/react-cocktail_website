import React, { useState, useEffect, useRef } from "react";
function TesterScroll() {
  const container = useRef(null);
  const container1 = useRef(null);
  const viewRegion = useRef(null);
  const scrollingElRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  let oldFasionImages = {
    bitter: {
      images: [],
      amount: 15,
    },
    bourbon: {
      images: [],
      amount: 33,
    },
    crush: {
      images: [],
      amount: 18,
    },
    finish: {
      images: [],
      amount: 1,
    },
    iceCube: {
      images: [],
      amount: 11,
    },
    peel: {
      images: [],
      amount: 16,
    },
    pour: {
      images: [],
      amount: 17,
    },
    sugarCube: {
      images: [],
      amount: 23,
    },
  };
  loadImageListFromEachFolder(oldFasionImages);
  const [currentGifImage, setCurrentGifImage] = useState({
    container1: oldFasionImages.finish.images[0],
    container2: oldFasionImages.sugarCube.images[0],
    container3: oldFasionImages.bitter.images[0],
    container4: oldFasionImages.crush.images[0],
    container5: oldFasionImages.bourbon.images[0],
    container6: oldFasionImages.iceCube.images[0],
    container7: oldFasionImages.pour.images[0],
    container8: oldFasionImages.peel.images[0],
    container9: oldFasionImages.finish.images[0],
  });
  // const containerSwitchPoint = {
  //   container1to2: 18 * scrollVhStep,
  //   container2to3: 50000,
  //   container3to4: 50000,
  //   container4to5: 50000,
  //   container5to6: 50000,
  //   container6to7: 50000,
  // };

  function loadImageListFromEachFolder(imgObject) {
    for (const [key, imageName] of Object.entries(imgObject)) {
      for (let i = 1; i <= imageName.amount; i++) {
        imageName.images.push(`../images/cocktail-${key}/${key}-${i}.png`);
      }
    }
  }

  const handleScroll = () => {
    if (container1 && container1.current && viewRegion && viewRegion.current) {
      const containerRect = container1.current.getBoundingClientRect();
      const selfRect = viewRegion.current.getBoundingClientRect();
      const offTop = containerRect.y - selfRect.y;
      const top = containerRect.y + selfRect.height / 2;
      const bottom =
        containerRect.y + containerRect.height - selfRect.height / 2;
      const selfRectOriginalY = selfRect.y + selfRect.height / 2;

      console.log("top");
      console.log(top);
      console.log("bottom");
      console.log(bottom);
      console.log("selfRectOriginalY");
      console.log(selfRectOriginalY);

      // console.log("scrollingElRef");
      // console.log(scrollingElRef);
      // console.log("scrollingElRef?.clientHeight ");
      // console.log(scrollingElRef?.current?.clientHeight);

      // console.log("containerRect.y");
      // console.log(containerRect.y);
      // console.log("selfRect.y");
      // console.log(selfRect.y);
      // console.log("containerRect.height");
      // console.log(containerRect.height);
      // console.log("selfRect.height");
      // console.log(selfRect.height);
      // console.log("offTop");
      // console.log(offTop);

      // if (containerRect.height < selfRect.height) {
      //   const viewHeight = selfRect.height - containerRect.height;
      //   const result = offTop / viewHeight;
      //   console.log("viewHeight");
      //   console.log(viewHeight);
      //   console.log("result");
      //   console.log(result);
      //   setScrollPercent(result);
      // } else {
      // const viewHeight = containerRect.height;
      // const result = offTop < 0 ? offTop / viewHeight : offTop / viewHeight + 1;
      const result = (selfRectOriginalY - top) / (bottom - top);
      // console.log(viewHeight);
      console.log("result");
      console.log(result);
      setScrollPercent(result);
      // }
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
    let allFeatures = {
      containerOneFeatureOne: {
        content: document.getElementById("container-1-feature-1"),
        scrollPoint: {
          demarcation: null,
          scrollUp: null,
          scrollDown: null,
        },
      },
      containerOneFeatureTwo: {
        content: document.getElementById("container-1-feature-2"),
        scrollPoint: {
          demarcation: 0.21,
          scrollUp: 0.16,
          scrollDown: 0.37,
        },
      },
      containerOneFeatureThree: {
        content: document.getElementById("container-1-feature-3"),
        scrollPoint: {
          demarcation: 0.54,
          scrollUp: 0.43,
          scrollDown: 0.7,
        },
      },
    };
    for (const [featrueName, featureValue] of Object.entries(allFeatures)) {
      //control opacity when scrolling up or down
      if (!featureValue.scrollPoint.demarcation) continue;
      if (scrollPercent < featureValue.scrollPoint.demarcation) {
        //opacity increasing
        featureValue.content.style.opacity =
          (scrollPercent - (featureValue.scrollPoint.demarcation - 0.1)) * 4;
        // featureValue.content.style.opacity = 0;
      } else if (scrollPercent < featureValue.scrollPoint.demarcation + 0.1) {
        featureValue.content.style.opacity = 1;
      } else {
        //opacity decreasing
        // featureValue.content.style.opacity =
        //   -(scrollPercent - featureValue.scrollPoint.scrollDown) * 0.0025;
        console.log("(featureValue.scrollPoint.demarcation + 0.2)");
        console.log(featureValue.scrollPoint.demarcation + 0.2);
        console.log(
          "scrollPercent - (featureValue.scrollPoint.demarcation + 0.2)"
        );
        console.log(featureValue.scrollPoint.demarcation + 0.2 - scrollPercent);
        featureValue.content.style.opacity =
          (featureValue.scrollPoint.demarcation + 0.2 - scrollPercent) * 4;
      }
    }
  }, [scrollPercent]);

  return (
    <main className="scroll-view" ref={container}>
      <section ref={container1} className="container container-1">
        <div className="view-region" ref={viewRegion}>
          <img
            id="container-1-img"
            className="main-page-gif-image"
            src={currentGifImage.container1}
            alt=""
          />
        </div>
        <h2 id="container-1-feature-1" className="container-1-feature">
          Old Fasion
        </h2>
        <p id="container-1-feature-2" className="container-1-feature">
          Before drinking
        </p>
        <p id="container-1-feature-3" className="container-1-feature">
          We make it
        </p>
      </section>
      <section className="container container-2">
        <img
          id="container-2-img-1"
          className="main-page-gif-image"
          src={currentGifImage.container2}
          alt=""
        />
        <h2 id="container-2-feature-1" className="container-2-feature">
          Old Fasion
        </h2>
      </section>
      <section className="container container-3">
        <img
          className="main-page-gif-image"
          src={currentGifImage.container3}
          alt=""
        />
        <h2 id="container-3-feature-1" className="container-3-feature">
          Old Fasion
        </h2>
      </section>
    </main>
  );
}
export default TesterScroll;
