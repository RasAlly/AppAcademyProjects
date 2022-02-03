Rails.application.routes.draw do

  # get 'artworks/index'
  # get 'artworks/create'
  # get 'artworks/show'
  # get 'artworks/update'
  # get 'artworks/destroy'

  # get 'users', to: 'users#index', as: 'all_users'
  # get 'users/:id', to: 'users#show', as: 'user'
  # get 'users/new', to: 'users#new', as: 'new_user'
  # get 'users/:id/edit', to: 'users#edit', as: 'edit_user'
  # post 'users', to: 'users#create', as: 'create_user'
  # patch 'users/:id', to: 'users#update', as: 'update_user'
  # put 'users/:id', to: 'users#update', as: 'update_user_put'
  # delete 'users/:id', to: 'users#destroy', as: 'delete_user'

  resources :users, except: [:new, :edit] do 
    resources :artworks, only: :index
  end

  resources :artworks, except: [:new, :edit, :index]

  resources :artwork_shares, only: [:create, :destroy]
end
