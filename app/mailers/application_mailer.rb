class ApplicationMailer < ActionMailer::Base
  default from: ENV["FROM_MAIL_ADDR"]
  layout "mailer"
end
