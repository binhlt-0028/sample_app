class ApplicationMailer < ActionMailer::Base
  default from: Settings.mailer.from_mail
  layout "mailer"
end
