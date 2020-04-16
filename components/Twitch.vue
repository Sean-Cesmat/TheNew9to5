<template>
    <div class="twitch">
        <img src="~/assets/img/meeting-room.jpg" />
        <iframe src="https://player.twitch.tv/?channel=subsetgetsit" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/subsetgetsit?tt_content=text_link&tt_medium=live_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;"></a>
    </div>
</template>
<style lang="scss" scoped>
.twitch {
    width: 100%;
    img {
        width: 100%;
    }
    iframe {
        top: calc(100px + 4.2vw);
        left: 50%;
        transform: translateX(-50%) perspective(200px);
        width: 41%;
        height: 23vw;
        position: absolute;
    }
}
</style>
