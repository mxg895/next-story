export function hasDivOverflown(ref: { current: any; }): boolean {
    const element = ref.current;
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
