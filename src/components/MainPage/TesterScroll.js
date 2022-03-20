import React, { useState, useEffect, useRef } from "react";
function TesterScroll() {
  const container1 = useRef(null);
  const viewRegion = useRef(null);
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
    let allFeatures = {
      containerOneFeatureOne: {
        content: document.getElementById("container-1-feature-1"),
        scrollPoint: {
          demarcation: null,
        },
      },
      containerOneFeatureTwo: {
        content: document.getElementById("container-1-feature-2"),
        scrollPoint: {
          demarcation: 0.21,
        },
      },
      containerOneFeatureThree: {
        content: document.getElementById("container-1-feature-3"),
        scrollPoint: {
          demarcation: 0.54,
        },
      },
    };

    const containerOneGifImageOne = {
      content: document.getElementById("container-1-img"),
      scrollPoint: {
        demarcation: 0.64,
      },
    };

    for (const [featrueName, featureValue] of Object.entries(allFeatures)) {
      //control opacity when scrolling up or down
      if (!featureValue.scrollPoint.demarcation) continue;
      if (scrollPercent < featureValue.scrollPoint.demarcation) {
        //opacity increasing
        featureValue.content.style.opacity =
          (scrollPercent - (featureValue.scrollPoint.demarcation - 0.1)) * 4;
      } else if (scrollPercent < featureValue.scrollPoint.demarcation + 0.1) {
        //hold opacity on
        featureValue.content.style.opacity = 1;
      } else {
        //opacity decreasing
        featureValue.content.style.opacity =
          (featureValue.scrollPoint.demarcation + 0.2 - scrollPercent) * 4;
      }
    }
    //container 1 gif image
    const gifImg1_triggerPoint =
      containerOneGifImageOne.scrollPoint.demarcation;
    const LAST_POINT = 0.91;
    const gifImg1_scale =
      (scrollPercent - gifImg1_triggerPoint) /
        (LAST_POINT - gifImg1_triggerPoint) +
      1;
    const gifImg1_opacity =
      1 -
      (scrollPercent - gifImg1_triggerPoint) /
        (LAST_POINT - gifImg1_triggerPoint);
    if (scrollPercent >= gifImg1_triggerPoint) {
      containerOneGifImageOne.content.style.transform = `scale(${gifImg1_scale}, ${gifImg1_scale})`;
      containerOneGifImageOne.content.style.opacity = gifImg1_opacity;
    }
    //container 1 gif image 1
  }, [scrollPercent]);

  return (
    <main className="main-page-main-region">
      <div className="scroll-view" ref={viewRegion}></div>
      <section ref={container1} className="container container-1">
        <div className="view-region">
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
        <div className="container-2-region container-2-sugar">
          <img
            id="container-2-img-1"
            className="main-page-gif-image"
            src={currentGifImage.container2}
            alt=""
          />
          <h2 id="container-2-feature-1" className="container-2-feature">
            Sweet
          </h2>
        </div>
        <div className="container-2-region container-2-bitter">
          <h2 id="container-2-feature-2" className="container-2-feature">
            Bitter
          </h2>
          <img
            id="container-2-img-2"
            className="main-page-gif-image"
            src={currentGifImage.container3}
            alt=""
          />
        </div>
        <div className="container-2-region container-2-crush">
          <img
            id="container-2-img-3"
            className="main-page-gif-image"
            src={currentGifImage.container4}
            alt=""
          />
          <h2 id="container-2-feature-3" className="container-2-feature">
            Crush
          </h2>
        </div>
        <div className="container-2-region container-2-bourbon">
          <h2 id="container-2-feature-4" className="container-2-feature">
            Flavour
          </h2>
          <img
            id="container-2-img-4"
            className="main-page-gif-image"
            src={currentGifImage.container5}
            alt=""
          />
        </div>
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
