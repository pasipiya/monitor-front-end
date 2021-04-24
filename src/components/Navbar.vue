<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Monitor</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/">Home</router-link>
                        <span class="sr-only">(current)</span>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sensors</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Temperature</a>
                        <a class="dropdown-item" href="#">Humidity</a>
                        <a class="dropdown-item" href="#">Pressure</a>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link to="/about">Contact Us</router-link>
                </li>
                <li class="nav-item">
                   <router-link to="/register">Register</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login">Log In</router-link>
                </li>
            </ul>
<!--            <form class="form-inline my-2 my-lg-0">-->
<!--                <input class="form-control mr-sm-2" type="text" placeholder="Search">-->
<!--                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>-->
<!--            </form>-->
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Dropdown.vue",

    }
</script>

<style scoped>

   .nav-item active,nav-item dropdown,nav-item :hover{
        display: flex;
        background-color: skyblue;
    }

    .navbar-brand{
        padding: 14px 16px;
        text-align: center;
        font-size: 60px;
        float: left;
        font-family: Sofia;
        font-weight: bold;
    }

    ul{
        font-size: 25px;
    }

   .dropdown-item{
       font-size: 20px;
       background-color: #1d9ce5;
       font-weight: bold;
   }
 </style>