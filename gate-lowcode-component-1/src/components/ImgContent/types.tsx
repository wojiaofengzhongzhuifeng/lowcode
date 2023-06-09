
export interface ImgContentItem{
  Image: string
  ImageAlt: string
  title: string
  description: string[],
  ImgPosition: string
}
export interface ImgContentProps{
  ImgContentList: ImgContentItem[]
  title: string
}

export const initialImgContentProps = {
  ImgContentList: [
    {
      Image: 'https://gimg2.gateimg.com/image/1682491771443441319cosmos-hub.png',
      ImageAlt: ('Cosmos Hub'),
      title: ('Cosmos Hub'),
      description: [
        'Cosmos Hub is one of the earliest Cosmos products with the main function of transporting data for blockchains, known as "zones", connected to the hub. ',
        'This is being done by keeping track of the state of each zone through the Inter Blockchain Communication (IBC) Protocol. This allows information to be transferred easily between zones. ',
        'With future upgrades and adjustments on the Cosmos network structure as well as the new ATOM 2.0 token, Cosmos may well transform into a center of cross-chain security and liquidity.'
      ],
      ImgPosition: 'Right'
    },
  ],
  title: 'Cosmos Explained: Core Products and Tools'
}
