<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import AppearanceTabs from '@/components/AppearanceTabs.vue';

const appName = import.meta.env.VITE_APP_NAME;
const appVersion = import.meta.env.VITE_APP_VERSION;
</script>

<style lang="scss" scoped>
.homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--background);
    padding-left: 2.5rem;
    padding-right: 2.5rem;

    &__container {
        display: flex;
        flex-direction: column;
        width: 100%;

        &__header {
            h1 {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
                color: var(--font-color);
            }
        }

        &__body {
            font-size: 16px;
            margin-bottom: 20px;
            width: 100%;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
        }

        &__footer {
            font-size: 14px;
            color: #888;

            &__theme-selector {
                display: flex;
                align-items: center;
                gap: 32px;
                margin-bottom: 10px;
                font-size: 14px;
                color: var(--muted);
            }
        }
    }
}
</style>

<template>

    <Head title="Welcome">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>

    <div class="homepage">
        <div class="homepage__container">
            <div class="homepage__container__header">
                <h1>{{ appName }}</h1>
            </div>
            <div class="homepage__container__body"></div>
            <div class="homepage__container__footer">
                <div class="homepage__container__footer__theme-selector">
                    Tema: <AppearanceTabs />
                </div>

                <p>Version: {{ appVersion }}</p>
                <p>Built with ❤️ by <a href="https://github.com/nicklleite"
                        class="text-blue-500 hover:underline">nilt'</a></p>
            </div>
        </div>
    </div>
</template>
