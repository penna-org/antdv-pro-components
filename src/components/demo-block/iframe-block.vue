<script lang="ts" setup>
defineProps<{
  src: string
}>()
</script>

<template>
  <div class="w-full h-300px flex flex-col browser-mockup with-url">
    <iframe :src="src" class="w-full h-full" style="border: none;" frameborder="0" />
  </div>
</template>

<style scoped lang="less">
.browser-mockup{
    position: relative;
    border-top: 2em solid rgba(230, 230, 230, 0.7);
    border-radius: 3px 3px 0 0;

    &::before{
        position: absolute;
        content: '';
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color:#f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44,1.5em 0 0 2px #9b3,3em 0 0 2px #fb5;
    }

    &.with-url::after{
        position: absolute;
        content: '';
        top: -1.6em;
        left: 5.5em;
        width: calc(100% - 6em);
        display: block;
        border-radius: 4px;
        background-color: white;
        height: 1.2em;
    }
}
</style>
