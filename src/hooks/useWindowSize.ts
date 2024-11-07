import { reactive, watchEffect } from 'vue';

export const useWindowSize = () => {
    const windowSize = reactive({ width: window.innerWidth, height: window.innerHeight })

    const handleWindowSize = () => {
        windowSize.width = window.innerWidth
        windowSize.height = window.innerHeight
    }

    watchEffect((onCleanup) => {
        window.addEventListener('resize', handleWindowSize)

        onCleanup(() => { window.removeEventListener('resize', handleWindowSize) })
    })

    return windowSize
}

