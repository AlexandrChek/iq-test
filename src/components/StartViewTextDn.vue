<template>
    <p class="text-dn"><slot></slot></p>
</template>

<script>
export default {
    name: 'StartViewTextDn'
}
</script>

<style scoped>
    .text-dn {
        margin: 0;
        font-weight: 700;
        font-size: 15px;
        line-height: 19px;
        letter-spacing: 0.05em;
    }

    @media(max-height: 690px) and (max-width: 575px) {
        .text-dn {
            font-size: 12px;
            line-height: 15.2px;
        }  
    }
</style>