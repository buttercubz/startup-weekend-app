<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-12">
      <div class="grid grid-cols-12 gap-6">

        <div class="col-span-12 mt-8">
          <div class="mb-5">
            <h1 class="md:text-5xl font-medium truncate text-2xl">
              Bienvenido {{ user.displayName }}
            </h1>
            <span class="text-center text-xs">
              Para nosotros eres lo mas importante.
            </span>
          </div>
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">
              Mejores productos financieros.
            </h2>
          </div>
          <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <LandmarkIcon class="report-box__icon text-primary" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="5% menos de interes en prestamos personales"
                      >
                        5%
                        <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">
                    $100,000
                  </div>
                  <div class="text-base text-slate-500 mt-1">
                    Prestamos Personales BHD
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <CreditCardIcon class="report-box__icon text-primary" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="Ahorro del 2% con tarjetas visa popular"
                      >
                        2%
                        <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">%2</div>
                  <div class="text-base text-slate-500 mt-1">
                    Tarjetas de credito visa popular
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <BuildingIcon class="report-box__icon text-success" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="10 años pagando taza fija con banco ademi"
                      >
                        10 años <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-2xl font-medium leading-8 mt-6">
                    10 años a taza fija
                  </div>
                  <div class="text-base text-slate-500 mt-1">
                    Para hipotecas de 6MM o mas en banco ademi
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-4">
                  <div class="flex">
                    <CarIcon class="report-box__icon text-success" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="80% de financiamiento en vehiculos nuevos de no mas de 5 años"
                      >
                        80% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">%80</div>
                  <div class="text-base text-slate-500 mt-1">
                    Financiamiento de vehiculos nuevos de 5 años o menos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">
              Tasa de interés de política monetaria
            </h2>
          </div>
          <div class="intro-y box p-5 mt-2 sm:mt-5">
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="flex">
                <div>
                  <div
                    class="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium"
                  >
                    %4.25
                  </div>
                  <div class="mt-0.5 text-slate-500">Actual trimestre</div>
                </div>
                <div
                  class="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"
                ></div>
                <div>
                  <div class="text-slate-500 text-lg xl:text-xl font-medium">
                    %3.67
                  </div>
                  <div class="mt-0.5 text-slate-500">Trimestre anterior</div>
                </div>
              </div>
              <!-- <Dropdown class="md:ml-auto mt-5 md:mt-0">
                <DropdownToggle class="btn btn-outline-secondary font-normal">
                  Filter by Category
                  <ChevronDownIcon class="w-4 h-4 ml-2" />
                </DropdownToggle>
                <DropdownMenu class="w-40">
                  <DropdownContent class="overflow-y-auto h-32">
                    <DropdownItem>PC & Laptop</DropdownItem>
                    <DropdownItem>Smartphone</DropdownItem>
                    <DropdownItem>Electronic</DropdownItem>
                    <DropdownItem>Photography</DropdownItem>
                    <DropdownItem>Sport</DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown> -->
            </div>
            <div class="report-chart">
              <ReportLineChart :height="275" class="mt-6 -mb-6" />
            </div>
          </div>
        </div>

        <div class="col-span-12 2xl:col-span-6 mt-5">
          <div class="-mb-10 pb-10">
            <div class="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
              <div
                class="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3"
              >
                <div class="intro-x flex items-center h-10">
                  <h2 class="text-lg font-medium truncate mr-auto">
                    Promociones recientes
                  </h2>
                  <button
                    data-carousel="important-notes"
                    data-target="prev"
                    class="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                    @click="prevImportantNotes"
                  >
                    <ChevronLeftIcon class="w-4 h-4" />
                  </button>
                  <button
                    data-carousel="important-notes"
                    data-target="next"
                    class="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                    @click="nextImportantNotes"
                  >
                    <ChevronRightIcon class="w-4 h-4" />
                  </button>
                </div>
                <div class="mt-5 intro-x">
                  <div class="box zoom-in h-96">
                    <TinySlider ref-key="importantNotesRef">
                      <div class="p-5 flex flex-col w-full">
                        <img
                          src="https://bhdleon.com.do/wps/wcm/connect/88aa99df-1068-43ed-b46e-b4008cced07c/Banner+portal+400x202.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-88aa99df-1068-43ed-b46e-b4008cced07c-o7a9bFU"
                          alt="bhd"
                          class="h-48 w-auto mx-auto"
                        />
                        <div class="text-base font-medium truncate">
                          ¡Saca tu tarjeta de débito sin salir de casa!
                        </div>
                        <div class="text-slate-400 md:mt-3 md:mb-3 mt-2 mb-2">
                          Hace 20 Horas por BHD
                        </div>
                        <div class="text-slate-500 text-justify mt-1">
                          ¿Aún no has solicitado tu tarjeta de débito?
                          Solicítala y coordina el envío ahora llamando al
                          Centro de Contacto
                        </div>
                        <div class="font-medium flex md:mt-5 mt-2">
                          <button
                            type="button"
                            class="btn btn-secondary py-1 px-2"
                          >
                            Mas Detalles
                          </button>
                        </div>
                      </div>
                      <div class="p-6">
                        <img
                          src="https://invertix.com.do/wp-content/uploads/2019/03/Banco-Ademi-Foto.png"
                          class="h-36 mx-auto"
                          alt="ademi"
                        />
                        <div class="text-base font-medium truncate">
                          Préstamo de Consumo
                        </div>
                        <div class="text-slate-400 md:mt-3 md:mb-3 mt-1 mb-1">
                          Hace 10 dias por Banco Ademi
                        </div>
                        <div class="text-slate-500 text-justify mt-1">
                          Nuestro Préstamo de Consumo está dirigido a quienes
                          deseen satisfacer necesidades de consumo como la
                          compra de electrodomésticos, vehículos, computadoras,
                          pago de gastos médicos y viajes. Aplican para montos
                          desde RD$3,000 en adelante.
                        </div>
                        <div class="font-medium flex md:mt-5 mt-2">
                          <button
                            type="button"
                            class="btn btn-secondary py-1 px-2"
                          >
                            Mas Detalles
                          </button>
                        </div>
                      </div>
                      <div class="p-5">
                        <img
                          src="@/assets/images/popular.png"
                          alt="popular"
                          class="h-32 w-auto mx-auto mb-5"
                        />

                        <div class="text-base font-medium truncate">
                          Tu mejor recompensa ha llegado a Sirena
                        </div>
                        <div class="text-slate-400 mt-3 mb-3">
                          Hace 1 Dia por Banco Popular
                        </div>
                        <div
                          class="text-slate-500 text-justify mt-1 break-words"
                        >
                          Ingresa a Popularenlinea.com y descubre los grandes
                          beneficios que tenemos para ti. Para más información
                          sobre nuestros productos y servicios:
                          <a href="https://www.popularenlinea.com"
                            >www.popularenlinea.com</a
                          >
                        </div>
                        <div class="font-medium flex mt-5">
                          <button
                            type="button"
                            class="btn btn-secondary py-1 px-2"
                          >
                            Mas Detalles
                          </button>
                        </div>
                      </div>
                    </TinySlider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 mt-2">
          <div class="box p-6 relative overflow-hidden intro-y">
            <div
              class="leading-[2.15rem] w-full sm:w-56 text-primary dark:text-white text-xl -mt-3"
            >
              ¡Corre la voz!
            </div>
            <div class="w-full sm:w-64 leading-relaxed text-slate-500 mt-2">
              Cuentale a todos sobre mi chelito y ayuda a que ellos encuentren
              las mejores oportunidades financieras.
            </div>
            <Tippy
              tag="div"
              class="w-48 relative mt-6 cursor-pointer"
              content="Copy referral link"
            >
              <input
                type="text"
                class="form-control"
                value="https://mi-chelito.us"
                readonly
              />
              <CopyIcon
                class="absolute right-0 top-0 bottom-0 my-auto mr-4 w-4 h-4"
              />
            </Tippy>
            <img
              class="hidden sm:block absolute top-0 right-0 w-1/2 mt-1 -mr-12"
              alt="Midone Tailwind HTML Admin Template"
              src="@/assets/images/phone-illustration.svg"
            />
          </div>
        </div>

        <div class="col-span-12 lg:col-span-6 mt-2">
          <div class="box p-5 relative overflow-hidden bg-primary intro-y">
            <div
              class="leading-[2.15rem] w-full sm:w-72 text-white text-base -mt-3 font-medium"
            >
              ¿Aun no empiezas a utilizar mi chelito para impulsar tu futuro
              financiero?
            </div>
            <div
              class="w-full sm:w-72 leading-relaxed text-white/70 dark:text-slate-500 mt-3"
            >
              Entonces que estas esperando
            </div>
            <button
              class="btn w-32 bg-white dark:bg-darkmode-800 dark:text-white mt-6 sm:mt-10"
            >
              Comienza ahora
            </button>
            <img
              class="hidden sm:block absolute top-0 right-0 w-2/5 -mt-3 mr-2"
              alt="Midone Tailwind HTML Admin Template"
              src="@/assets/images/preview.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import ReportLineChart from "@/components/report-line-chart/Main.vue";
// import ReportDonutChart from "@/components/report-donut-chart/Main.vue";
// import ReportPieChart from "@/components/report-pie-chart/Main.vue";
// import ReportMap from "@/components/report-map/Main.vue";
// import ReportDonutChart1 from "@/components/report-donut-chart-1/Main.vue";
// import SimpleLineChart1 from "@/components/simple-line-chart-1/Main.vue";
import { Auth } from "../../firebase/init";

const salesReportFilter = ref();
const importantNotesRef = ref();

provide("bind[importantNotesRef]", (el) => {
  importantNotesRef.value = el;
});

const prevImportantNotes = () => {
  const el = importantNotesRef.value;
  el.tns.goTo("prev");
};

const nextImportantNotes = () => {
  const el = importantNotesRef.value;
  el.tns.goTo("next");
};

const user = ref({});
const showWelcome = ref(true);

onMounted(() => {
  let interval = setInterval(() => {
    if (Auth.currentUser !== null) {
      clearInterval(interval);

      user.value = Auth.currentUser;

      console.log(Auth.currentUser);
    }
  }, 1);

  // setTimeout(() => showWelcome.value = false, 5000);
});
</script>
