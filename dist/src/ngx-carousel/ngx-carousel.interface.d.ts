export declare class NgxCarouselStore {
    type: string;
    deviceType?: string;
    classText: string;
    items: number;
    load: number;
    deviceWidth: number;
    carouselWidth: number;
    width: number;
    visibleItems: number;
    slideItems: number;
    itemWidthPer: number;
    transform: Transfrom;
    loop: boolean;
    dexVal: number;
    touchTransform: number;
    touch: Touch;
    isEnd: boolean;
    isFirst: boolean;
    isLast: boolean;
}
export declare class Touch {
    active?: boolean;
    swipe: string;
    velocity: number;
}
export declare class Transfrom {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    all: number;
}
export declare class NgxCarousel {
    grid: Transfrom;
    slide?: number;
    speed?: number;
    interval?: number;
    animation?: Animate;
    point?: Point;
    type?: string;
    load?: number;
    custom?: Custom;
    loop?: boolean;
    touch?: boolean;
    easing?: string;
}
export declare type Custom = 'banner';
export declare type Animate = 'lazy';
export interface Point {
    visible: boolean;
    pointStyles?: string;
}
