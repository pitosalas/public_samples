
Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  resources :homes, only: [:show, :update]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
