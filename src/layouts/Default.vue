<template>
  <div class="layout">
    <header class="header">
      <strong >
        <g-link class="site-name" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <div class="container">
       <slot/>
    </div>
   
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  /* max-width: 760px; */
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 6rem;
  padding-right: 6rem;
  margin-bottom: 20px;
  height: 100px;
  color: #fff;
  background-color: #159957;
  background-image: linear-gradient(120deg, #155799, #159957);
}
.site-name {
  color: #fff;
  font-size: 24px;
}
.nav__link {
  margin-left: 20px;
  color: #fff;
}
.container {
   padding-left: 6rem;
  padding-right: 6rem;
}
</style>
