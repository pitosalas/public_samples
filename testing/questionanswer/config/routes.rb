Rails.application.routes.draw do
  root "questions#index"
  resources :comments
  resources :answers
  resources :questions
end
