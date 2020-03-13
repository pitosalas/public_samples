Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users

  get :show_form, to: 'users#show_form'
  get :do_form, to: 'users#do_form'
  
end
