<template>

    <form>
        <fieldset>
            <legend>Legend</legend>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
            <label class="remember" >
                <input type="checkbox" value="remember-me"> Remember Me
            </label>
            <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>

            <a href="#" class="text-center new-account">Create an account </a>
        </fieldset>
    </form>
</template>

<script>
    export default {
        name: "LogIn.vue"
    }
</script>

<style scoped>

    .form-group{

    }

</style>