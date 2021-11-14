Rails.application.routes.draw do
  get 'messages/new'
  get 'messages/show'
  resources :rooms do
    resources :messages
  end
end
