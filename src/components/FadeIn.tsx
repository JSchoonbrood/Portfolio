import React from "react";

const FadeIn = (props: any) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef: any = React.useRef();

  React.useEffect(() => {
    const callbackFunction = (entries: any) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    };

    let observerRefValue: any = null;

    const observer = new IntersectionObserver(callbackFunction);

    if (domRef.current) {
      observer.observe(domRef.current);
      observerRefValue = observer.observe(domRef.current);

    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    }});

  return (
    <div className={`fade-in ${isVisible ? 'fade-in-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
};

export default FadeIn;
