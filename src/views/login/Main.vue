<template>
  <div>
    <!-- <DarkModeSwitcher /> -->
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <div class="my-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="-intro-x w-1/2 -mt-16"
              src="@/assets/images/Home.png"
            />
            <div
              class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
            >
              Encuentra tu banco ideal.
            </div>
            <div
              class="-intro-x mt-5 text-base text-white text-opacity-70 dark:text-slate-400"
            >
              Te ayudaremos a encontrar la mejor opcion para ti.
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <img
              class="-intro -x w-1/2 mx-auto xl:hidden"
              src="@/assets/images/Home.png"
            />
            <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center">
              Mi Chelito
            </h2>
            <div class="intro-x mt-2 text-slate-400 xl:hidden text-center">
              Encuentra tu banco ideal. Te ayudaremos a encontrar la mejor
              opcion para ti.
            </div>
            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button
                class="btn btn-primary py-3 px-4 w-full xl:w-full xl:mr-3 align-top"
                @click="login"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt=""
                  class="w-5"
                />
              </button>
            </div>
            <div
              class="intro-x mt-10 xl:mt-12 text-slate-600 dark:text-slate-500 text-center xl:text-left"
            >
              Al hacer click esta deacuerdo con nuestros
              <a class="text-primary dark:text-slate-200 font-bold" href=""
                >Terminos y Condiciones</a
              >
              y
              <a class="text-primary dark:text-slate-200 font-bold" href=""
                >Politica de privacidad</a
              >
            </div>
          </div>
        </div>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import { GoogleAuth } from "../../firebase/provider";
import { useRouter } from "vue-router";

const router = useRouter();

const login = async () => {
  GoogleAuth().then(() => {
    router.push("/");
  });
};

onMounted(() => {
  dom("body").removeClass("main").removeClass("error-page").addClass("login");
});
</script>
