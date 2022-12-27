Rails.application.routes.draw do
  #get 'welcome/index'
  root "home#frontend/index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create, :post]
    end
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
