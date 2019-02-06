import axios from 'axios'


export default{

  getPlans(){
    return axios.get('http://localhost:4000/v1/plans/plans')
    .then(response => {
      /* eslint-disable no-console */
      console.log(response);

      /* eslint-enable no-console */
      return response.data
    })
  },
}
