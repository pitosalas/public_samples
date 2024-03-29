Rails.application.routes.draw do
  resources :categories
  resources :items do
    collection do
      get 'search'
      get 'do_search'
    end
    resources :comments, only: [:index, :new, :create, :show, :edit]
  end
  root 'items#index'
end
 