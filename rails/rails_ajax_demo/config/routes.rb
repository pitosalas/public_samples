Rails.application.routes.draw do
  get 'nestedform/basic'

  root to: 'help#show'

  get '/showhide', to: 'showhide#show_hide'

  get '/do_show', to: 'showhide#do_show'
  post '/do_hide', to: 'showhide#do_hide'
  post '/do_toggle', to: 'showhide#do_toggle'
  post '/do_fadeout', to: 'showhide#do_fadeout'
  post '/do_fadein', to: 'showhide#do_fadein'
  post '/do_shrink', to: 'showhide#do_shrink'
  post '/do_unshrink', to: 'showhide#do_unshrink'

  resources :farmer do
    resources :cow
  end

end
