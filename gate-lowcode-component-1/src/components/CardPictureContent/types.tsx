
export interface ListIconProps{
  icon: string,
  iconType: string
  description: string
}

export interface ButtonProps{
  url: string
  buttonText: string
}

export interface LinkProps{
  text: string
  linkName: string
  url: string
}

export interface CardPictureContentItemProps{
  Images: string
  ImagesAlt: string
  title: string
  listA: ListIconProps[],
  listB: ListIconProps[],
  button: ButtonProps[],
  linkText: LinkProps[],
  ImgPosition: string
}
export interface CardPictureContentProps{
  CardPictureContentList: CardPictureContentItemProps[]
  title: string
}
export const initialCardPictureContentProps = {
  CardPictureContentList: [
    {
      Images: 'https://gimg2.gateimg.com/image/1682495207152024993cosmos-competitor-comparison.webp',
      ImagesAlt: ('Cosmos Competitors Comparison'),
      title: ('Cosmos'),
      listA: [
        {
          icon: null,
          iconType: "no",
          description: 'Customisable support for dApps',
        },
        {
          icon: null,
          iconType: "no",
          description: 'Excellent network scalability'
        },
        {
          icon: null,
          iconType: "no",
          description: 'Easy deployment of new blockchains'
        }
      ],
      listB: [
        {
          icon: null,
          iconType: "no",
          description: 'Weak correlation between native token ATOM to the ecosystem'
        },
        {
          icon: null,
          iconType: "no",
          description: 'Relatively weak ecological status'
        },
      ],
      button: [
        {
          url: `en/trade/ATOM_USDT`,
          buttonText: 'Trade ATOM/USDT',
        }
      ],

      linkText: [
        {
          text: 'or learn more about',
          linkName: 'What is Cosmos',
          url: `en/learn/articles/WHAT-IS-COSMOS-ATOM/46`
        }
      ],
      ImgPosition: 'Left'
    },
    {
      Images: 'https://gimg2.gateimg.com/image/1682495207152024993cosmos-competitor-comparison.webp',
      ImagesAlt: ('Cosmos Competitors Comparison'),
      title: ('Cosmos'),
      listA: [
        {
          icon: null,
          iconType: "no",
          description: 'Customisable support for dApps',
        },
        {
          icon: null,
          iconType: "no",
          description: 'Excellent network scalability'
        },
        {
          icon: null,
          iconType: "no",
          description: 'Easy deployment of new blockchains'
        }
      ],
      listB: [
        {
          icon: null,
          iconType: "no",
          description: 'Weak correlation between native token ATOM to the ecosystem'
        },
        {
          icon: null,
          iconType: "no",
          description: 'Relatively weak ecological status'
        },
      ],
      button: [
        {
          url: `en/trade/ATOM_USDT`,
          buttonText: 'Trade ATOM/USDT',
        }
      ],
      linkText: [
        {
          text: 'or learn more about',
          linkName: 'What is Cosmos',
          url: `en/learn/articles/WHAT-IS-COSMOS-ATOM/46`
        }
      ],
      ImgPosition: 'Right'
    },
  ],
  title: 'Cosmos vs Polkadot vs Ethereum: Comparison Against Major Competitors'
}
