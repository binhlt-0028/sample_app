class Micropost < ApplicationRecord
  belongs_to :user
  scope :create_desc, ->{order created_at: :desc}
  mount_uploader :picture, PictureUploader
  validates :user_id, presence: true
  validates :content, presence: true,
            length: {maximum: Settings.micropost.content_max_length}
  validate  :picture_size

  private

  def picture_size
    return unless picture.size > Settings.micropost.picture_size.megabytes
    errors.add(:picture, "should be less than 5MB")
  end
end
