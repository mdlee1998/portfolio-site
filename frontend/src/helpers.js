import { changeSection } from './slices/sectionSlice';

export const goToSection = opts => {
    let { section, modifier } = opts;

    if(!section) return;

    const sections = getSections();

    const currSectionIndex = sections.findIndex(sectionItem => {
        return sectionItem.dataset.section === section.dataset.section;
    });

    if(modifier === 'next') {
      section = sections[currSectionIndex + 1]
    } else if(modifier === 'previous') {
      section = sections[currSectionIndex - 1]; 
    }

    if(!section) return;

    smoothScroll(section.offsetTop);
    changeSection();
}

function smoothScroll(scrollTargetY, speed = 1000) {
    let currentTime = 0
    const scrollY = window.pageYOffset || document.documentElement.scrollTop
    
    const time = Math.max(
      0.1,
      Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
    )
  
    const easeInOutCubic = pos => {
      if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3)
      return 0.5 * (Math.pow(pos - 2, 3) + 2)
    }
  
    function runAnimation() {
      currentTime += 1 / 60
  
      let p = currentTime / time
      let t = easeInOutCubic(p)
  
      if (p < 1) {
        requestAnimationFrame(runAnimation)
  
        window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t)
      } else {
        window.scrollTo(0, scrollTargetY)
      }
    }
  
    runAnimation()
  }



export const getSections = () => {
    return Array.from(document.querySelectorAll('section'));
}