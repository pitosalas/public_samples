Rails.application.routes.draw do

  root to: 'fortune#help'
  resources :fortune do
    collection do
      get 'random'
      get 'help'
    end
  end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
