export const notifConfig = {
    type: "success",
    insert: "top",
    container: "top-left",
    animationIn: ["animated", "bounceIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
        duration: 3000
    },
    touchSlidingExit: {
        swipe: {
            duration: 400,
            timingFunction: 'ease-out',
            delay: 0,
        },
        fade: {
            duration: 400,
            timingFunction: 'ease-out',
            delay: 0
        }
    }
}