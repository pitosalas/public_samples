Rails.application.routes.draw do
  resources :users
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  get 'welcome', to: 'sessions#welcome'
  get 'logout', to: 'sessions#destroy'

  root 'users#index'

  get 'auth/:provider/callback', to: 'sessions#create_google'
  get 'auth/failure', to: redirect('/')
  # get 'logout', to: 'sessions#destroy', as: 'logout'

end
