<template>
    <section class="card-main" id="cardMain">
        <div class="card-header">
            <div class="title">
                <h2>막시 Maxi Ruti</h2>
                <h2>Web dev</h2>
            </div>
            <div class="details">
                <h2>010 8073 0203</h2>
                <h2>maxi@nolgong.com</h2>
                <h2>070 4190 4420</h2>
            </div>
        </div>
        <h1></h1>
        <!-- links -->
        <div class="links">
            <a
                class="link"
                target="_blank"
                href="https://maxi-ruti.netlify.app/"
            >
                <i class="fa fa-brands fa-twitter"></i>
            </a>
            <a class="link" target="_blank" href="https://github.com/maxrpark">
                <i class="fa fa-brands fa-github"></i>
            </a>
            <a class="link" target="_blank" href="https://t.me/Max_Nolgong">
                <i class="fa a-brands fa-telegram"></i>
            </a>
            <a
                class="link"
                target="_blank"
                href="https://maxi-ruti.netlify.app/"
                ><i class="fa fa-solid fa-globe"></i
            ></a>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
.card-main {
    width: 1500px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    visibility: hidden;
    background: #71868c;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.card-header {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
}

h1,
h2 {
    color: white;
    font-size: 3rem;
}
.details h2 {
    color: white;
    font-size: 3rem;
}
h1 {
    text-transform: uppercase;
    font-size: 11rem;
    text-align: center;
    margin-bottom: 3rem;
}

.links {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    bottom: 0;
}

.link {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    text-decoration: none;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background: white;
    color: #71868c;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.fa {
    display: block;
}
</style>
