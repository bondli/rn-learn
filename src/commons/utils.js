import Dimensions from 'Dimensions';

const { width, height } = Dimensions.get('window');

/**
 * 我们的设计稿是750的宽度规范
 * 所以利用一个scale函数来做不同大小的屏幕适配,这样我们在切图的时候就可以直接输入测量出来的长度
 */
export const screenWidth = width;
export const screenHeight = height;

export function flexible(size){
    return (size / 2) * (width / 375);
}
