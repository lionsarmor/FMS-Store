<template>
<div>
  <nav class="navbar navbar-dark navbar-expand-lg mb-3">
                <a class="navbar-brand" href="#">
                    <img src="@/assets/media/logo.png" alt="Logo" />
                    <a style="font-weight: 600; font-size: large;"> Official Store</a>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown2" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link nav-effect" style="font-size:15px;" href="https://www.facelessmiragestudio.com/index.html">HOME <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item nav-effect">
                            <a class="nav-link" style="font-size:15px;" href="https://www.facelessmiragestudio.com/company.html"> COMPANY <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item nav-effect">
                            <a class="nav-link" style="font-size:15px;" href="https://www.facelessmiragestudio.com/projects.html">PROJECTS</a>
                        </li>
                        <li class="nav-item nav-effect">
                            <a class="nav-link" style="font-size:15px;" href="https://discord.com/invite/J5WE8zf">DISCORD</a>
                        </li>
                        <li class="nav-item nav-effect">
                            <a class="nav-link" style="font-size:15px;" href="https://www.facelessmiragestudio.com/donate.html">DONATE</a>
                        </li>
                    </ul>
                </div>
            </nav>
</div>
</template>
<script>
export default {
    name: "navbar",
    props: {

    }
};
</script>
<script>