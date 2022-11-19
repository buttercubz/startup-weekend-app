<template>
  <Chart
    type="line"
    :width="width"
    :height="height"
    :data="data"
    :options="options"
  />
</template>

<script setup>
import { computed } from "vue";
import { useDarkModeStore } from "@/stores/dark-mode";
import { useColorSchemeStore } from "@/stores/color-scheme";
import { colors } from "@/utils/colors";

const props = defineProps({
  width: {
    type: [Number, String],
    default: "auto",
  },
  height: {
    type: [Number, String],
    default: "auto",
  },
});

const darkMode = computed(() => useDarkModeStore().darkMode);
const colorScheme = computed(() => useColorSchemeStore().colorScheme);

const data = computed(() => {
  return {
    labels: [
      "Ene",
      "Febr",
      "Marz",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Agos",
      "Sept",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [0, 1.20, 1.25, 1.20, 1.70, 2.55, 2.65, 2.105, 3.95, 2.110, 3.90, 4.120],
        borderWidth: 2,
        borderColor: colorScheme.value ? colors.primary(0.8) : "",
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
        tension: 0.4,
      },
      {
        label: "# of Votes",
        data: [0, 2.30, 1.40, 1.56, 2.32, 2.60, 2.72, 2.85, 3.69, 3.80, 3.120, 3.101],
        borderWidth: 2,
        borderDash: [2, 2],
        borderColor: darkMode.value
          ? colors.slate["400"](0.6)
          : colors.slate["400"](),
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
        tension: 0.8,
      },
    ],
  };
});

const options = computed(() => {
  return {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
          color: colors.slate["500"](0.8),
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
          color: colors.slate["500"](0.8),
          callback: function (value) {
            return "% " + value;
          },
        },
        grid: {
          color: darkMode.value
            ? colors.slate["500"](0.3)
            : colors.slate["300"](),
          borderDash: [2, 2],
          drawBorder: false,
        },
      },
    },
  };
});
</script>
