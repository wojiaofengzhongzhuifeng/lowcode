
export interface TimelineHorizontalItemProps{
  date: string
  title:  string
  content: string
}
export interface TimelineHorizontalProps{
  TimelineHorizontalList: TimelineHorizontalItemProps[]

}

export const initialTimelineHorizontalList = [
  {
    date: ('March 2021'),
    title: ('Birth of Various Products under the Terra Luna Ecosystem'),
    content: ('Established products such as Anchor Protocol for Savings, Mirror for Synthetic Asset Agreement, and Chai for e-Commerce Payment.')
  },
  {
    date: ('November-March 2022'),
    title: ('Fast Growth led by the Anchor Savings Protocol'),
    content: ('Among all others, the Anchor Savings Protocol attracted a lot of investors with interest rates as high as 19.5% APY when UST is deposited. At its peak, the total lock-up volume reached US$15 billion.')
  },
  {
    date: ('March 2022'),
    title: ('Loopholes in the LUNA-UST Arbitrage Mechanism'),
    content: ('Strategy of revolving collateral stablecoins to increase interest leverage emerged, causing the Anchor savings protocol to fall short of budget, while market value of UST became overinflated. This spelled the trouble for the collapse of Terra Luna.')
  },

]
