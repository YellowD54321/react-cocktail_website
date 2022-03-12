import React, { useState, useEffect } from "react";
function MainPage() {
  const scrollVhStep = window.innerHeight * 0.1;
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
  // console.log("window.innerHeight");
  // console.log(window.innerHeight);
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
  const containerSwitchPoint = {
    container1to2: 18 * scrollVhStep,
    container2to3: 50000,
    container3to4: 50000,
    container4to5: 50000,
    container5to6: 50000,
    container6to7: 50000,
  };

  const [scrollPositionTest, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // const testerContainer = document.getElementById("container-1");
  const [testerContainer, setTesterContainer] = useState(null);
  console.log("testerContainer");
  console.log(testerContainer);
  useEffect(() => {
    console.log("useEffect triggered");
    // console.log(event.target);
    if (testerContainer) {
      testerContainer.addEventListener("scroll", (event) => {
        return scrolling(event.target);
      });
      scrolling(testerContainer);
    }

    return () => {
      console.log("useEffect closed");
      return testerContainer?.removeEventListener("scroll", scrolling);
    };
  }, [testerContainer]);

  function scrolling(container) {
    console.log(container);
  }

  function scrollingElRef(ref) {
    console.log("ref");
    console.log(ref);
    if (ref) {
      console.log("ref.current");
      console.log(ref.current);
    }

    setTesterContainer(ref);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let scrollPositionVh = (scrollPositionTest / 100) * scrollVhStep;
    // console.log(scrollPositionVh);
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
          demarcation: 7 * scrollVhStep,
          scrollUp: 3 * scrollVhStep,
          scrollDown: 10 * scrollVhStep,
        },
      },
      containerOneFeatureThree: {
        content: document.getElementById("container-1-feature-3"),
        scrollPoint: {
          demarcation: 14 * scrollVhStep,
          scrollUp: 10 * scrollVhStep,
          scrollDown: 17 * scrollVhStep,
        },
      },
    };
    let allGifImages = {
      containerOne: {
        content: document.getElementById("container-1-img"),
        scrollPoint: {
          demarcation: 14 * scrollVhStep,
          scrollUp: 14 * scrollVhStep,
          scrollDown: 17 * scrollVhStep,
        },
      },
    };

    //switch gif images
    if (scrollPositionVh < containerSwitchPoint.container1to2) {
      setCurrentGifImage((preImg) => ({
        ...preImg,
        container1: oldFasionImages.finish.images[0],
      }));
    } else if (scrollPositionVh < containerSwitchPoint.container2to3) {
      setCurrentGifImage((preImg) => ({
        ...preImg,
        container2:
          oldFasionImages.sugarCube.images[
            Math.floor(
              (scrollPositionVh - containerSwitchPoint.container1to2) / 100
            )
          ],
      }));
    } else if (scrollPositionVh < containerSwitchPoint.container3to4) {
    } else if (scrollPositionVh < containerSwitchPoint.container4to5) {
    } else if (scrollPositionVh < containerSwitchPoint.container5to6) {
    } else if (scrollPositionVh < containerSwitchPoint.container6to7) {
    }

    for (const [featrueName, featureValue] of Object.entries(allFeatures)) {
      //control opacity when scrolling up or down
      if (!featureValue.scrollPoint.demarcation) continue;
      if (scrollPositionVh < featureValue.scrollPoint.demarcation) {
        //opacity increasing
        featureValue.content.style.opacity =
          (scrollPositionVh - featureValue.scrollPoint.scrollUp) * 0.005;
      } else {
        //opacity decreasing
        featureValue.content.style.opacity =
          -(scrollPositionVh - featureValue.scrollPoint.scrollDown) * 0.0025;
      }
    }
    //finisded image effect
    const gifImg1_end_startPoint =
      allGifImages.containerOne.scrollPoint.demarcation;
    const gifImg1_end_endPoint = containerSwitchPoint.container1to2;
    const gifImg1_scrollTime = 5;
    if (scrollPositionVh >= gifImg1_end_startPoint) {
      //after switch point, let img1 become opacity = 0.
      if (scrollPositionVh >= gifImg1_end_endPoint) {
        allGifImages.containerOne.content.style.transform = "scale(2, 2)";
        allGifImages.containerOne.content.style.opacity = 0;
      } else {
        //before switch point, set scale be increasing and opacity decreasing.
        const gifImg1_scale =
          1 +
          ((scrollPositionVh - gifImg1_end_startPoint) / scrollVhStep) *
            (1 / gifImg1_scrollTime);
        const gifImg1_opacity =
          1 -
          ((scrollPositionVh - gifImg1_end_startPoint) / scrollVhStep) *
            (1 / gifImg1_scrollTime);
        allGifImages.containerOne.content.style.transform = `scale(${gifImg1_scale}, ${gifImg1_scale})`;
        allGifImages.containerOne.content.style.opacity = gifImg1_opacity;
      }
    }
  }, [scrollPositionTest]);

  function loadImageListFromEachFolder(imgObject) {
    for (const [key, imageName] of Object.entries(imgObject)) {
      for (let i = 1; i <= imageName.amount; i++) {
        imageName.images.push(`../images/cocktail-${key}/${key}-${i}.png`);
      }
    }
  }
  return (
    <main>
      <section ref={scrollingElRef} className="container container-1">
        <img
          id="container-1-img"
          className="main-page-gif-image"
          src={currentGifImage.container1}
          alt=""
        />
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
export default MainPage;
