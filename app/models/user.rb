class User < ApplicationRecord
    attr_reader :password

  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 10 }, allow_nil: true

  after_initialize :ensure_session_token
   
  has_many :questions,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Question

  has_many :answers, 
    primary_key: :id, 
    foreign_key: :author_id,
    class_name: :Answer 

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
