Rails.application.routes.draw do
  resources :itemxes
  resources :categories
  resources :items do
    collection do
      get 'search'
      get 'do_search'
    end
    resources :comments, only: [:index, :create, :new]
  end
  root 'items#index'
end
