<template>
    <Navbar />
</template>

<script>
export default {
    name: "DefaultLayout",
    components: {
        Navbar: () => import("../components/nav.vue")
    },
}
</script>
