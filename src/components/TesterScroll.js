import React, { useState, useEffect } from "react";
function TesterScroll() {
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
  let testImg = oldFasionImages.sugarCube.images[0];
  const containerSwitchPoint = {
    container1to2: 1800,
    container2to3: 50000,
    container3to4: 50000,
    container4to5: 50000,
    container5to6: 50000,
    container6to7: 50000,
  };
  let scroll100 = 0;

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    console.log("Inside useeffect");
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollPosition);
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
          demarcation: 500,
          scrollUp: 200,
          scrollDown: 900,
        },
      },
      containerOneFeatureThree: {
        content: document.getElementById("container-1-feature-3"),
        scrollPoint: {
          demarcation: 1200,
          scrollUp: 900,
          scrollDown: 1600,
        },
      },
    };
    let allGifImages = {
      containerOne: {
        content: document.getElementById("container-1-img"),
        scrollPoint: {
          demarcation: 1300,
          scrollUp: 1300,
          scrollDown: 1600,
        },
      },
    };

    // if (scrollPosition % 100 === 0) {
    //   console.log(scrollPosition);
    scroll100 = scrollPosition;
    // console.log(`Now scroll100 is setting.`);
    //switch gif images
    if (scrollPosition < containerSwitchPoint.container1to2) {
      // setCurrentGifImage((preImg) => ({
      //   ...preImg,
      //   container1: oldFasionImages.finish.images[0],
      // }));
    } else if (scrollPosition < containerSwitchPoint.container2to3) {
      setCurrentGifImage((preImg) => ({
        ...preImg,
        container2:
          oldFasionImages.sugarCube.images[
            Math.floor(
              (scrollPosition - containerSwitchPoint.container1to2) / 100
            )
          ],
      }));
      // testImg =
      //   oldFasionImages.sugarCube.images[
      //     Math.floor(
      //       (scrollPosition - containerSwitchPoint.container1to2) / 100
      //     )
      //   ];
    } else if (scrollPosition < containerSwitchPoint.container3to4) {
    } else if (scrollPosition < containerSwitchPoint.container4to5) {
    } else if (scrollPosition < containerSwitchPoint.container5to6) {
    } else if (scrollPosition < containerSwitchPoint.container6to7) {
    }

    for (const [featrueName, featureValue] of Object.entries(allFeatures)) {
      //control opacity when scrolling up or down
      if (!featureValue.scrollPoint.demarcation) continue;
      if (scrollPosition < featureValue.scrollPoint.demarcation) {
        //opacity increasing
        featureValue.content.style.opacity =
          (scrollPosition - featureValue.scrollPoint.scrollUp) * 0.005;
      } else {
        //opacity decreasing
        featureValue.content.style.opacity =
          -(scrollPosition - featureValue.scrollPoint.scrollDown) * 0.0025;
      }
    }
    //finisded image effect
    const gifImg1_end_startPoint =
      allGifImages.containerOne.scrollPoint.demarcation;
    const gifImg1_end_endPoint = containerSwitchPoint.container1to2;
    const gifImg1_scrollTime = 5;
    if (scrollPosition >= gifImg1_end_startPoint) {
      //after switch point, let img1 become opacity = 0.
      if (scrollPosition >= gifImg1_end_endPoint) {
        allGifImages.containerOne.content.style.transform = "scale(2, 2)";
        allGifImages.containerOne.content.style.opacity = 0;
      } else {
        //before switch point, set scale be increasing and opacity decreasing.
        const gifImg1_scale =
          1 +
          ((scrollPosition - gifImg1_end_startPoint) / 100) *
            (1 / gifImg1_scrollTime);
        const gifImg1_opacity =
          1 -
          ((scrollPosition - gifImg1_end_startPoint) / 100) *
            (1 / gifImg1_scrollTime);
        allGifImages.containerOne.content.style.transform = `scale(${gifImg1_scale}, ${gifImg1_scale})`;
        allGifImages.containerOne.content.style.opacity = gifImg1_opacity;
      }
    }
    // }
  }, [scrollPosition]);

  function loadImageListFromEachFolder(imgObject) {
    for (const [key, imageName] of Object.entries(imgObject)) {
      for (let i = 1; i <= imageName.amount; i++) {
        imageName.images.push(`../images/cocktail-${key}/${key}-${i}.png`);
      }
    }
  }
  return (
    <main>
      <section className="container container-1">
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
          className="main-page-gif-image"
          src={currentGifImage.container2}
          alt=""
        />
        <h2 id="container-1-feature-1" className="container-1-feature">
          Old Fasion
        </h2>
      </section>
      <section className="container container-2">
        <img
          className="main-page-gif-image"
          src={currentGifImage.container3}
          alt=""
        />
        <h2 id="container-1-feature-1" className="container-1-feature">
          Old Fasion
        </h2>
      </section>
    </main>
  );
}
export default TesterScroll;
