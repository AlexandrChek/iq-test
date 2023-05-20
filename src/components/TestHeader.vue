<template>
    <div id="main-wrapper">
        <div id="pic-wrapper">
            <img src="../assets/brain.png" alt="Brain">
        </div>
        <p v-if="$route.params.id || $route.path === '/processing'" class="test-head">IQ TEST</p>
        <p v-else class="ready">READY!</p>
    </div>
</template>

<script>
export default {
    name: 'TestHeader'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

%text-header {
    text-transform: uppercase;
    color: $active-col;
    height: 100%;
    margin: 0;
}

    #main-wrapper {
        width: 100%;
        display: flex;
    }
    #pic-wrapper {
        margin: 0 2.81%;
        text-align: start;
        height: 100%;
    }
    img {
        height: $head-height;
    }
    .test-head {
        @include text('Yeseva One', 400, 12px, $head-height, 0.05em);
        @extend %text-header;
    }
    .ready {
        @include text('Yeseva One', 400, 20px, $head-height, 0.1em);
        @extend %text-header;
    }

    @media(min-width: 576px) {
        #main-wrapper {
            width: 100%;
            justify-content: center;
            position: absolute;
        }
        #pic-wrapper {
            margin: 0 1.5% 0 0;
        }
    }
    @media(min-width: 992px) {
        img {
            height: $head-height-992;
        }
        .test-head {
            @include text('Yeseva One', 400, 12px, $head-height-992, 0.05em);
        }
        .ready {
            @include text('Yeseva One', 400, 20px, $head-height-992, 0.1em);
        }
    }
</style>