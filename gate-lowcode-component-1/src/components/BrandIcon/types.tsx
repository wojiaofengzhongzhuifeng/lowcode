
export interface BrandIconItem{
  Icon: string
  darkIcon: string
  alt: string
}
export interface BrandIconProps{
  BrandIconList: BrandIconItem[]
  isDark:boolean
  title: string
}

export const initialBrandIconProps = {
  BrandIconList: [
    {
      Icon: 'https://gimg2.gateimg.com/image/1682418315527647759cosmos-based-protocols-keplr.webp',
      darkIcon: 'https://gimg2.gateimg.com/image/1682417950248722036cosmos-based-protocols-keplr-dark.webp',
      alt: 'Cosmos based protocols - Keplr'
    },
    {
      Icon: 'https://gimg2.gateimg.com/image/1682417950224958331cosmos-based-protocols-cronos.webp',
      darkIcon: 'https://gimg2.gateimg.com/image/1682417950460425675cosmos-based-protocols-cronos-dark.webp',
      alt: 'Cosmos based protocols - Cronos'
    },
    {
      Icon: 'https://gimg2.gateimg.com/image/1682417950194874411cosmos-based-protocols-injective.webp',
      darkIcon: 'https://gimg2.gateimg.com/image/1682417950686814567cosmos-based-protocols-injective-dark.webp',
      alt: 'Cosmos based protocols - Injective'
    },
    {
      Icon: 'https://gimg2.gateimg.com/image/1682417950574089146cosmos-based-protocols-fetch-ai.webp',
      darkIcon: 'https://gimg2.gateimg.com/image/168241795065147234cosmos-based-protocols-fetch-ai-dark.webp',
      alt: 'Cosmos based protocols - Fetch.ai'
    },
    {
      Icon: 'https://gimg2.gateimg.com/image/1682418672895727915cosmos-based-protocols-stargaze.webp',
      darkIcon: 'https://gimg2.gateimg.com/image/1682418672261992299cosmos-based-protocols-stargaze-dark.webp',
      alt: 'Cosmos based protocols - Stargaze'
    },
    {
      Icon: 'https://gimg2.gateimg.com/image/1682417950592462617cosmos-based-protocols-kava.webp',
      darkIcon: 'https://gimg2.gateimg.com/image/16824179504661872cosmos-based-protocols-kava-dark.webp',
      alt: 'Cosmos based protocols - Kava'
    },
    {
      Icon: 'https://gimg2.gateimg.com/image/1682417950301186050cosmos-based-protocols-evmos.webp',
      darkIcon: ' https://gimg2.gateimg.com/image/1682417950754445737cosmos-based-protocols-evmos-dark.webp',
      alt: 'Cosmos based protocols - Evmos'
    },
    {
      Icon: 'https://gimg2.gateimg.com/image/1682417950652073375cosmos-based-protocols-band-protocol.webp',
      darkIcon: 'https://gimg2.gateimg.com/image/1682417950912552991cosmos-based-protocols-band-protocol-dark.webp',
      alt: 'Cosmos based protocols - Band Protocol'
    },
    {
      Icon: 'https://gimg2.gateimg.com/image/1682418600232123346cosmos-based-protocols-thor-chain.webp',
      darkIcon: 'https://gimg2.gateimg.com/image/1682418600522325662cosmos-based-protocols-thor-chain-dark.webp',
      alt: 'Cosmos based protocols - Thor Chain'
    },
    {
      Icon: 'https://gimg2.gateimg.com/image/168241795056871891cosmos-based-protocols-crescent.webp',
      darkIcon: 'https://gimg2.gateimg.com/image/1682417950983589132cosmos-based-protocols-crescent-dark.webp',
      alt: 'Cosmos based protocols - Crescent'
    },
  ],
  isDark:false,
  title: 'Other Cosmos Based Protocols'
}
