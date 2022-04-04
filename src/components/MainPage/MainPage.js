import React, { useState, useEffect, useRef, useMemo } from "react";
import "./mainPage.css";
import { useViewRegion } from "./MainPageReducer/ViewRegionContext.js";
import { ScrollEffect } from "./ScrollEffect";
import Container from "./Container";
function MainPage() {
  let oldFasionImagesOriginal = {
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
  const [{ oldFasionImages }, dispatch] = useViewRegion();
  const scrollingElRef = useRef(null);
  // const container1 = useRef(null);
  const { scrollEffectContainer1, scrollEffectContainer2 } = useMemo(() =>
    ScrollEffect()
  );

  useEffect(() => {
    //Initialize oldFasionImages
    loadImageListFromEachFolder(oldFasionImagesOriginal);
    dispatch({
      type: "SET_IMAGE",
      item: {
        oldFasionImages: oldFasionImagesOriginal,
      },
    });

    //Initialize viewRegion
    dispatch({
      type: "SET_VIEW_REGION",
      item: {
        viewRegion: scrollingElRef.current,
      },
    });
  }, [scrollingElRef]);

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

  return (
    <main className="main-page-main-region">
      <div className="scroll-view" ref={scrollingElRef}></div>
      <Container containerIndex={1}>
        {(scrollPercent) => (
          <>
            <div className="view-region">
              <img
                id="container-1-img"
                className="main-page-gif-image"
                src={oldFasionImages?.finish?.images[0]}
                alt=""
                style={scrollEffectContainer1("container-1-img", scrollPercent)}
              />
            </div>
            <h2 id="container-1-feature-1" className="container-1-feature">
              Old Fasion
            </h2>
            <p
              id="container-1-feature-2"
              className="container-1-feature"
              style={scrollEffectContainer1(
                "container-1-feature-2",
                scrollPercent
              )}
            >
              Before drinking
            </p>
            <p
              id="container-1-feature-3"
              className="container-1-feature"
              style={scrollEffectContainer1(
                "container-1-feature-3",
                scrollPercent
              )}
            >
              We make it
            </p>
          </>
        )}
      </Container>
      <Container containerIndex={2}>
        {(scrollPercent) => (
          <>
            <div className="container-2-region container-2-sugar">
              <div className="container-2-img-region container-2-img-region-sugar">
                <div
                  className="container-2-img-blur-edge"
                  style={scrollEffectContainer2(
                    "container-2-img-1-blur-edge",
                    scrollPercent
                  )}
                >
                  <img
                    id="container-2-img-1"
                    className="main-page-gif-image container-2-img"
                    src={oldFasionImages?.sugarCube?.images[0]}
                    alt=""
                    style={scrollEffectContainer2(
                      "container-2-img-1",
                      scrollPercent
                    )}
                  />
                </div>
                <h2
                  id="container-2-feature-1"
                  className="container-2-feature"
                  style={scrollEffectContainer2(
                    "container-2-feature-1",
                    scrollPercent
                  )}
                >
                  Sweet
                </h2>
              </div>
            </div>
            <div className="container-2-region container-2-bitter">
              <div className="container-2-img-region container-2-img-region-bitter">
                <h2
                  id="container-2-feature-2"
                  className="container-2-feature"
                  style={scrollEffectContainer2(
                    "container-2-feature-2",
                    scrollPercent
                  )}
                >
                  Bitter
                </h2>
                <div
                  className="container-2-img-blur-edge"
                  style={scrollEffectContainer2(
                    "container-2-img-2-blur-edge",
                    scrollPercent
                  )}
                >
                  <img
                    id="container-2-img-2"
                    className="main-page-gif-image container-2-img"
                    src={oldFasionImages?.bitter?.images[0]}
                    alt=""
                    style={scrollEffectContainer2(
                      "container-2-img-2",
                      scrollPercent
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="container-2-region container-2-crush">
              <div className="container-2-img-region container-2-img-region-crush">
                <div
                  className="container-2-img-blur-edge"
                  style={scrollEffectContainer2(
                    "container-2-img-3-blur-edge",
                    scrollPercent
                  )}
                >
                  <img
                    id="container-2-img-3"
                    className="main-page-gif-image container-2-img"
                    src={oldFasionImages?.crush?.images[0]}
                    alt=""
                    style={scrollEffectContainer2(
                      "container-2-img-3",
                      scrollPercent
                    )}
                  />
                </div>
                <h2
                  id="container-2-feature-3"
                  className="container-2-feature"
                  style={scrollEffectContainer2(
                    "container-2-feature-3",
                    scrollPercent
                  )}
                >
                  Crush
                </h2>
              </div>
            </div>
            <div className="container-2-region container-2-bourbon">
              <div className="container-2-img-region container-2-img-region-bourbon">
                <h2
                  id="container-2-feature-4"
                  className="container-2-feature"
                  style={scrollEffectContainer2(
                    "container-2-feature-4",
                    scrollPercent
                  )}
                >
                  Flavour
                </h2>
                <div
                  className="container-2-img-blur-edge"
                  style={scrollEffectContainer2(
                    "container-2-img-4-blur-edge",
                    scrollPercent
                  )}
                >
                  <img
                    id="container-2-img-4"
                    className="main-page-gif-image container-2-img"
                    src={oldFasionImages?.bourbon?.images[0]}
                    alt=""
                    style={scrollEffectContainer2(
                      "container-2-img-4",
                      scrollPercent
                    )}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </main>
  );
}
export default MainPage;
