import {PluginFunction, VueConstructor} from 'vue';

interface InstallFunction extends PluginFunction<any> {
    installed?: boolean;
}

declare const NNVueHorizontalScrollerComponents: { install: InstallFunction };
export default NNVueHorizontalScrollerComponents;

interface Scroller extends VueConstructor {
    slideTo(index: number): void;
    slideForwards(): void;
    slideBackwards(): void;
}

export const Scroller: Scroller;
export const ScrollerSlide: VueConstructor;