<template>
    <div class="twitch">
        <!-- <img src="~/assets/img/meeting-room.jpg" />
        <iframe src="https://player.twitch.tv/?channel=subsetgetsit" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe> -->
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3195 2412">
            <image width="3195" height="2412" href="~/assets/img/meeting-room-wide.jpg" />
            <foreignObject x="1247" y="869" width="717" height="407">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <iframe src="https://player.twitch.tv/?channel=subsetgetsit" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
                </div>
            </foreignObject>
        </svg>
    </div>
</template>
<style lang="scss" scoped>
.twitch {
    width: 100%;
    overflow: hidden;
    img {
        width: 100%;
    }
    svg {
        min-width: 3500px;
        margin-top: -600px;
        margin-left: calc(50% - 10px);
        transform: translateX(-50%);
        // @media screen and (max-width: 1023px) {
        //     min-width: 3300px;
        // }
        @media screen and (max-width: $tn95-screen-max-lg) {
            min-width: 400vw;
            margin-top: calc(-1 * 100vw + 200px);
        }
    }
    svg div {
        width: 100%;
        height: 100%;
    }
    svg iframe {
        width: 100%;
        height: 100%;
    }
}
</style>
