Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'
      resource '*', headers: :any, methods: [:patch, :put, :get, :post, :create, :delete, :destroy]
    end
  end