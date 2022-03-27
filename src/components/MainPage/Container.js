import React, { useState, useEffect, useRef, useContext } from "react";
import "./mainPage.css";
import ViewRegionContext from "./ViewRegionContext";

function Container(props) {
  const container = props.container.current;
  const [scrollPercent, setScrollPercent] = useState(0);
  const { viewRegion, oldFasionImages } = useContext(ViewRegionContext);

  console.log("viewRegion");
  console.log(viewRegion);
  console.log("container");
  console.log(container);
  const [currentGifImage, setCurrentGifImage] = useState({
    finish: oldFasionImages.finish.images[0],
    sugarCube: oldFasionImages.sugarCube.images[0],
    bitter: oldFasionImages.bitter.images[0],
    crush: oldFasionImages.crush.images[0],
    bourbon: oldFasionImages.bourbon.images[0],
    iceCube: oldFasionImages.iceCube.images[0],
    pour: oldFasionImages.pour.images[0],
    peel: oldFasionImages.peel.images[0],
  });

  const handleScroll = (container) => {
    console.log("handleScroll is running.");
    if (container && container.current && viewRegion && viewRegion.current) {
      const containerRect = container.current.getBoundingClientRect();
      const selfRect = viewRegion.current.getBoundingClientRect();
      const top = containerRect.y + selfRect.height / 2;
      const bottom =
        containerRect.y + containerRect.height - selfRect.height / 2;
      const selfRectOriginalY = selfRect.y + selfRect.height / 2;
      const result = (selfRectOriginalY - top) / (bottom - top);
      setScrollPercent(result);
    }
  };

  // useEffect(() => {
  //   console.log("scrollPercent");
  //   console.log(scrollPercent);
  //   let allFeatures = {
  //     containerOneFeatureOne: {
  //       content: document.getElementById("container-1-feature-1"),
  //       scrollPoint: {
  //         demarcation: null,
  //       },
  //     },
  //     containerOneFeatureTwo: {
  //       content: document.getElementById("container-1-feature-2"),
  //       scrollPoint: {
  //         demarcation: 0.21,
  //       },
  //     },
  //     containerOneFeatureThree: {
  //       content: document.getElementById("container-1-feature-3"),
  //       scrollPoint: {
  //         demarcation: 0.54,
  //       },
  //     },
  //   };

  //   const containerOneGifImageOne = {
  //     content: document.getElementById("container-1-img"),
  //     scrollPoint: {
  //       demarcation: 0.64,
  //     },
  //   };
  //   console.log("container");
  //   console.log(container);
  //   if (container && container.className.includes("container-1")) {
  //     for (const [featrueName, featureValue] of Object.entries(allFeatures)) {
  //       //control opacity when scrolling up or down
  //       if (!featureValue.scrollPoint.demarcation) continue;
  //       if (scrollPercent < featureValue.scrollPoint.demarcation) {
  //         //opacity increasing
  //         featureValue.content.style.opacity =
  //           (scrollPercent - (featureValue.scrollPoint.demarcation - 0.1)) * 4;
  //       } else if (scrollPercent < featureValue.scrollPoint.demarcation + 0.1) {
  //         //hold opacity on
  //         featureValue.content.style.opacity = 1;
  //       } else {
  //         //opacity decreasing
  //         featureValue.content.style.opacity =
  //           (featureValue.scrollPoint.demarcation + 0.2 - scrollPercent) * 4;
  //       }
  //     }
  //     //container 1 gif image
  //     const gifImg1_triggerPoint =
  //       containerOneGifImageOne.scrollPoint.demarcation;
  //     const LAST_POINT = 0.91;
  //     const gifImg1_scale =
  //       (scrollPercent - gifImg1_triggerPoint) /
  //         (LAST_POINT - gifImg1_triggerPoint) +
  //       1;
  //     const gifImg1_opacity =
  //       1 -
  //       (scrollPercent - gifImg1_triggerPoint) /
  //         (LAST_POINT - gifImg1_triggerPoint);
  //     if (scrollPercent >= gifImg1_triggerPoint) {
  //       containerOneGifImageOne.content.style.transform = `scale(${gifImg1_scale}, ${gifImg1_scale})`;
  //       containerOneGifImageOne.content.style.opacity = gifImg1_opacity;
  //     }
  //   }
  // }, [scrollPercent]);

  return (
    <>
      <div className="view-region">
        <img
          id="container-1-img"
          className="main-page-gif-image"
          src={currentGifImage.finish}
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
    </>
  );
}
export default Container;
