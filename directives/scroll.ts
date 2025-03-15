export default {
    mounted(el: Element) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.remove('anim-hidden')
                    el.classList.add('anim-shown')
                    // observer.unobserve(el)
                }
                else {
                    if (entry.boundingClientRect.top > 0) {
                        el.classList.remove('anim-shown')
                        el.classList.add('anim-hidden')
                    }
                }
            },
            { threshold: 0.75 }
        )

        observer.observe(el)
    }
}