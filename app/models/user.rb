class User < ApplicationRecord
    require "securerandom"
    validates :username, presence: true
    validates :password, presence: true
end
