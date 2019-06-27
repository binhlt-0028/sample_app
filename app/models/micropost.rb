class Micropost < ApplicationRecord
  belongs_to :user
  scope :create_desc, ->{order created_at: :desc}
  validates :user_id, presence: true
  validates :content, presence: true,
            length: {maximum: Settings.micropost.content_max_length}
end
