import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export function useLazyLoad(request: Function) {
  const LAZY_TARGET = ref<HTMLElement>();

  const { stop } = useIntersectionObserver(
    LAZY_TARGET,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        stop();
        request();
      }
    }
  );

  return LAZY_TARGET;
}
