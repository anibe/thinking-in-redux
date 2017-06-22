export const RECEIVE_BEERS = 'RECEIVE_BEERS'
export const ADD_BEER_TO_CART = 'ADD_BEER_TO_CART'
// export const REMOVE_BEER_FROM_CART = 'REMOVE_BEER_FROM_CART'

export const receiveBeers = beers => ({
  type: RECEIVE_BEERS,
  beers
})

export const addBeerToCart = beer => ({
  type: ADD_BEER_TO_CART,
  beer
})

// export const removeBeerFromCart = beer => ({
//   type: REMOVE_BEER_FROM_CART,
//   beer
// })
