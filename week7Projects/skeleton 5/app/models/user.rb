class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :cats,
  foreign_key: :user_id,
  class_name: :Cat

  has_many :cat_rental_requests,
  foreign_key: :user_id,
  class_name: :CatRentalRequest


  attr_reader :password

  after_initialize :ensure_session_token

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end


  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
