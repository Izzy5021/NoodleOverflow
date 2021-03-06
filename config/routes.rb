Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :show, :create]
    resources :answers, only: [:index, :show, :create, :update, :destroy]
    resources :votes, only: [:index, :create, :show, :destroy]
  end

  root to: "static_pages#root"
end
