
/**
 * Utility functions for handling animations
 */

/**
 * Initialize scroll reveal animations
 * This function adds the active class to elements with .scroll-reveal
 * when they enter the viewport
 */
export const initScrollReveal = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once the animation has played, no need to observe anymore
        observer.unobserve(entry.target);
      }
    });
  };

  // Create observer
  const observer = new IntersectionObserver(handleIntersect, observerOptions);

  // Find all elements with the scroll-reveal class and observe them
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  scrollElements.forEach(element => {
    observer.observe(element);
  });

  return observer;
};

/**
 * Add staggered animation to child elements
 * @param parentSelector - The selector for the parent element
 * @param childSelector - The selector for the child elements
 * @param baseDelay - The base delay in milliseconds 
 */
export const addStaggeredAnimations = (
  parentSelector: string, 
  childSelector: string, 
  baseDelay: number = 100
) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;
  
  const children = parent.querySelectorAll(childSelector);
  
  children.forEach((child, index) => {
    const element = child as HTMLElement;
    element.style.animationDelay = `${baseDelay * index}ms`;
  });
};

/**
 * Add parallax effect to an element
 * @param element - The element to add parallax to
 * @param speed - The speed of the parallax effect (lower is faster)
 */
export const addParallaxEffect = (elementSelector: string, speed: number = 5) => {
  const element = document.querySelector(elementSelector) as HTMLElement;
  if (!element) return;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const offset = scrollPosition / speed;
    element.style.transform = `translateY(${offset}px)`;
  };

  window.addEventListener('scroll', handleScroll);
  
  // Call it once to set initial position
  handleScroll();

  // Return cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
};
