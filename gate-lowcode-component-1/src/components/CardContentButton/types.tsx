
export interface ButtonItemProps{
  buttonName: string
  url: string
}
export interface CardContentItemProps{
  title: string
  description: string
  button: ButtonItemProps[]
}
export interface CardContentButtonProps {
  CardContentList: CardContentItemProps[]
}

export const initialCardContentList = [

  {
    title: ('Osmosis'),
    description: ('Although Osmosis uses the IBC for interchain transactions, the volume of assets transferred on the Osmosis DEX is even higher than that of the Cosmos Hub, which is really impressive.'),
    button: [
      {
        buttonName: ('Visit Osmosis Homepage'),
        url: 'https://osmosis.zone/'
      },
      {
        buttonName: ('Visit Osmosis'),
        url: 'https://osmosis.zone/test'
      }
    ]

  },
  {
    title: ('Canto'),
    description: ('As an Ethereum compatible blockchain, Canto is known for its Free Public Infrastructure (FPI) feature which aims to provide liquidity and rent extraction as free public goods.'),
    button: [
      {
        buttonName: ('Visit Canto Homepage'),
        url: 'https://canto.io/'
      }
    ]
  },
  {
    title: ('Terra Luna'),
    description: ('Prior to 2022, Terra Luna was one of the single chains with the highest value in the Cosmos network. The crash did impact Cosmos, however Cosmos managed to hold up after.'),
    button: [
      {
        buttonName: ('Will Terra Luna recover?'),
        url: '/explore/terra-luna'
      }
    ]
  },
  {
    title: ('Terra Luna'),
    description: ('Prior to 2022, Terra Luna was one of the single chains with the highest value in the Cosmos network. The crash did impact Cosmos, however Cosmos managed to hold up after.'),
    button: [
      {
        buttonName: ('Will Terra Luna recover?'),
        url: '/explore/terra-luna'
      }
    ]
  }
]
