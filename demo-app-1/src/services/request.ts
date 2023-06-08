import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.sesametest.co:8080',
  timeout: 50000,
});

instance.interceptors.response.use(function (response) {
  console.log('asddsa', response);

  if(response.status === 200 && response.data.code === 200){
    return response
  } else {
    console.error('error request', response)
    return Promise.reject(response)
  }

}, function (error) {
  console.error('error request error', error)
  return Promise.reject(error);
});


export const createSchemaRequest = ({schemaData}: {schemaData: string}) => {
  return new Promise((resolve, reject)=>{
    instance({
      url: '/low_code/ts_api/schema/save_data',
      method: "post",
      data: {
        data: schemaData
      }
    }).then((res)=>{
      resolve(res.data)
    })
  })
}

export const updateSchemaRequest = ({schemaData, schemaId}: {schemaData: string, schemaId: string}) => {
  return new Promise((resolve, reject) => {
    instance({
      url: '/low_code/ts_api/schema/update_data',
      method: "post",
      data: {
        data: schemaData,
        id: schemaId
      }
    }).then((res)=>{
      resolve(res.data)
    })
  })
}
export const getSchemaRequest = ({schemaId}: {schemaId: string})=>{

  return new Promise((resolve, reject) => {
    instance({
      url: '/low_code/ts_api/schema/get_data',
      method: "get",
      params: {
        id: schemaId
      }
    }).then((res)=>{
      resolve(res.data)
    })
  })

}
