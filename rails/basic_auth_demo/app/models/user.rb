include ActiveModel::SecurePassword

class User < ApplicationRecord
  has_secure_password
end
