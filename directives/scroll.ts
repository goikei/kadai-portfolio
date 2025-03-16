// スクロールして表示された時にアニメーション用のクラスをつける処理
export default {
    mounted(el: Element) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) { // 画面に表示された
                    el.classList.remove('anim-hidden')
                    el.classList.add('anim-shown')
                } else { // 画面から消えた
                    if (entry.boundingClientRect.top > 0) { // もし画面下部に消えたなら
                        el.classList.remove('anim-shown')
                        el.classList.add('anim-hidden')
                    }
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(el)
    }
}