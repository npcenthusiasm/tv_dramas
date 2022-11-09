// import { AxiosResponse } from 'axios'
import { axiosBase } from 'src/boot/axios'
import { DramaDetailType, DramaQueryType, DramaType, ResponseData, SuggestionType } from 'src/components/models'

// interface ResponseData {
//   data: DramaDetailType
// }

function fetchDramas (page?: number, per_page?: number) {
  return axiosBase.get<DramaQueryType>('/dramas', {
    params: { page, per_page }
  })
}

function fetchDramaDetail (id: string) {
  return axiosBase.get<DramaDetailType>(`/dramas/${id}`)
}

function fetchSeries (id: string) {
  return axiosBase.get<ResponseData>(`/figures/${id}`)
  // return axiosBase.get<ApiResponseData<DramaDetailType>>(`/figures/${id}`)
}


function fetchSuggestions (keyword: string) {
  return axiosBase.get<SuggestionType[]>(`/search_suggestions/${keyword}`)
  // return axiosBase.get<ApiResponseData<DramaDetailType>>(`/figures/${id}`)
}



// this.$axios
// .get('/dramas')
// .then((res: ResponseData) => {
//   console.log('res: ', res)
//   this.dramas = res.data
// })
// .catch((err) => {
//   console.log(err)
// })

//     api.get(`/figures/${id}`).then((res: ResponseData) => {
//       console.log('res: ', res)
//       dramas.value = res.data.items
//       figureTag.value = res.data.figure
//     }).catch((err) => {
//       console.log(err)
//     })

interface ApiResponseData<T = any> {
  data: T
}

export default {
  fetchSuggestions,
  fetchDramas,
  fetchDramaDetail,
  fetchSeries
}
