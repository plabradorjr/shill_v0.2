Rails.application.routes.draw do

  resources :sessions
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  root to: "static#home"

  post '/auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  # delete 'logout', to: 'sessions#destroy'

  get '/auth/twitter/callback', to: 'sessions#callback'

  resources :comments

end
