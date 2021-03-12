Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/login'
  get 'sessions/welcome'
  get 'login', to: 'sessions#new'

  post 'login', to: 'sessions#create'
  get 'welcome', to: 'sessions#welcome'
  get 'logout', to: 'sessions#destroy'
  root to: 'sessions#welcome'

  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
