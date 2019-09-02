<template>
  <div class="niubi">
    <h1>首页</h1>
  </div>
</template>

<script>
export default {};
</script>

<style>
.niubi {
  height: 400px;
  background-color: skyblue;
}
.niubi > h1 {
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(#2bbb3e),
    to(#a385b1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>