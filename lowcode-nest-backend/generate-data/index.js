// const axios = require("axios")
//
//
// const data = ["https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=8NjXVsLHIg8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=_BfZRdFFdE8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=nbTAKkjnV_Q","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=NbB6qMA2lts","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=wumB0Qs2YT4","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=fFeQDbY741I","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=BZ-9iYlDpXc","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=4zhowmwBCuw","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=zgdQsLH7sDw","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=L2_xh-r10OI","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=69JAoslGYI8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=8xxXjzRlcjQ","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=rTJSWmgbVwA","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=Fh9lQcV94d4","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=TKqa-ZXGKYA","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=H7yym8n8nLw","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=7AlAYttGnAg","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=e6yUmOtchLE","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=3aKrgl3-Unc","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=BKDz5kNjkfU","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=YxGYumo6tpU","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=psdZRggL7cI","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=VcY3tJbPOOA","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=qeFT0_8LIQw","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=rfkXgby-xn0","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=n43oZSY7df0","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=vAM1xXdRnH0","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=hMOhgdSPEwY","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=mqsb7MSgY6U","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=zztgcy56_UA","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=mqYjyQG11GQ","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=-gysEtnzYEw","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=aopp7-PFD14","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=LPoFbsAT1sE","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=WrZ6fKelwOU","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=WiNYFwIfg4w","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=2PRAiVs3MVc","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=CR7QizUf6Jo","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=PL19VJ13Ttg","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=14C28JSO-sg","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=tnyJXbPrGN8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=3BBWKeSKgiI","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=7m1XTCMgBZ8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=dUC7TBmzrL4","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=6EGg0_l-edc","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=I5bwxWk6H_g","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=DhAyaNGCnGo","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=PDhtvvqNn5A","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=dEjA3uw5s3I","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=79KWwlhbOD8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=TIfjs9qWlBM","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=6MNxuMgg58k","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=zE1IRbhqMb8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=jK2k1P56Cno","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=E4J0bFa4d0U","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=jW7j41mbxXU","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=hOGuaMazCz8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=i9NOkjmBszo","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=eb5gX85Qw0U","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=-yOnT13j388","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=edjih_b_NBQ","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=ra6vuF47hB0","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=2PkxaVyVLpE","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=K6iRoT8u2xU","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=d-sTHIecSBw","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=hyDElqwFnYI","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=r0mNwyywHIY","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=zKAAFsovtM4","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=pQuiUCRtvus","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=xv8NrFQqKJ8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=ENHwrVK0wn8","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=HSzlppCcwuk","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=YrQLmElRT-E","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=kyfXEMqvLgU","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=TQ5DUv_ZwRg","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=0hV9qYJ3IHQ","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=3NwlRzCzzsI","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=zPuEI4zHMRE","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=sOd5-2RskiU","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=6UQHIQpBw6w","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=FXRfr5-n4bY","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=vGBJmgZSeRc","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=J9AfRmtdqGs","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=bD6ifecX6rs","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=cE-mBCBuxYQ","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=LiwDa5rCmYc","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=QkwAWe7nOXY","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=eYuI4krrKBM","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=__ur8Ykcivw","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=KwM4yOwMls4","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=OnYr3TisCcg","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=290Q1JFInHE","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=FMWiJwLG0j4","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=vZcR9Qs0IlQ","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=Fif726PWiTM","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=lxTFsDzF-nc","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=y3FdInN6n48","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=uzSme3PRhZ0","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=lac3TYlarFM","https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=3rdSK5uY6IM"]
//
//
// data.map((youtubeUrl)=>{
//   const externalId = youtubeUrl.split('https://lyric-marker.larkplayer.com/v2LyricMakerVid?vid=')[1]
//   axios({
//     url: "http://localhost:3009/song-comment-seed/",
//     method: "post",
//     data: {
//       "externalId": externalId
//     }
//   })
// })
//
//
//
// axios({
//   url: "http://localhost:3009/song-comment-seed/",
//   method: "post",
//   data: {
//     "externalId": "_BfZRdFFdE8"
//   }
// })

// 引入 node-xlsx 模块
// todo: 如果能弄成自动根据id 追加就好了
const xlsx = require('node-xlsx')
const path = require("path")
const axios = require("axios");

// excel文件类径


const excelPath = path.resolve(__dirname, "./test-production.xlsx")

const url = `http://121.4.27.105:3009`

//解析excel, 获取到所有sheets
const sheets = xlsx.parse(excelPath);

// 查看页面数
console.log('sheets', JSON.stringify(sheets));

sheets.forEach((sheet)=>{
  if(sheet.name === 'consoleType'){
    const sheetData = sheet.data
    let promiseList = []
    sheetData.forEach((rowData, index)=>{
      if(index === 0){return}
      let promise = axios({
        url: `${url}/console-type`,
        method: 'post',
        data: {
          name: rowData[1]
        }
      })
      promiseList.push(promise)
    })
    Promise.all(promiseList).then((resultList)=>{
      console.log('resultList', resultList);
    })
  } else if (sheet.name === 'goodType'){
    const sheetData = sheet.data
    let promiseList = []
    sheetData.forEach((rowData, index)=>{
      if(index === 0){return}
      let promise = axios({
        url: `${url}/good-type`,
        method: 'post',
        data: {
          name: rowData[1],
          price: rowData[2],
          consoleTypeId: rowData[3],
        }
      })
      promiseList.push(promise)
    })
    Promise.all(promiseList).then((resultList)=>{
      console.log('resultList', resultList);
    })
  } else if(sheet.name === 'account'){
    const sheetData = sheet.data
    let promiseList = []
    sheetData.forEach((rowData, index)=>{
      if(index === 0){return}
      let promise = axios({
        url: `${url}/account`,
        method: 'post',
        data: {
          info: rowData[3],
          goodTypeId: rowData[4],
        }
      })
      promiseList.push(promise)
    })
    Promise.all(promiseList).then((resultList)=>{
      console.log('resultList', resultList);
    })
  } else {
    throw new Error("error11111")
  }
})


