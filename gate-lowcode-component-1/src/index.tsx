import CompareItemSetter from "./setter/compare-item-setter";

export { default as FAQS } from './components/FAQs/index';
export { default as Article } from './components/Article/index';
export { default as Banner } from './components/Banner/index';
export { default as CardListType1 } from './components/CardListType1/index';
export { default as ChartCard } from './components/ChartCard/index';
export { default as CompareModule } from './components/CompareModule/index';
export { default as Disclaimer } from './components/Disclaimer/index';
export { default as ImageFoldList } from './components/ImageFoldList/index';
export { default as LearnArticleList } from './components/LearnArticleList/index';
export { default as NewCard } from './components/NewCard/index';
export { default as SlideBar } from './components/SlideBar/index';
export { default as TimeLineVertical } from './components/TimeLineVertical/index';
export { default as DivContainer } from './components/DivContainer/index';
export { default as CenterContainer } from './components/Grid/CenterContainer';
export { default as Row } from './components/Grid/Row';
export { default as CompareModuleClassic } from './components/CompareModuleClassic/index';
export { default as CardContentButton } from './components/CardContentButton/index';
export { default as TimelineHorizontal } from './components/TimelineHorizontal/index';
export { default as CardImage } from './components/CardImage/index';
export { default as BrandIcon } from './components/BrandIcon/index';
export { default as ImgContent } from './components/ImgContent/index';
export { default as CardPictureContent } from './components/CardPictureContent/index';

import AltStringSetter from './setter/input-setter';
import FAQInputSetter from "./setter/faq-input-setter";
import CardListTypeSetter from "./setter/card-list-type-setter";
import LearnArticleListSetter from "./setter/learn-article-list-setter";
import NewCardListSetter from "./setter/new-card-list-setter";
import RowSpanNumberInputSetter from "./setter/row-span-number-input-setter";
import CardContentButtonSetter from "./setter/card-content-button-setter";
import CardPictureContentSetter from "./setter/card-picture-content-setter";


init()

function init(){
  registerCustomSetter()

  registerPlugins()
}

function registerCustomSetter(){
  const registerSetter = window.AliLowCodeEngine.setters.registerSetter;
  registerSetter('AltStringSetter', AltStringSetter);
  registerSetter('FAQInputSetter', FAQInputSetter);
  registerSetter('CompareItemSetter', CompareItemSetter);
  registerSetter('CardListTypeSetter', CardListTypeSetter);
  registerSetter('LearnArticleListSetter', LearnArticleListSetter);
  registerSetter('NewCardListSetter', NewCardListSetter);
  registerSetter('RowSpanNumberInputSetter', RowSpanNumberInputSetter);
  registerSetter('CardContentButtonSetter', CardContentButtonSetter);
  registerSetter('CardPictureContentSetter', CardPictureContentSetter);


}

function registerPlugins(){

}

const bizCssPrefix = 'bizpack';

export {
  bizCssPrefix
}
