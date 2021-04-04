const apiKey = 'FO33c9QvSiqxn30KESZda36omzE7ofis07yxbz_j1WU8rD5u62cn6cC8rxUF60pkcyg7McQwJwIdhpZZHGyT8ZC9XPZdZPoyVvog5SMp981FeNyAwQcX_9_0a-wcX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      console.log(jsonResponse.businesses);
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(business.name);
          return {
            id: business.id,
            imgSrc: business.image_url,
            name: business.name, 
            address: business.location.address1, 
            city: business.location.city, 
            state: business.location.state, 
            zipCode: business.location.zip_code, 
            category: business.categories[0].title, 
            rating: business.rating, 
            reviewCount: business.review_count 
          }
        })
      }
    });
  }
};

export default Yelp;
