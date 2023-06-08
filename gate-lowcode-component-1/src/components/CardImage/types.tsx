
export interface CardImageItemProps{
  Image: string
  ImageAlt: string
  title: string
  descriptionList: string[]
}
export interface CardImageProps{
  CardImageList: CardImageItemProps[]
  title: string
}
export const initialCardImageProps = {
  CardImageList: [
    {
      Image: 'https://gimg2.gateimg.com/image/1682411590101261323cosmos-founder-jae-kwon.webp',
      ImageAlt: "Cosmos Founder - Jae Kwon",
      title: 'Jae Kwon',
      descriptionList: ['Founder and CEO of Tendermint', 'Founder of Gno.Land', 'CEO of NewTendermint', 'President of InterChain Foundation']
    },
    {
      Image: 'https://gimg2.gateimg.com/image/1682411590382040845cosmos-founder-ethan-buchman.webp',
      ImageAlt: "Cosmos Founder - Ethan Buchman",
      title: 'Ethan Buchman',
      descriptionList: ['Co-Founder and CTO of Tendermint', 'CEO of Informal Systes', 'Vice President of Interchain Foundation']
    },
    {
      Image: 'https://gimg2.gateimg.com/image/1682411590113651322cosmos-founder-peng-zhong.webp',
      ImageAlt: "Cosmos Founder - Peng Zhong",
      title: 'Peng Zhong',
      descriptionList: ['CDO and CEO of Tendermint', 'CEO of Ignite']
    },
  ],
  title: 'Key Individuals Behind Cosmos'
}
