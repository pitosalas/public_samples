Rails.application.routes.draw do
  resources :comments
  resources :answers
  resources :questions
  # root "articles#index"
end
