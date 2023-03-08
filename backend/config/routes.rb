Rails.application.routes.draw do
  # namespace :line do
  #   get 'bot/callback'
  # end

  post '/callback', to: 'line/bot#callback'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
