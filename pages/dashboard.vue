<template>
    <div>
        <h1>Hello {{ user.displayName }}</h1>
    </div>
</template>

<script setup >
const {user} = useUser()
</script>