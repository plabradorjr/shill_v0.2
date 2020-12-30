class User < ApplicationRecord
    has_secure_password
    validates_uniqueness_of :uid

    has_many :comments
end
