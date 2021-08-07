import Route from '@ember/routing/route';
const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];


export default class IndexRoute extends Route {
  async model() {
   let res=await fetch('./api/rentals.json');
   let { data } = await res.json();

   return data.map((model) => {
     let { attributes } = model;
     let type;

     if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
       type = 'Community';
     } else {
       type = 'Standalone';
     }

     return { type, ...attributes };
   });
  }
}