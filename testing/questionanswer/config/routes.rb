Rails.application.routes.draw do
  root "questions#index"
  resources :questions do
    resources :answers do
      resources :comments
    end
  end
end
