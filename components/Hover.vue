<template>
  <div class="container flex justify-center pt-16 mx-auto">
    <div class="imgWrapper">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        class="image"
      />
      <div v-animate-css="animationObject" class="overlay">My Name is John</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationObject: {
        classes: 'slideInLeft',
        duration: 2000,
      },
    }
  },
}
</script>

<style>
.imgWrapper {
  position: relative;
  width: 50%;
  max-width: 300px;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  transform: perspective(1000px) rotateY(-35deg);
  perspective: 10px;
  transform-style: preserve-3d;
  box-shadow: -20px 30px 85px rgba(210, 130, 190, 0.5);
  transition: 0.5s all;
  border-radius: 1rem;
  overflow: hidden;
  height: 350px;
}

.overlay {
  position: absolute;
  bottom: 60%;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

.imgWrapper:hover .overlay {
  opacity: 1;
}
</style>