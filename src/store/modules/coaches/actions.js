export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(
      `https://vue-coach-app-b08e1-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    /* const responseData = await response.json()
    if(!response.ok){

    }else{
      
    } */
    context.commit('registerCoach', { ...coachData, id: userId });
  },
};
