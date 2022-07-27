import React from "react";

const FadeIn = (props: any) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef: any = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entry => {
      if (entry[0].isIntersecting) {
        setIsVisible(true);

        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'fade-in-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
};

export default FadeIn;
