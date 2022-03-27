import React, { useState, useEffect, useRef, useContext } from "react";
import "./mainPage.css";
import ViewRegionContext from "./ViewRegionContext.js";
import Container from "./Container";
function TesterScroll() {
  // const { viewRegionElement } = useContext(ViewRegionContext);
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);
  const container5 = useRef(null);
  const container6 = useRef(null);
  // const viewRegion = useRef(null);
  const [viewRegion, setViewRegion] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(null);
  // const [scrollPercent, setScrollPercent] = useState(0);
  // const [scrollPercent2, setScrollPercent2] = useState(0);
  let oldFasionImages = {
    bitter: {
      images: [],
      amount: 93,
      fileName: "bitter",
      startNumber: 5695,
    },
    bourbon: {
      images: [],
      amount: 123,
      fileName: "bourbon",
      startNumber: 6366,
    },
    crush: {
      images: [],
      amount: 73,
      fileName: "crush",
      startNumber: 5999,
    },
    finish: {
      images: [],
      amount: 1,
      fileName: "finish",
      startNumber: 1,
    },
    iceCube: {
      images: [],
      amount: 68,
      fileName: "ice cube",
      startNumber: 7166,
    },
    peel: {
      images: [],
      amount: 77,
      fileName: "peel",
      startNumber: 7876,
    },
    pour: {
      images: [],
      amount: 100,
      fileName: "pour",
      startNumber: 7275,
    },
    sugarCube: {
      images: [],
      amount: 37,
      fileName: "test",
      startNumber: 5419,
    },
  };
  // const containers = [
  //   container1,
  //   container2,
  //   container3,
  //   container4,
  //   container5,
  //   container6,
  // ];

  loadImageListFromEachFolder(oldFasionImages);
  function loadImageListFromEachFolder(imgObject) {
    for (const [key, imageName] of Object.entries(imgObject)) {
      for (let i = 0; i < imageName.amount; i++) {
        imageName.images.push(
          `../images/cocktail-${key}/${imageName.fileName}${
            imageName.startNumber + i
          }.png`
        );
      }
    }
  }

  function scrollingElRef(ref) {
    console.log("ref");
    console.log(ref);
    setViewRegion(ref);
  }

  console.log("container1");
  console.log(container1);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll(container1), {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll(container1));
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log("position");
    console.log(position);
    setScrollPosition(position);
  };
  window.addEventListener("scroll", console.log("Y = " + scrollPosition));

  // for (let i = 0; i < containers.length; i++) {
  //   containerComponent.push(<Container container={containers[i]} />);
  // }

  // const handleScroll = (container) => {
  //   if (container && container.current && viewRegion && viewRegion.current) {
  //     const containerRect = container.current.getBoundingClientRect();
  //     const selfRect = viewRegion.current.getBoundingClientRect();
  //     const top = containerRect.y + selfRect.height / 2;
  //     const bottom =
  //       containerRect.y + containerRect.height - selfRect.height / 2;
  //     const selfRectOriginalY = selfRect.y + selfRect.height / 2;
  //     const result = (selfRectOriginalY - top) / (bottom - top);
  //     setScrollPercent(result);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll(containers[0]), {
  //     passive: true,
  //   });
  //   window.addEventListener("scroll", handleScroll(containers[1]), {
  //     passive: true,
  //   });
  //   window.addEventListener("scroll", handleScroll(containers[2]), {
  //     passive: true,
  //   });
  //   window.addEventListener("scroll", handleScroll(containers[3]), {
  //     passive: true,
  //   });
  //   window.addEventListener("scroll", handleScroll(containers[4]), {
  //     passive: true,
  //   });
  //   window.addEventListener("scroll", handleScroll(containers[5]), {
  //     passive: true,
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll(containers[0]));
  //     window.removeEventListener("scroll", handleScroll(containers[1]));
  //     window.removeEventListener("scroll", handleScroll(containers[2]));
  //     window.removeEventListener("scroll", handleScroll(containers[3]));
  //     window.removeEventListener("scroll", handleScroll(containers[4]));
  //     window.removeEventListener("scroll", handleScroll(containers[5]));
  //   };
  // }, []);

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

  //   for (const [featrueName, featureValue] of Object.entries(allFeatures)) {
  //     //control opacity when scrolling up or down
  //     if (!featureValue.scrollPoint.demarcation) continue;
  //     if (scrollPercent < featureValue.scrollPoint.demarcation) {
  //       //opacity increasing
  //       featureValue.content.style.opacity =
  //         (scrollPercent - (featureValue.scrollPoint.demarcation - 0.1)) * 4;
  //     } else if (scrollPercent < featureValue.scrollPoint.demarcation + 0.1) {
  //       //hold opacity on
  //       featureValue.content.style.opacity = 1;
  //     } else {
  //       //opacity decreasing
  //       featureValue.content.style.opacity =
  //         (featureValue.scrollPoint.demarcation + 0.2 - scrollPercent) * 4;
  //     }
  //   }
  //   //container 1 gif image
  //   const gifImg1_triggerPoint =
  //     containerOneGifImageOne.scrollPoint.demarcation;
  //   const LAST_POINT = 0.91;
  //   const gifImg1_scale =
  //     (scrollPercent - gifImg1_triggerPoint) /
  //       (LAST_POINT - gifImg1_triggerPoint) +
  //     1;
  //   const gifImg1_opacity =
  //     1 -
  //     (scrollPercent - gifImg1_triggerPoint) /
  //       (LAST_POINT - gifImg1_triggerPoint);
  //   if (scrollPercent >= gifImg1_triggerPoint) {
  //     containerOneGifImageOne.content.style.transform = `scale(${gifImg1_scale}, ${gifImg1_scale})`;
  //     containerOneGifImageOne.content.style.opacity = gifImg1_opacity;
  //   }
  // }, [scrollPercent]);

  // const handleScroll2 = () => {
  //   if (container2 && container2.current && viewRegion && viewRegion.current) {
  //     const containerRect = container2.current.getBoundingClientRect();
  //     const selfRect = viewRegion.current.getBoundingClientRect();
  //     const top = containerRect.y + selfRect.height / 2;
  //     const bottom =
  //       containerRect.y + containerRect.height - selfRect.height / 2;
  //     const selfRectOriginalY = selfRect.y + selfRect.height / 2;
  //     const result = (selfRectOriginalY - top) / (bottom - top);
  //     setScrollPercent2(result);
  //   }
  // };

  // useEffect(() => {
  //   console.log("scrollPercent2");
  //   console.log(scrollPercent2);
  //   const containerTwoGifImageOne =
  //     document.getElementById("container-2-img-1");
  //   //container 2 gif image 1
  //   const containerTwoGifImg1_triggerPoint = -0.08;
  //   const containerTwoLAST_POINT = 0.29;
  //   const imgOneAmount = oldFasionImages.sugarCube.amount - 1;
  //   const containerTwoGifImg1_opacity =
  //     (scrollPercent2 - containerTwoGifImg1_triggerPoint) /
  //     (containerTwoLAST_POINT - containerTwoGifImg1_triggerPoint);
  //   let imageClip = Math.floor(
  //     imgOneAmount *
  //       ((scrollPercent2 - containerTwoGifImg1_triggerPoint) /
  //         (containerTwoLAST_POINT - containerTwoGifImg1_triggerPoint))
  //   );
  //   if (imageClip < 0) {
  //     imageClip = 0;
  //   }
  //   if (imageClip > imgOneAmount) {
  //     imageClip = imgOneAmount;
  //   }
  //   if (scrollPercent2 >= containerTwoGifImg1_triggerPoint) {
  //     containerTwoGifImageOne.style.opacity = containerTwoGifImg1_opacity;
  //   }
  //   console.log("imageClip");
  //   console.log(imageClip);
  //   setCurrentGifImage((images) => {
  //     return {
  //       ...images,
  //       sugarCube: oldFasionImages.sugarCube.images[imageClip],
  //     };
  //   });
  // }, [scrollPercent2]);
  return (
    <main className="main-page-main-region">
      <ViewRegionContext.Provider value={{ viewRegion, oldFasionImages }}>
        <div className="scroll-view" ref={scrollingElRef}></div>
        <section ref={container1} className="container container-1">
          {/* <Container container={container1} /> */}
        </section>
        {/* <section ref={container1} className="container container-1">
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
      </section> */}
        {/* <section ref={container2} className="container container-2">
          <div className="container-2-region container-2-sugar">
            <img
              id="container-2-img-1"
              className="main-page-gif-image"
              src={currentGifImage.sugarCube}
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
              src={currentGifImage.bitter}
              alt=""
            />
          </div>
          <div className="container-2-region container-2-crush">
            <img
              id="container-2-img-3"
              className="main-page-gif-image"
              src={currentGifImage.crush}
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
              src={currentGifImage.bourbon}
              alt=""
            />
          </div>
        </section>
        <section ref={container3} className="container container-3">
          <img
            id="container-3-img"
            className="main-page-gif-image"
            src={currentGifImage.iceCube}
            alt=""
          />
          <h2 id="container-3-feature-1" className="container-3-feature">
            Old Fasion
          </h2>
        </section>
        <section ref={container4} className="container container-4">
          <img
            id="container-4-img"
            className="main-page-gif-image"
            src={currentGifImage.pour}
            alt=""
          />
          <h2 id="container-4-feature-1" className="container-4-feature">
            Old Fasion
          </h2>
        </section>
        <section ref={container5} className="container container-5">
          <img
            id="container-5-img"
            className="main-page-gif-image"
            src={currentGifImage.peel}
            alt=""
          />
          <h2 id="container-5-feature-1" className="container-5-feature">
            Old Fasion
          </h2>
        </section>
        <section ref={container6} className="container container-6">
          <img
            id="container-6-img"
            className="main-page-gif-image"
            src={currentGifImage.finish}
            alt=""
          />
          <h2 id="container-6-feature-1" className="container-6-feature">
            Old Fasion
          </h2>
        </section> */}
      </ViewRegionContext.Provider>
    </main>
  );
}
export default TesterScroll;
