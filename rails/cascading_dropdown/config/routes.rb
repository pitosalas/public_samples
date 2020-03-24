Rails.application.routes.draw do
  resources :profiles
  get 'states_by_country/:id', to: 'profiles#states_by_country'  
end
