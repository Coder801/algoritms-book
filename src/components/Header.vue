<template lang="html">
  <sui-container>
    <sui-segment inverted textAlign='center' vertical>
        <sui-menu size='large'>
          <sui-container>
            <sui-menu-item as='a' active>Home</sui-menu-item>
            <sui-menu-item as='a'>Work</sui-menu-item>
            <sui-menu-item as='a'>Company</sui-menu-item>
            <sui-menu-item as='a'>Careers</sui-menu-item>
            <sui-menu-item position='right'>
              <sui-button as='a'>Log in</sui-button>
              <sui-button as='a'>Sign Up</sui-button>
            </sui-menu-item>
          </sui-container>
        </sui-menu>
      </sui-segment>
  </sui-container>
</template>

<script>
export default {
  name: 'Header'
}
</script>
