interface TimeDataItemProps {
  time: string,
  title: string,
  contentList: string[],
}

export interface TimeLineVerticalProps {
  title: string,
  isPhone: boolean,
  timeData: TimeDataItemProps[],
  id: string
}

export const initialTimeLineVerticalProps: TimeLineVerticalProps = {
  title: (`The Redeem GBTC Campaign: Unhappy Investors Seeking A Way Out, But Can They?`),
  isPhone: false,
  timeData: [

    {
      time: (`September 2013`),
      title: (`The Birth of GBTC`),
      contentList: [
        (`GBTC was founded with the aim of providing institutional and high net worth individuals (HNWI) with exposure to Bitcoin without the challenges and risks of trading and holding Bitcoin directly. The role of GBTC was simply to hold Bitcoin, issue shares representing such Bitcoin ownership and processing share redemption upon request. Since its inception until 2014, GBTC issued 1,474,600 shares and processed the redemption of 92,200 shares.`)
      ],
    },
    {
      time: (`23 September 2014`),
      title: (`SEC Suspended GBTC Share Redemption`),
      contentList: [
        (`The SEC issued a notice stating that the GBTC redemption program had violated Reg M in simultaneously issuing and redeeming shares. With that, the GBTC redemption program was suspended the very next day.`)
      ],
    },
    {
      time: (`2016-2017`),
      title: (`Grayscale Changes Its Direction to Target the Masses`),
      contentList: [
        (`Grayscale filed its first application to convert itself into a Bitcoin ETF, which is contrary to its initial product proposition. There were conversations between Grayscale and the SEC on this matter, however the application was eventually withdrawn on the basis that the regulatory environment at the material time was insufficient for such a product to be successfully brought to market.`)
      ],
    },
    {
      time: (`July 2016`),
      title: (`GBTC Share Redemption No Longer Suspended by the SEC, but...`),
      contentList: [
        (`GBTC entered into a settlement with the SEC, which supposedly should have resolved the prior Reg M violations. However, GBTC continued to self-restrict the operation of its redemption program, purportedly in compliance with Reg M. In doing so, Grayscale had failed to acknowledge that Reg M only requires that issuance and redemption cannot be done simultaneously, instead of a complete ban in share redemption.`)
      ],
    },
    {
      time: (`4 October 2017`),
      title: (`Grayscale Amended the Trust Agreement for Absolute Control`),
      contentList: [
        (`Such amendment gave management powers to suspend or refuse redemption orders while shareholders were stripped the rights to remove the management, even in case of abuse of powers.`)
      ],
    },
    {
      time: (`12 September 2018`),
      title: (`And then Grayscale Pretends to Tie its own hands in Prohibiting Share Redemption`),
      contentList: [
        (`Grayscale again amended the Trust Agreement, this time self-imposing a prohibition in share redemption. In trying to ustify such an amendment, Grayscale claimed that a waiver from SEC was necessary for the share redemptions to be permitted, when in reality there is no such legal requirement at all.`)
      ],
    },
    {
      time: (`2018-2021`),
      title: (`Malicious Share Issuance to New Investors`),
      contentList: [
        (`While no share redemption was processed, Grayscale had at the same time issued exponential quantities of new shares, thereby flooding the market with excessive supply. At the same time, contrary to its original purpose, Grayscale was marketing itself to individual investors through campaigns such as #DropGold. With that, the value of assets under management flipped and triggered over 2,000% increase in the annual fees of GBTC.`)
      ],
    },
    {
      time: (`March 2021`),
      title: (`GBTC Shares Started Trading at a Steep Discount`),
      contentList: [
        (`Due to the overissuance and oversupply of GBTC shares, coinciding with the beginning of crypto winter, GBTC shares started to trade at a discount. The historical biggest discount happened in December 2022, at a discount of 48.89%.`)
      ],
    },
    {
      time: (`5 April 2021`),
      title: (`Again, Grayscale Attempts to Convert GBTC into an ETF`),
      contentList: [
        (`Grayscale filed a blog post with the SEC claiming to have been “100% committed to converting GBTC into an ETF” and that this has always been its intention, despite contrary statements in the past. Such conversion also served as a justification to the refusal of share redemptions.`)
      ],
    },
    {
      time: (`29 June 2022`),
      title: (`SEC Rejected the Application to Convert GBTC into ETF`),
      contentList: [
        (`Along with applications related to Bitcoin ETFs by other issuers, the SEC rejected these applications on the grounds that these proposals failed to meet anti-fraud and investor protection standards.`)
      ],
    },
    {
      time: (`December 2022`),
      title: (`GBTC Investor Fight Back with the GBTC Campaign`),
      contentList: [
        (`David Bailey, the CEO of Bitcoin Magazine, initiated this campaign so that GBTC shareholders receive fair treatment from the management. The campaign saught for a credible path to GBTC share redemptions while minimizing the impact on the spot Bitcoin market, a fee reduction, as well as a change in management with a competitive bidding process for new trust sponsors.`)
      ],
    },
  ],
  id: "test"
}
