<template>
  <button class="btn__buy">{{name}}</button>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        }
    }
}
</script>