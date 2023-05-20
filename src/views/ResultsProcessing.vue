<template>
    <StarsWrapper class="processing">
        <ProgressBar progress="100%"/>
        <pre>
            Results
            processing
        </pre>
        <CircularAnimation/>
        <p id="inscription">
            Determining the style of thinking.......... 
            .........................................................
        </p>
    </StarsWrapper>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue'
import StarsWrapper from '@/components/StarsWrapper.vue'
import CircularAnimation from '@/components/CircularAnimation.vue'

export default {
    name: 'ResultsProcessing',
    components: {
        ProgressBar,
        StarsWrapper,
        CircularAnimation
    },
    mounted() {
        setTimeout(this.goToRes, 7000)
    },
    methods: {
        goToRes() {
            this.$router.push('/result')
        }  
    }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
@import '../scss/mixins';

$heading-distance: 2.87vh;
$height: calc(100vh - $head-height-vh - $heading-distance);
$height-992: calc(100vh - $head-height-992-vh - $heading-distance);

%text-settings {
    color: $main-text-col;
    white-space: pre-line;
    &::first-letter {
        text-transform: capitalize;
    }
}

    .processing {
        height: $height;
        padding-top: calc($head-height-vh + $heading-distance);
        overflow: hidden;
    }
    pre {
        margin: 8.25vh 0 6.73vh 0;
        @include text('PT Serif', 400, 23px, 30px, 0.05em);
        @extend %text-settings;
    }
    #inscription {
        margin: 25.42vh auto 0 auto;
        width: 286px;
        @include text('PT Serif', 400, 14px, 19px, 0.05em);
        @extend %text-settings;
    }

    @media(min-width: 576px) and (orientation: landscape) {
        .processing {
            height: 531px;
            padding-top: calc($head-height + 17px);
        }
        pre {
            margin: 49px 0 40 0;
        }
        #inscription {
            margin: 151px auto 0 auto;
        }
    }
    @media(min-width: 768px) {
        .processing {
            height: $height;
            padding-top: calc($head-height-vh + $heading-distance);
        }
        pre {
            margin: 8.25vh 0 6.73vh 0;
        }
        #inscription {
            margin: 25.42vh auto 0 auto;
            width: 310px;
            @include text('PT Serif', 400, 15px, 20px, 0.05em);
        }
    }
    @media(min-width: 992px) {
        .processing {
            height: $height-992;
            padding-top: calc($head-height-992-vh + $heading-distance);
        }
    }
</style>