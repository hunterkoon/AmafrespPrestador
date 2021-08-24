import React from 'react';

function UseDimensionScreen() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    UseDimensionScreen(),
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(UseDimensionScreen());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
