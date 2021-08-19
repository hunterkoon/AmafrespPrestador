import React from 'react';

function getDimensionScreen() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getDimensionScreen(),
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getDimensionScreen());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
