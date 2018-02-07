<template lang="pug">
header.header
  .container
    h1 {{ logoText }}
</template>

<script>
    
    module.exports = {
      data: function() {
        return {
          logoText: "Logo"
        }
      }
    }

</script>

