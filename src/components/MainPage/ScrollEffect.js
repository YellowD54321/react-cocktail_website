export function ScrollEffect() {
  //container 1
  function scrollEffectContainer1(elementId, scrollPercent) {
    const imgOne = () => {
      const DEMARCATION = 0.64;
      const LAST_POINT = 0.91;
      let styleOpacity =
        1 - proportionWithContainer(scrollPercent, DEMARCATION, LAST_POINT);
      let styleScale =
        proportionWithContainer(scrollPercent, DEMARCATION, LAST_POINT) + 1;
      if (styleScale >= 2) styleScale = 2;
      if (scrollPercent >= DEMARCATION) {
        return {
          opacity: styleOpacity,
          transform: `scale(${styleScale}, ${styleScale})`,
        };
      }
      return {};
    };
    const featureOne = () => {
      const DEMARCATION = 0.21;
      const styleOpacity = textEffectOpacityIncreaseThenDecrease(
        scrollPercent,
        DEMARCATION
      );
      return { opacity: styleOpacity };
    };
    const featureTwo = () => {
      const DEMARCATION = 0.54;
      const styleOpacity = textEffectOpacityIncreaseThenDecrease(
        scrollPercent,
        DEMARCATION
      );
      return { opacity: styleOpacity };
    };
    switch (elementId) {
      case "container-1-img":
        return imgOne();
      case "container-1-feature-2":
        return featureOne();
      case "container-1-feature-3":
        return featureTwo();
      default:
        return {};
    }
  }
  //container 2
  function scrollEffectContainer2(elementId, scrollPercent) {
    //Blur Edge
    const blurEdgeOne = () => {
      const DEMARCATION_APPEAR = -0.12;
      const DEMARCATION = 0.07;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      let styleTop = -500;
      let styleRight = 500;
      if (scrollPercent >= DEMARCATION_APPEAR) {
        styleTop =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          -500;
        styleRight =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          500;
      }
      if (styleTop > 0) styleTop = 0;
      if (styleRight < 0) styleRight = 0;
      return { top: styleTop, right: styleRight, opacity: styleOpacity };
    };
    const blurEdgeTwo = () => {
      const DEMARCATION_APPEAR = -0.05;
      const DEMARCATION = 0.21;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      let styleTop = -500;
      let styleRight = -500;
      if (scrollPercent >= DEMARCATION_APPEAR) {
        styleTop =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          -500;
        styleRight =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          -500;
      }
      if (styleTop > 0) styleTop = 0;
      if (styleRight > 0) styleRight = 0;
      return { top: styleTop, right: styleRight, opacity: styleOpacity };
    };
    const blurEdgeThree = () => {
      const DEMARCATION_APPEAR = 0.17;
      const DEMARCATION = 0.44;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      let styleTop = 500;
      let styleRight = 500;
      if (scrollPercent >= DEMARCATION_APPEAR) {
        styleTop =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          500;
        styleRight =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          500;
      }
      if (styleTop < 0) styleTop = 0;
      if (styleRight < 0) styleRight = 0;
      return {
        top: styleTop,
        right: styleRight,
        opacity: styleOpacity,
      };
    };
    const blurEdgeFour = () => {
      const DEMARCATION_APPEAR = 0.39;
      const DEMARCATION = 0.61;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      let styleTop = 500;
      let styleRight = -500;
      if (scrollPercent >= DEMARCATION_APPEAR) {
        styleTop =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          500;
        styleRight =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          -500;
      }
      if (styleTop < 0) styleTop = 0;
      if (styleRight > 0) styleRight = 0;
      return { top: styleTop, right: styleRight, opacity: styleOpacity };
    };
    //Image
    const imgOne = () => {
      const DEMARCATION_APPEAR = -0.12;
      const DEMARCATION = 0.07;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      return { opacity: styleOpacity };
    };
    const imgTwo = () => {
      const DEMARCATION_APPEAR = -0.05;
      const DEMARCATION = 0.21;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      return { opacity: styleOpacity };
    };
    const imgThree = () => {
      const DEMARCATION_APPEAR = 0.17;
      const DEMARCATION = 0.44;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );

      return {
        opacity: styleOpacity,
      };
    };
    const imgFour = () => {
      const DEMARCATION_APPEAR = 0.39;
      const DEMARCATION = 0.61;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      return { opacity: styleOpacity };
    };
    //Text
    const featureOne = () => {
      const DEMARCATION_APPEAR = -0.12;
      const DEMARCATION = 0.07;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      let styleTop = -500;
      if (scrollPercent >= DEMARCATION_APPEAR) {
        styleTop =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          -500;
      }
      if (styleTop >= 0) styleTop = 0;
      return { top: styleTop, opacity: styleOpacity };
    };
    const featureTwo = () => {
      const DEMARCATION_APPEAR = -0.05;
      const DEMARCATION = 0.21;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      let styleTop = -500;
      if (scrollPercent >= DEMARCATION_APPEAR) {
        styleTop =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          -500;
      }
      if (styleTop > 0) styleTop = 0;
      return { top: styleTop, opacity: styleOpacity };
    };
    const featureThree = () => {
      const DEMARCATION_APPEAR = 0.17;
      const DEMARCATION = 0.44;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      let styleTop = 500;
      if (scrollPercent >= DEMARCATION_APPEAR) {
        styleTop =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          500;
      }
      if (styleTop < 0) styleTop = 0;
      return { top: styleTop, opacity: styleOpacity };
    };
    const featureFour = () => {
      const DEMARCATION_APPEAR = 0.39;
      const DEMARCATION = 0.61;
      const styleOpacity = proportionWithContainer(
        scrollPercent,
        DEMARCATION_APPEAR,
        DEMARCATION
      );
      let styleTop = 500;
      if (scrollPercent >= DEMARCATION_APPEAR) {
        styleTop =
          (1 -
            proportionWithContainer(
              scrollPercent,
              DEMARCATION_APPEAR,
              DEMARCATION
            )) *
          500;
      }
      if (styleTop < 0) styleTop = 0;
      return { top: styleTop, opacity: styleOpacity };
    };

    switch (elementId) {
      case "container-2-img-1-blur-edge":
        return blurEdgeOne();
      case "container-2-img-2-blur-edge":
        return blurEdgeTwo();
      case "container-2-img-3-blur-edge":
        return blurEdgeThree();
      case "container-2-img-4-blur-edge":
        return blurEdgeFour();
      case "container-2-img-1":
        return imgOne();
      case "container-2-img-2":
        return imgTwo();
      case "container-2-img-3":
        return imgThree();
      case "container-2-img-4":
        return imgFour();
      case "container-2-feature-1":
        return featureOne();
      case "container-2-feature-2":
        return featureTwo();
      case "container-2-feature-3":
        return featureThree();
      case "container-2-feature-4":
        return featureFour();
      default:
        return {};
    }
  }
  const textEffectOpacityIncreaseThenDecrease = (
    scrollPercent,
    DEMARCATION
  ) => {
    let styleOpacity = 0;
    if (scrollPercent < DEMARCATION) {
      //opacity increasing
      styleOpacity = (scrollPercent - (DEMARCATION - 0.1)) * 4;
    } else if (scrollPercent < DEMARCATION + 0.1) {
      //hold opacity on
      styleOpacity = 1;
    } else {
      //opacity decreasing
      styleOpacity = (DEMARCATION + 0.2 - scrollPercent) * 4;
    }
    return styleOpacity;
  };

  const proportionWithContainer = (scrollPercent, startPoint, endPoint) => {
    return (scrollPercent - startPoint) / (endPoint - startPoint);
  };

  return {
    scrollEffectContainer1,
    scrollEffectContainer2,
  };
}
