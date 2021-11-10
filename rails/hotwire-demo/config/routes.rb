Rails.application.routes.draw do
  get 'messages/new'
  get 'messages/create'
  resources :rooms do
    resources :messages
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
