const scrollOffset = (elem: HTMLElement) => {
    const yCoordinate: number = elem.getBoundingClientRect().top + window.pageYOffset;
    const yOffset: number = -60; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });  
}

export default scrollOffset