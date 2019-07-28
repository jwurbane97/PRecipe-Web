Rails.application.routes.draw do
  
  root "plainpage#index"
  
  get '/level/:id/:review' => "plainpage#index"
  get '/level/:id' => "plainpage#index", as: :level
  get '/dashboard' => "plainpage#dashboard"
  post "/code/send" => "plainpage#execute"
  patch '/next_level' => "plainpage#next_level"
  devise_for :users, controllers: { registrations: "users/registrations", sessions: "users/sessions", passwords: "users/passwords" }

end
