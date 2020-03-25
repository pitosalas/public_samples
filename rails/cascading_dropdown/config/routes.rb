Rails.application.routes.draw do
  resources :profiles
  get 'cities_by_country/:id', to: 'profiles#cities_by_country'  
end
