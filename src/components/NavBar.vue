<template>
    <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
     <div class="container">
       <router-link to="/trivia" class="navbar-brand">Trivia App</router-link>
            <router-link class="navbar-brand" to="/trivia">
            Trivia App
        </router-link>
        <router-link class="navbar-brand" to="/chuck">
            Chuck Joke
        </router-link>
       <div class="collapse navbar-collapse" id="navbarResponsive">
         <ul class="navbar-nav ml-auto">
           <li class="nav-item active">
             <a class="nav-link" href="#">Home</a>
           </li>
           <li class="nav-item active">
             <a class="nav-link" href="#">About</a>
           </li>
           <li class="nav-item active">
             <a class="nav-link" href="#">Services</a>
           </li>
           
         </ul>
       </div>
     </div>
   </nav>
 </div>

</template>

<script>

export default {
    

}
</script>
