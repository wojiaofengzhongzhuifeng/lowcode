export interface ChartCardProps {
  data: {
    title: string
    describe: string
    href: string,
    buttonName: string,
    options?: object,
  }[]
}

export const initialChartCard = [
  {
    title: 'Bitcoin (BTC) Price',
    describe: `The current price of Bitcoin (BTC) is $0$, which is also $1$ in the last 24 hours,  and $2$ in the past 7 days.  For more information, see <a href="/trade/BTC_USDT">Bitcoin price</a> now.`,
    href: `/trade/BTC_USDT`,
    buttonName: 'Trade BTC/USDT',
    options: {
      "tooltip": {"trigger": "none"},
      "xAxis": [{
        "data": ["05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-08", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09", "05-09"],
        "axisLabel": {"show": true, "interval": "auto"}
      }],
      "yAxis": [{"type": "value", "min": "25975.38", "max": "29701.77", "splitNumber": 8}],
      "grid": {
        "top": "4%",
        "left": "1%",
        "right": 0,
        "bottom": 0,
        "containLabel": true,
        "show": "true",
        "borderWidth": "0"
      },
      "series": [{
        "type": "line",
        "showSymbol": false,
        "data": [28219.3, 28287.4, 28201.5, 28130, 28262.7, 28174.9, 27982.9, 27717.5, 27916.5, 27939.1, 27933.8, 27769, 27852.4, 27968.1, 27888.7, 27865.6, 27525.5, 27475.2, 27342.5, 27536.9, 27542.5, 27654.2, 27666.7, 27576.3, 27699.7, 27641, 27624.5, 27606.6, 27544.8, 27473.8],
        "itemStyle": {"normal": {"color": "#F23D3D", "lineStyle": {"color": "#F23D3D"}}}
      }]
    }
  }
]
