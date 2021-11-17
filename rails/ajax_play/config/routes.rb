Rails.application.routes.draw do
  root 'play#index'
  get '/do_show', to: 'play#do_show'
  post '/do_hide', to: 'play#do_hide'
  post '/do_toggle', to: 'play#do_toggle'
  post '/do_fadeout', to: 'play#do_fadeout'
  post '/do_fadein', to: 'play#do_fadein'
  post '/do_shrink', to: 'play#do_shrink'
  post '/do_unshrink', to: 'play#do_unshrink'
end
